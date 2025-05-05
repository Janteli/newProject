import React, { useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import { IoPerson } from "react-icons/io5";
import DemoCart from "../components/DemoCart";

const StyledCalendar = styled(Calendar)`
  background: #425b76;
  color: white;

  .react-calendar {
    width: 350px;
    max-width: 100%;
    background: #425b76;
    border: 1px solid #a0a096;
    font-family: "Arial", "Helvetica", sans-serif;
    line-height: 1.125em;
  }

  .react-calendar--doubleView {
    width: 700px;
  }

  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }

  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }

  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }

  .react-calendar button:enabled:hover {
    cursor: pointer;
  }

  .react-calendar__navigation {
    display: flex;
    height: 44px;
    margin-bottom: 1em;
    padding: 2px 120px;
  }

  // month - year whole part
  .react-calendar__navigation button {
    min-width: 44px;
    background: inherit;
    font-size: 1.3em;
  }

  .react-calendar__navigation button:disabled {
    background-color: red;
  }

  // .react-calendar__navigation button:enabled:hover,
  // .react-calendar__navigation button:enabled:focus {
  //   background-color: red;
  // }

  // sun mun days...
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font: inherit;
    font-size: 0.8em;
    font-weight: normal;
  }

  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
  }

  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font: inherit;
    font-size: 0.75em;
    font-weight: bold;
  }

  .react-calendar__month-view__days__day--weekend {
    color: #d10000;
  }

  .react-calendar__month-view__days__day--neighboringMonth,
  .react-calendar__decade-view__years__year--neighboringDecade,
  .react-calendar__century-view__decades__decade--neighboringCentury {
    color: #757575;
  }

  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2 em 1em;
  }

  .react-calendar__tile {
    border-radius: 50%; /* or smaller radius like 10% */
    height: auto;
    width: auto;
    aspect-ratio: 1 / 1; /* keeps them square */
  }

  .react-calendar__tile:disabled {
    background-color: #425b76;
    color: #ababab;
  }

  .react-calendar__month-view__days__day--neighboringMonth:disabled,
  .react-calendar__decade-view__years__year--neighboringDecade:disabled,
  .react-calendar__century-view__decades__decade--neighboringCentury:disabled {
    color: #cdcdcd;
  }

  // .react-calendar__tile:enabled:hover,
  // .react-calendar__tile:enabled:focus {
  //   background-color: #e6e6e6;
  // }

  // current day
  // .react-calendar__tile--now {
  //   background: red;
  // }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #ffffa9;
  }

  .react-calendar__tile--hasActive {
    background: #76baff;
  }

  // .react-calendar__tile--hasActive:enabled:hover,
  // .react-calendar__tile--hasActive:enabled:focus {
  //   background: #a9d4ff;
  // }

  .react-calendar__tile--active {
    background: #425b76;
    color: white;
  }

  // current month current day
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #1087ff;
  }

  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
  }

  /* Style the navigation buttons */
  .react-calendar__navigation__arrow {
    font-size: 30px; /* Change the size of the arrow */
    width: 30px; /* Adjust button width */
    height: 30px; /* Adjust button height */
    display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;
    background: #fff; /* Add a background color (optional) */
    // border-radius: 50%; /* Make it circular (optional) */
    color: #ababab; /* Change the color of the arrow */
    margin: 0;
  }

  // .react-calendar__navigation__arrow:enabled:hover,
  // // .react-calendar__navigation__arrow:enabled:focus {
  // //   background-color: red; /* Add hover effect (optional) */
  // // }

  .react-calendar__navigation__label {
    font-size: 18px; /* Adjust label size if needed */
  }

  // .react-calendar__navigation__arrow react-calendar__navigation__prev-button{
  //   height: 100px !important;
  // }
`;

// .react-calendar__navigation{
//   display: flex;
//   justify:center;
//   padding:2px 120px;
//   }

//   .cMTGfc .react-calendar__navigation__label span {
//   font-style: normal;
//   color:black

const BookDemo = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeStartDate, setActiveStartDate] = useState(new Date()); // Controls visible months
  const [selectedTime, setSelectedTime] = useState(null);
  const [duration, setDuration] = useState(15);

  const handleActiveStartDateChange = ({ activeStartDate }) => {
    const currentMonth = activeStartDate.getMonth();
    // Restrict navigation to January (0) and February (1)
    if (currentMonth === 0 || currentMonth === 1) {
      setActiveStartDate(activeStartDate);
    }
  };

  const timeSlots15 = [
    "2:15 pm",
    "2:30 pm",
    "2:45 pm",
    "3:00 pm",
    "3:15 pm",
    "3:30 pm",
    "3:45 pm",
    "4:00 pm",
    "4:15 pm",
    "4:30 pm",
    "4:45 pm",
    "5:00 pm",
    "5:15 pm",
    "5:30 pm",
    "5:45 pm",
    "6:00 pm",
    "6:15 pm",
  ];

  const timeSlots30 = [
    "2:30 pm",
    "3:00 pm",
    "3:30 pm",
    "4:00 pm",
    "4:30 pm",
    "5:00 pm",
    "5:30 pm",
    "6:00 pm",
  ];

  const timeSlots60 = ["3:00 pm", "4:00 pm", "5:00 pm"];

  const handleTimeSlotClick = (time) => {
    setSelectedTime(time);
  };

  // console.log(selectedTime);

  const tileDisabled = ({ date, view }) => {
    if (view !== "month") return false;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const day = date.getDay();
    const month = date.getMonth();
    const dateNumber = date.getDate();
    const currentMonth = today.getMonth();

    if (date < today) return true;
    if (day === 0 || day === 6) return true;
    if (month === 0 && dateNumber <= 6) return true;
    if (month !== currentMonth) return true;

    return false;
  };

  // timezone newyork
  const nyDateString = selectedDate.toLocaleDateString("en-US", {
    timeZone: "America/New_York",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const nyDateTimeString = new Date(
    `${selectedDate.toDateString()} ${selectedTime}`
  ).toLocaleString("en-US", {
    timeZone: "America/New_York",
    hour: "2-digit",
    minute: "2-digit",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* Main booking section */}
      <div className={` mt-44 ${selectedTime !== null ? "hidden" : ""}`}>
        <h3 className="text-3xl font-normal text-center">
          Book a{" "}
          <span className="bg-gradient-to-r from-[#C2E485] to-[#D7F825] px-2 py-1 rounded-md">
            demo
          </span>{" "}
          with our Code One LLC expert
        </h3>
        <p className="text-md text-gray-400 text-center">
          Other questions? <u>Contact sales</u>
        </p>

        {/* Booking Form */}
        <div className="flex w-full items-center justify-center gap-4 py-8 shadow-md mx-auto">
          {/* Left: Calendar */}
          <div className="hidden  max-w-1/2 md:flex flex-col items-center justify-center bg-[#425B76] py-6">
            <div className="p-6 bg-gray-400 border rounded-full w-20 h-20 flex items-center justify-center">
              <IoPerson className="text-5xl" />
            </div>
            <div className="max-w-md mx-auto shadow-lg rounded-md mt-10">
              <h3 className="text-2xl font-sans mb-4 text-center text-white">
                Consult with Code One Team
              </h3>
              <StyledCalendar
                onChange={setSelectedDate}
                value={selectedDate}
                tileDisabled={tileDisabled}
                onActiveStartDateChange={handleActiveStartDateChange}
                activeStartDate={activeStartDate}
                calendarType="gregory"
                prev2Label={null}
                next2Label={null}
              />
            </div>
          </div>

          {/* Right: Time Slots */}
          <div className="w-full md:w-1/2 bg-white pl-4 rounded-md pr-8 shadow-lg max-w-sm py-10">
            <h3 className="text-md font-normal text-[#425B76] mb-4">
              How long do you need?
            </h3>
            <div className="flex mb-4">
              <button
                onClick={() => setDuration(15)}
                className={`text-xs font-light border border-gray-500 px-9 py-2 rounded-sm ${
                  duration === 15 ? "bg-blue-200" : ""
                }`}
              >
                15 mins
              </button>
              <button
                onClick={() => setDuration(30)}
                className={`text-xs font-light border border-gray-500 px-9 py-2 rounded-sm ${
                  duration === 30 ? "bg-blue-200" : ""
                }`}
              >
                30 mins
              </button>
              <button
                onClick={() => setDuration(60)}
                className={`text-xs font-light border border-gray-500 px-9 py-2 rounded-sm ${
                  duration === 60 ? "bg-blue-200" : ""
                }`}
              >
                1 hour
              </button>
            </div>
            <h3 className="text-md font-normal text-[#425B76]">
              What time works best
            </h3>
            <p className="text-md font-light text-[#425B76] mb-4">
              Showing times for{" "}
              <span className="text-md font-normal text-[#425B76]">
                {selectedDate.toDateString()}
              </span>
            </p>
            <p className="text-sm mb-4 text-blue-400">
              EST/New York Timezone (UTC{" "}
              {
                Intl.DateTimeFormat("en-US", {
                  timeZoneName: "short",
                  timeZone: "America/New_York",
                })
                  .formatToParts()
                  .find((part) => part.type === "timeZoneName")?.value
              }
              )
            </p>

            <div className="flex flex-col gap-2 max-h-96 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
              {duration === 15 &&
                timeSlots15.map((time, index) => (
                  <button
                    key={index}
                    onClick={() => handleTimeSlotClick(time)}
                    className={`px-2 py-4 text-gray-600 border rounded-sm text-center cursor-pointer ${
                      selectedTime === time
                        ? "bg-transparent text-blue-400"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {time}
                  </button>
                ))}
            </div>
            <div className="flex flex-col gap-2 max-h-96 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
              {duration === 30 &&
                timeSlots30.map((time, index) => (
                  <button
                    key={index}
                    onClick={() => handleTimeSlotClick(time)}
                    className={`px-2 py-4 text-gray-600 border rounded-sm text-center cursor-pointer ${
                      selectedTime === time
                        ? "bg-transparent text-blue-400"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {time}
                  </button>
                ))}
            </div>
            <div className="flex flex-col gap-2 max-h-96 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
              {duration === 60 &&
                timeSlots60.map((time, index) => (
                  <button
                    key={index}
                    onClick={() => handleTimeSlotClick(time)}
                    className={`px-2 py-4 text-gray-600 border rounded-sm text-center cursor-pointer ${
                      selectedTime === time
                        ? "bg-transparent text-blue-400"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {time}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Display DemoCart */}
      <div className={`mt-44 ${selectedTime === null ? "hidden" : ""}`}>
        <DemoCart
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          nyDateTimeString={nyDateTimeString}
          setSelectedTime={setSelectedTime}
        />
      </div>
    </>
  );
};

export default BookDemo;
