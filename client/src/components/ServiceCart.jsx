import React from "react";

const ServiceCart = ({ service }) => {
  // Filter the list items dynamically
  const listItems = [service.listOne, service.listTwo, service.listThree].filter(Boolean);

  return (
    <>
      <div className="flex items-center border-none px-2 py-8 gap-4 bg-gray-50 shadow-lg rounded-md">
        <div className="text-2xl mb-4 h-full justify-center pt-20">{service.icon}</div>
        <div>
          <h3 className="text-sm font-normal mb-2 text-slate-500">{service.head}</h3>
          <ul className="text-xs text-gray-400 px-4">
            {listItems.map((item, index) => (
              <li key={index} className="list-disc mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ServiceCart;
