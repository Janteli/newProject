import React from "react";

const Cart = ({ work }) => {
  return (
    <div className=" shadow-md bg-gray-200 p-4 relative">
          <div className="flex flex-col rounded-md">
            <img
              src={work.img}
              alt="product1"
              className="w-16 h-16"
            />

            <h4 className="mt-6 text-xs  font-normal">{work.title}</h4>
            {/* <h4 className="text-xs  font-normal">Account</h4> */}

            <p className="mt-4 text-[12px] text-gray-500 mb-10">
              {work.description}
            </p>

            {/* <button className="absolute left-4 bottom-2 bg-white rounded-sm px-3 py-1 text-xs font-normal">
              View Product
            </button> */}
          </div>
          </div>
  );
};

export default Cart;
