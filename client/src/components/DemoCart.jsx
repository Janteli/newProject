import React, { useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const DemoCart = ({ selectedTime, selectedDate, setSelectedTime }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [booked, setBooked] = useState(false);
  const [meetLink, setMeetLink] = useState(""); // State for the Meet link

  const form = useRef();

  const generateMeetLink = async () => {
    try {
      
      const newLink = `https://meet.google.com/new?code=${generateRandomCode(10)}`; 
      setMeetLink(newLink);
      console.log('worked meetLink?', meetLink)
      return newLink; // Return the link for use in the email 
    } catch (error) {
      console.error("Error generating Meet link:", error);
      return null; // Return null to indicate failure
    }
  };

  // console.log(meetLink)

  const generateRandomCode = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    // console.log(result)
    return result;

  };


  const sendEmail = async (e) => {
    e.preventDefault();

    const generatedLink = await generateMeetLink(); 

    if (!generatedLink) {
      alert("Failed to generate Meet link. Please try again.");
      return;
    }

    const templateParams = {
      from_name: "Code One LLC",
      from_email: "codeone@gmail.com",
      to_name: firstname,
      to_email: email,
      selected_date: selectedDate.toDateString(),
      selected_time: selectedTime,
      meet_link: generatedLink, // Include the Meet link in the email
    };

    emailjs
      .sendForm(
        "service_sz9g5lc",
        "template_gcd5k4v",
        form.current,
        "vMGkqDDUbESXXDONr"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setFirstname("");
          setLastname("");
          setEmail("");
          setMeetLink("")
          setBooked(true);
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send email. Please check the console for errors.");
        }
      );

    e.target.reset();
  };

  const isFormValid = firstname.trim() !== "" && lastname.trim() !== "" && email.trim() !== "";

  return (
    <>
      {/* Intro */}
      <div className={`mt- md:mb-16 ${!booked ? "hidden" : ""}`}>
        <h3 className="md:text-3xl text-2xl font-normal text-center mb-4">
          Book a{" "}
          <span className="bg-gradient-to-r from-[#C2E485] to-[#D7F825] px-2 py-1 rounded-md">
            demo
          </span>{" "}
          with our Code One LLC <br /> expert
        </h3>
        <p className="text-md text-gray-400 text-center">
          Other questions? <u>Contact sales</u>
        </p>
      </div>

      {/* Form Section */}
      <div
        className={`mx-auto w-full md:w-[800px] shadow-md p-8 m-20 ${
          booked ? "hidden" : ""
        }`}
      >
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h3 className="text-[#33475B] text-xl mb-2">Your Information</h3>
            <div className="flex items-start gap-2">
              <p className="text-md text-[#33475B]">
                {selectedDate.toDateString()} {selectedTime}{" "}
              </p>
              <p
                className="text-sm text-blue-400 hover:cursor-pointer"
                onClick={() => setSelectedTime(null)}
              >
                Edit
              </p>
            </div>
          </div>
        </div>

        <form className="flex mt-3 w-full" onSubmit={sendEmail} ref={form}>
          <div className="flex flex-col w-full gap-4">
            <div className="flex gap-2 mb-4">
              <div className="flex flex-col gap-2 md:flex-row w-full">
                <div className="flex flex-col md:w-1/2 w-full mb-2">
                  <label
                    htmlFor="firstname"
                    className="items-start text-[#33475B] text-xs mb-1"
                  >
                    First name *
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    className="border outline-none border-gray-400 rounded-sm px-2 py-2"
                  />
                </div>

                <div className="flex flex-col md:w-1/2 w-full">
                  <label
                    htmlFor="lastname"
                    className="items-start text-[#33475B] text-xs mb-1"
                  >
                    Last name *
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    className="border outline-none border-gray-400 rounded-sm px-2 py-2"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full">
              <label
                htmlFor="email"
                className="items-start text-[#33475B] text-xs"
              >
                Your email address *
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border outline-none border-gray-400 rounded-sm px-2 py-2"
              />
            </div>

            {/* Hidden input fields for selectedDate and selectedTime */}
            <input
              type="hidden"
              name="selected_date"
              value={selectedDate.toDateString()}
            />
            <input type="hidden" name="selected_time" value={selectedTime} />
            <input type="hidden" name="meetLink" value={meetLink} />


            <div className="flex justify-between mt-4">
              <div className="flex items-center justify-center border border-gray-400 px-4 py-2 rounded-sm">
                <MdKeyboardArrowLeft />
                <div onClick={() => setSelectedTime(null)} className="text-[#33475B] text-sm px-4 cursor-pointer">Back</div>
              </div>

              <div className={`flex items-center justify-center border border-gray-400 px-4 py-2 rounded-sm ${!isFormValid ? "bg-gray-400" : "bg-blue-400"}`}>
                <button
                  className="text-[#33475B] text-sm"
                  type="submit"
                  disabled={!isFormValid} // Disable button if form is invalid
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Success Section */}
      <div
        className={`flex border-none shadow-md items-center justify-center md:w-[400px] mx-auto md:mt-10 py-10 ${
          !booked ? "hidden" : "block"
        }`}
      >
        <div className="flex flex-col items-center justify-center w-full">
          <img
            src="//static.hsappstatic.net/ui-images/static-2.731/optimized/success.svg"
            className="w-56 h-40"
          />
          <div className="flex flex-col items-center justify-center px-8 mt-4">
            <h1 className="text-center text-2xl font-light text-gray-600">
              Booking confirmed
            </h1>
            <p className="text-center text-sm text-gray-600 font-light">
              You're booked with CODE ONE LLC. An invitation has been
              emailed to you.
            </p>
            <h1 className="text-xl font-normal text-slate-600 mt-6">
              {selectedDate.toDateString()}
            </h1>
            <h1 className="text-xl font-normal text-slate-600 ">
              {selectedTime}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoCart;
