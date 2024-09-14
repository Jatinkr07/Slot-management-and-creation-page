import { useState } from "react";
import {
  format,
  startOfMonth,
  addMonths,
  subMonths,
  eachDayOfInterval,
} from "date-fns";

const DatePicker = ({ onDateChange }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateClick = (date) => {
    setSelectedDate(date);
    onDateChange(date);
  };

  const handleMonthChange = (increment) => {
    setCurrentMonth((prev) =>
      increment === 1 ? addMonths(prev, 1) : subMonths(prev, 1)
    );
  };

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0),
  });

  return (
    <div>
      <section className="date-time-selector">
        <h2 className="self-start text-lg font-semibold text-black max-md:ml-2.5">
          Select date and time
        </h2>
      </section>
      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-sm mx-auto">
        <div className="flex items-center justify-between mb-4">
          <button
            className="text-[#00A3FF] hover:bg-gray-100 rounded p-1"
            aria-label="Previous month"
            onClick={() => handleMonthChange(-1)}
          >
            &lt;
          </button>
          <h3 className="text-lg font-semibold">
            {format(currentMonth, "MMMM yyyy")}
          </h3>
          <button
            className="text-[#00A3FF] hover:bg-gray-100 rounded p-1"
            aria-label="Next month"
            onClick={() => handleMonthChange(1)}
          >
            &gt;
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2 mb-4 text-center text-sm text-gray-500">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
          {daysInMonth.map((day) => (
            <button
              key={day}
              className={`p-2 rounded-full w-full ${
                selectedDate.getDate() === day.getDate() &&
                selectedDate.getMonth() === day.getMonth()
                  ? "bg-[#00A3FF] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              aria-label={`Select ${format(day, "MMMM d, yyyy")}`}
              onClick={() => handleDateClick(day)}
            >
              {day.getDate()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
