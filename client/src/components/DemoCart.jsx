import React, { useState, useEffect } from "react";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import emailjs from "@emailjs/browser";
import axios from "axios";

const GOOGLE_CLIENT_ID =
  import.meta.env.VITE_GOOGLE_CLIENT_ID ||
  "29963929626-ar562gl4gpki5a68sot21l891n0vra6o.apps.googleusercontent.com";
const SERVICE_ID = "service_4iql33e";
const TEMPLATE_ID = "template_0xkntwb";
const USER_ID = "nz3_r0J3z2XMtXvQV";

const DemoCart = ({ selectedTime, selectedDate, nyDateTimeString }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [booked, setBooked] = useState(false); // Starts as true per your code
  const [token, setToken] = useState(
    () => localStorage.getItem("google_access_token") || null
  );
  const [errors, setErrors] = useState({});

  console.log("Selected Date:", selectedDate.toDateString());

  useEffect(() => {
    if (token) {
      localStorage.setItem("google_access_token", token);
      fetchUserProfile(token);
    }
  }, [token]);

  const fetchUserProfile = async (accessToken) => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      const { given_name, family_name, email } = response.data;
      setFirstname(given_name || "");
      setLastname(family_name || "");
      setEmail(email || "");
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => setToken(tokenResponse.access_token),
    onError: (error) => console.log("Login failed:", error),
    scope:
      "https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
    clientId: GOOGLE_CLIENT_ID,
  });

  const logout = () => {
    setToken(null);
    localStorage.removeItem("google_access_token");
    setFirstname("");
    setLastname("");
    setEmail("");
  };

  const validateForm = () => {
    const newErrors = {};
    if (!firstname.trim()) newErrors.firstname = "First name is required";
    if (!lastname.trim()) newErrors.lastname = "Last name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) return alert("Please log in with Google to proceed.");
    if (!validateForm()) return;

    try {
      const eventStart = new Date(selectedDate);
      const [hours, minutes] = selectedTime.split(":");
      eventStart.setHours(parseInt(hours), parseInt(minutes));
      const eventEnd = new Date(eventStart);
      eventEnd.setHours(eventEnd.getHours() + 1);

      const response = await axios.post(
        "https://www.googleapis.com/calendar/v3/calendars/primary/events",
        {
          summary: `Demo with ${firstname} ${lastname}`,
          start: {
            dateTime: eventStart.toISOString(),
            timeZone: "America/Los_Angeles",
          },
          end: {
            dateTime: eventEnd.toISOString(),
            timeZone: "America/Los_Angeles",
          },
          attendees: [{ email }],
          conferenceData: {
            createRequest: {
              requestId: `demo-${Date.now()}`,
              conferenceSolutionKey: { type: "hangoutsMeet" },
            },
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          params: { conferenceDataVersion: 1 },
        }
      );

      const meetLink = response.data.hangoutLink;
      if (!meetLink) throw new Error("Failed to generate Meet link");

      const templateParams = {
        from_name: "Code One LLC",
        to_name: `${firstname} ${lastname}`,
        to_email: email,
        selected_date: selectedDate.toDateString(),
        selected_time: selectedTime,
        meet_link: meetLink,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
      setBooked(true);
      setFirstname("");
      setLastname("");
      setEmail("");
      setErrors({});
    } catch (error) {
      console.error("Error:", error);
      if (error.response?.status === 401) {
        alert("Your session has expired. Please log in again.");
        logout();
      } else {
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-8">
      <div className={`${booked ? "hidden" : ""}`}>
        <h3 className="md:text-4xl text-3xl sm:text-2xl font-normal text-center text-gray-800 pt-4">
          Book a{" "}
          <span className="bg-gradient-to-r from-[#D8FFA7] to-[#D6F719] px-2 py-0 rounded-sm">
            {" "}
            Demo{" "}
          </span>
          <br /> With CODEONE LLC
        </h3>
      </div>

      {!token ? (
        <div
          className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-8rem)] cursor-pointer"
          onClick={() => login()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 256 262"
            className="fill-current"
          >
            <path
              fill="#4285F4"
              d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
            />
            <path
              fill="#34A853"
              d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
            />
            <path
              fill="#FBBC05"
              d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
            />
            <path
              fill="#EB4335"
              d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
            />
          </svg>
          <div className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition  flex flex-col items-center justify-center gap-2">
            <span>Login with Google</span>
          </div>
        </div>
      ) : (
        <div
          className={`px-6 md:px-10 py-8 shadow-md bg-white rounded-md md:w-[800px] w-full mx-auto mt-8 ${
            booked ? "hidden" : ""
          }`}
        >
          <form className="space-y-4" onSubmit={handleSubmit}>
            <h3 className="text-xl font-normal text-blue-900">
              Your Information
            </h3>
            <p className="text-gray-600">
              {selectedDate.toDateString()} at {selectedTime}
            </p>
            <div className="flex flex-col md:gap-6">
              <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                <div className="w-full md:w-1/2">
                  <label className="block text-xs font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    className="border p-3 w-full rounded-sm focus:ring-blue-500 outline-cyan-400 bg-blue-50 text-gray-600 text-sm"
                  />
                  {errors.firstname && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.firstname}
                    </p>
                  )}
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block text-xs font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    className="border p-3 w-full rounded-sm focus:ring-blue-500 text-gray-600 text-sm outline-cyan-400 bg-blue-50"
                  />
                  {errors.lastname && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.lastname}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-2 md:mt-4">
                <label className="block text-xs font-medium text-gray-700 mb-2">
                  Your Email Address *
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border p-3 w-full rounded-sm focus:ring-blue-500 outline-cyan-400 bg-blue-50 text-gray-600 text-sm"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>
          </form>
          <div className="flex items-center justify-between mt-4 md:mt-12">
            <button
              onClick={logout}
              className="py-2 px-4 border bg-transparent text-black rounded-sm hover:text-red-500 transition"
            >
              Logout
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="py-2 px-4 bg-blue-900 text-white rounded-sm hover:bg-green-600 transition"
            >
              Confirm
            </button>
          </div>
        </div>
      )}

      {booked && (
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md text-center mx-auto mt-4 flex flex-col items-center gap-2">
          <h1 className="text-3xl font-normal text-gray-700 mb-4">
            Booking Confirmed
          </h1>
          <img
            src="//static.hsappstatic.net/ui-images/static-2.749/optimized/success.svg"
            alt="Success"
            className="w-24 mx-auto mt-4"
          />
          <p className="text-gray-600 mt-2 font-normal text-xl">
            You're booked with CODE ONE LLC.
          </p>
          <p className="text-gray-600 font-normal">
            An invitation has been emailed.
          </p>
          <div className="space-y-0.5">
            <p className="text-blue-900 font-normal text-lg">
              {selectedDate.toDateString()}
            </p>
            <p className="text-blue-900 font-normal text-lg">{selectedTime}</p>
          </div>
          {/* <p className="text-gray-600 font-normal">
            Meeting Time (New York): {nyDateTimeString}
          </p> */}
        </div>
      )}
    </div>
  );
};

const WrappedDemoCart = (props) => (
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <DemoCart {...props} />
  </GoogleOAuthProvider>
);

export default WrappedDemoCart;
