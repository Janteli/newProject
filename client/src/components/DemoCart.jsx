import React from "react";

const DemoCart = ({ selectedTime, selectedDate }) => {
  // console.log(selectedDate, selectedTime)
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto">
      <div className="flex flex-col">
        <h3>Your Information</h3>
        <div className="flex items-start gap-2">
          <p>
            {selectedDate.toDateString()} {selectedTime}{" "}
          </p>
          <p>Edit</p>
        </div>
      </div>
    </div>

    <form>
      <div>
      <label for="firstname">First name</label>
      <input type="text" />
      </div>
    </form>
    </>
  );
};

export default DemoCart;
