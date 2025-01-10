import React, { useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import { IoPerson } from "react-icons/io5";

const StyledCalendar = styled(Calendar)`
  background: #425b76;
  color: white;

  .react-calendar {
  width: 350px;
  max-width: 100%;
  background: #425B76;
  border: 1px solid #a0a096;
  font-family: 'Arial', 'Helvetica', sans-serif;
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
  padding:2px 120px;
}

// month - year whole part
.react-calendar__navigation button {
  min-width: 44px;
  background: inherit;
  font-size: 1.3em
}

.react-calendar__navigation button:disabled {
  background-color: #425B76;
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
  font-size: 0.80em;
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
  padding: 2em 0.5em;
}

.react-calendar__tile {
  max-width: 100%;
  padding: 10px 6.6667px;
  background: #425B76;
  text-align: center;
  font: inherit;
  font-size: 0.833em;
  height: 4em;
  width: 1px;
  // border: 1px solid none;
  border-radius: 50%
}

.react-calendar__tile:disabled {
  background-color: #425B76;
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

.react-calendar__tile--now {
  background: #ffff76;
}

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
  background: #425B76;
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
    justify-items:center;
    background: #fff; /* Add a background color (optional) */
    // border-radius: 50%; /* Make it circular (optional) */
    color: #ababab; /* Change the color of the arrow */
  }

  .react-calendar__navigation__arrow:enabled:hover,
  .react-calendar__navigation__arrow:enabled:focus {
    background-color: #e6e6e6; /* Add hover effect (optional) */
  }

  .react-calendar__navigation__label {
    font-size: 18px; /* Adjust label size if needed */
  }



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

  const handleActiveStartDateChange = ({ activeStartDate }) => {
    const currentMonth = activeStartDate.getMonth();
    // Restrict navigation to January (0) and February (1)
    if (currentMonth === 0 || currentMonth === 1) {
      setActiveStartDate(activeStartDate);
    }
  };

  const timeSlots = [
    "2:15 pm",
    "2:30 pm",
    "2:45 pm",
    "3:00 pm",
    "3:15 pm",
    "3:30 pm",
  ];

  const handleTimeSlotClick = (time) => {
    setSelectedTime(time);
  };

  const tileDisabled = ({ date, view }) => {
    const day = date.getDay();
    const month = date.getMonth();
    const dateNumber = date.getDate();
    const currentMonth = new Date().getMonth()
    // Disable weekends (Sundays and Saturdays)
    if (day === 0 || day === 6) {
      return true;
    }

    // Disable January 6th
    if (month === 0 && dateNumber <= 6) {
      return true;
    }

    // Disable all dates after February 14th
    if (month === 1 && dateNumber > 14) {
      return true;
    }
    if (month !== currentMonth) {
      return true
    }


    // Default: Allow other dates
    return false;
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex  flex-col items-center justify-center mt-36 bg-[#425B76]">
      <div className=" p-6 bg-gray-400 border rounded-full w-20 h-20 flex items-center justify-center">
        <IoPerson className="w-8 h-8" />
      </div>
      <div className=" max-w-md mx-auto  shadow-lg  rounded-md mt-10 ">
        <h3 className="text-2xl  font-sans mb-4 text-center text-white ">
          Meet with Kristoffer Nystrøm
        </h3>
        
        <StyledCalendar
          onChange={setSelectedDate}
          value={selectedDate}
          tileDisabled={tileDisabled}
          onActiveStartDateChange={handleActiveStartDateChange}
          activeStartDate={activeStartDate} // Force visible months
          calendarType="gregory"
          prev2Label={null} // Remove double backward arrow
          next2Label={null} // Remove double forward arrow
        />
        {selectedDate && (
          <p className="mt-4 text-blue-600">
            <strong>Selected Date:</strong> {selectedDate.toDateString()}
          </p>
        )}
      </div>
    </div>

        {/* Time Slots Section */}

    <div>
      <div className="bg-white p-6 rounded-md shadow-lg max-w-sm">
        <h3 className="text-lg font-bold mb-4">
          Showing times for <span className="text-blue-600">{selectedDate.toDateString()}</span>
        </h3>
        <p className="text-gray-500 mb-4">UTC +05:45 Kathmandu, Nepal</p>
        <div className="flex flex-col gap-2">
          {timeSlots.map((time, index) => (
            <button
              key={index}
              onClick={() => handleTimeSlotClick(time)}
              className={`p-2 border rounded-md text-center cursor-pointer ${
                selectedTime === time ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {time}
            </button>
          ))}
        </div>

    </div>
    </div>
    </div>
  );
};

export default BookDemo;
