import React, { useState } from "react";

function TimeZone() {
  const [selectedTimeZone, setSelectedTimeZone] = useState(
    "Indian Standard Time"
  );

  const timeZoneOptions = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5ea19e2c19bf6d05a269e5612cbd5d8422985b484ff5418886221880724e5162?placeholderIfAbsent=true&apiKey=09e12020b34f432aa179b01aeeb68f3c",
      text: "Indian Standard Time",
      arrowIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/865ca19f90c6d5bbca94d8910d799570078aaad03597e4bcf4f069715bede9c0?placeholderIfAbsent=true&apiKey=09e12020b34f432aa179b01aeeb68f3c",
    },
  ];

  const selectedOption = timeZoneOptions.find(
    (option) => option.text === selectedTimeZone
  );

  return (
    <section className="flex flex-col items-start pr-14 pl-2.5 mt-5 w-full max-md:pr-5">
      <h2 className="text-sm font-semibold text-black">Time zone</h2>
      <div className="relative">
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-500 bg-white border rounded-md shadow-sm">
          {selectedOption?.icon && (
            <img
              loading="lazy"
              src={selectedOption.icon}
              alt="Time zone icon"
              className="object-contain w-[13px]"
            />
          )}
          <span className="flex-1">{selectedTimeZone}</span>
          {selectedOption?.arrowIcon && (
            <img
              loading="lazy"
              src={selectedOption.arrowIcon}
              alt="Arrow icon"
              className="object-contain w-4"
            />
          )}
        </button>
      </div>
    </section>
  );
}

export default TimeZone;
