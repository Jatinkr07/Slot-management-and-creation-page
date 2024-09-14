import React from "react";
import { FaChevronDown } from "react-icons/fa";

const DropdownDetail = ({ icon, text }) => {
  return (
    <div className="flex items-center w-full p-2 mb-2 bg-white border rounded-md">
      <img src={icon} alt={text} className="w-6 h-6 mr-2" />
      <span className="flex-1 text-gray-700">{text}</span>
      <FaChevronDown className="text-gray-500" />
    </div>
  );
};

export default DropdownDetail;
