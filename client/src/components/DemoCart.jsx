import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const DemoCart = ({ selectedTime, selectedDate, setSelectedTime }) => {
  // console.log(selectedDate, selectedTime)

  const [successPopUp, setSuccessPopUp] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [booked, setBooked] = useState(false);
  // const [selectedDate, setSelectedDate] = useState("")
  // const [selectedTime, setSelectedTime] = useState("")

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // alert("Is it working?")
    const templateParams = {
      from_name: "Code One LLC",
      from_email: "codeone@gmail.com",
      to_name: firstname,
      to_email: email,
      selected_date: selectedDate.toDateString(), // Adding the selectedDate
      selected_time: selectedTime, // Adding the selectedTime
    };

    console.log(firstname, lastname, selectedDate, selectedTime, email);

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
          setSuccessPopUp(true);
          setBooked(true);
          // alert("Email sent successfully!");
          setTimeout(() => {
            setSuccessPopUp(false);
          }, 3000);
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send email. Please check the console for errors.");
        }
      );

    e.target.reset();
  };

  return (
    <>
      
      {/* intro */}
      <div className={`mt- md:mb-16 ${!booked ?"hidden":""}`}>
        <h3 className="md:text-3xl text-2xl font-normal text-center mb-4">
          Book a{" "}
          <span className="bg-gradient-to-r from-[#C2E485] to-[#D7F825] px-2 py-1 rounded-md">
            demo
          </span>{" "}
          with our Code One LLC <br/> expert
        </h3>
        <p className="text-md text-gray-400 text-center">
          Other questions? <u>Contact sales</u>
        </p>
      </div>

      {/* form section */}

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
              <p className="text-sm text-blue-400 hover:cursor-pointer"
                onClick={()=> setSelectedTime(null)}

              >Edit</p>
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

            <div className="flex justify-between mt-4">
              <div className="flex items-center justify-center border border-gray-400 px-4 py-2 rounded-sm">
                <MdKeyboardArrowLeft />
                <button className="text-[#33475B] text-sm px-4">Back</button>
              </div>

              <div className="flex items-center justify-center border border-gray-400 px-4 py-2 rounded-sm">
                <button className="text-[#33475B] text-sm" type="submit">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className={`flex border-none shadow-md items-center justify-center md:w-[400px] mx-auto md:mt-10 py-10 ${!booked ? "hidden":""}`}>
        <div className="flex flex-col items-center justify-center w-full">
          <img
            src="//static.hsappstatic.net/ui-images/static-2.731/optimized/success.svg"
            className="w-56 h-40"
          />

          <div className="flex flex-col items-center justify-center px-8 mt-4">
            <h1 className="text-center text-2xl font-light text-gray-600">Booking confirmed</h1>
            <p className="text-center text-sm text-gray-600 font-light">
              You're booked with Kristoffer Nystrøm. An invitation has been
              emailed to you.
            </p>
            <h1 className="text-xl font-normal text-slate-600 mt-6">{selectedDate.toDateString()}</h1>
            <h1 className="text-xl font-normal text-slate-600 ">{selectedTime}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoCart;
