import React from "react";

function TimeSlot({ time, label, isExpanded, isSelected, onClick, onDelete }) {
  return (
    <div className="flex flex-col self-stretch">
      {isExpanded ? (
        <div className="flex items-center px-4 py-2.5 mt-6 w-full text-xs bg-white rounded-md border border-sky-500 border-solid shadow-sm">
          <button
            className="flex items-center mr-4 text-red-500 hover:text-red-700"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            aria-label={`Delete slot ${time}`}
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Delete
          </button>
          <div className="flex flex-col w-full">
            <div className="flex justify-between text-sm font-medium text-black">
              <div>{label || "No Label"}</div>
            </div>
            <div className="text-xs text-neutral-500">Time: {time}</div>
          </div>
        </div>
      ) : (
        <button
          className={`px-7 py-3 mt-3.5 text-sky-500 bg-white rounded-md border border-sky-500 border-solid max-md:px-5 ${
            isSelected
              ? "bg-sky-500 text-white"
              : "bg-white text-sky-500 hover:bg-sky-50"
          }`}
          onClick={onClick}
          aria-label={`Select slot ${time}`}
        >
          {time}
        </button>
      )}
    </div>
  );
}

export default TimeSlot;
