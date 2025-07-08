import { useState } from "react";

const tabs = ["All Orders", "Pending", "Reviewed", "Arrived"];

const Tabs = () => {
  const [active, setActive] = useState("All Orders");

  return (
    <div className="flex border-t border-[#EEEEEE] px-4 bg-white min-w-full">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => {
            console.log(`Switched to ${tab}`);
            setActive(tab);
          }}
          className={`px-4 py-2 text-sm font-medium border-t-2  ${
            active === tab ? "border[#4B6A4F] bg-[#E8F0E9] font-semibold text-[#3E5741]" : "border-transparent text-gray-500"
          }`}
        >
          {tab}
        </button>
      ))}
      <button
        className="ml-2 px-2 py-2 text-[25px] text-gray-500 text-sm hover:text-black"
        onClick={() => console.log("Add New Tab (+) clicked")}
      >
        +
      </button>
    </div>
  );
};

export default Tabs;
