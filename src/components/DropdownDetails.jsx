import React from "react";
import { FaChevronDown } from "react-icons/fa";

const DropdownDetail = ({ icon, text }) => {
  return (
    <div className="flex items-center p-2 border rounded-md bg-white w-full mb-2">
      <img src={icon} alt={text} className="w-6 h-6 mr-2" />
      <span className="flex-1 text-gray-700">{text}</span>
      <FaChevronDown className="text-gray-500" />
    </div>
  );
};

export default DropdownDetail;
