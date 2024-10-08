import React, { useState } from "react";
import DropdownDetail from "./DropdownDetails"; // Ensure this matches the actual filename

const SlotForm = () => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const details = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6e911febe06fe83efda051a6db2092cb9d5a41b72f708ef172e5c1653bb9b74a?placeholderIfAbsent=true&apiKey=09e12020b34f432aa179b01aeeb68f3c",
      text: "Duration",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb8cfed241d89430b803e974407ccfcbda374160d2d957b5ed52c22ceaa0c055?placeholderIfAbsent=true&apiKey=09e12020b34f432aa179b01aeeb68f3c",
      text: "Interval",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/69bbea8275519b8d022275b80890ae919a239d303d5d4294302f69844a8c0139?placeholderIfAbsent=true&apiKey=09e12020b34f432aa179b01aeeb68f3c",
      text: "Graphic designer",
    },
  ];

  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">Select date and time</h3>

      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">Start Time</label>
        <input
          type="datetime-local"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">End Time</label>
        <input
          type="datetime-local"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div className="space-y-4">
        {details.map((detail, index) => (
          <DropdownDetail
            key={index}
            icon={detail.icon}
            text={detail.text}
            start={detail.start}
            end={detail.end}
          />
        ))}
      </div>
    </div>
  );
};

export default SlotForm;
