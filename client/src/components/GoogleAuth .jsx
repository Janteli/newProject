import React, { useState, useEffect, useRef } from "react";
import { GoogleOAuthProvider, GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";
import emailjs from "@emailjs/browser";

const CLIENT_ID = "988264269029-6ji441pmegjd2c0lsmhfp43fd827b7f1.apps.googleusercontent.com";
const SERVICE_ID = "service_sz9g5lc";
const TEMPLATE_ID = "template_gcd5k4v";
const USER_ID = "vMGkqDDUbESXXDONr";

const DemoCart = ({ selectedTime, selectedDate, setSelectedTime }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [booked, setBooked] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const form = useRef();

  const createGoogleCalendarEvent = async () => {
    if (!accessToken) {
      alert("Please log in with Google first.");
      return;
    }

    console.log("📅 Creating Event with Token:", accessToken);

    try {
      const event = {
        summary: "Test Meeting",
        description: "This is a test event",
        start: { dateTime: "2025-02-23T10:00:00-07:00", timeZone: "America/Los_Angeles" },
        end: { dateTime: "2025-02-23T11:00:00-07:00", timeZone: "America/Los_Angeles" },
        conferenceData: { createRequest: { requestId: "sample123", conferenceSolutionKey: { type: "hangoutsMeet" } } },
      };

      const response = await fetch("https://content.googleapis.com/calendar/v3/calendars/primary/events?conferenceDataVersion=1", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
      });

      const data = await response.json();
      console.log("✅ Google Meet Link:", data.hangoutLink);
      return data.hangoutLink;
    } catch (error) {
      console.error("❌ Error Creating Event:", error);
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const meetLink = await createGoogleCalendarEvent();
      if (!meetLink) {
        alert("❌ Failed to generate Meet link. Please try again.");
        return;
      }

      const templateParams = {
        from_name: "Code One LLC",
        to_name: firstname,
        to_email: email,
        selected_date: selectedDate.toDateString(),
        selected_time: selectedTime,
        meet_link: meetLink,
      };

      emailjs
        .send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
        .then(() => {
          console.log("✅ Email Sent Successfully");
          setBooked(true);
        })
        .catch((error) => console.error("❌ Failed to send email:", error));
    } catch (error) {
      console.error("❌ Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <div>
        <div className={`mt-4 ${booked ? "hidden" : ""}`}>
          <h3 className="text-2xl font-normal text-center">Book a Demo</h3>
        </div>

        <div className={`w-full max-w-lg mx-auto p-8 shadow-md ${booked ? "hidden" : ""}`}>
          <form className="space-y-4" onSubmit={sendEmail} ref={form}>
            <div>
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className="border p-2 w-full"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                className="border p-2 w-full"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 w-full"
                required
              />
            </div>

            <div>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log("✅ Login Success:", credentialResponse);
                  setAccessToken(credentialResponse.access_token);
                }}
                onError={() => {
                  console.error("❌ Login Failed");
                }}
              />
            </div>

            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 w-full"
                disabled={!firstname || !lastname || !email}
              >
                Confirm
              </button>
            </div>
          </form>
        </div>

        <div className={`p-8 shadow-md w-full max-w-md mx-auto text-center ${!booked ? "hidden" : ""}`}>
          <h1 className="text-xl font-bold">Booking Confirmed!</h1>
          <p>Your meeting has been scheduled.</p>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default DemoCart;