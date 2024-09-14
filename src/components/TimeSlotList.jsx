import React, { useState, useEffect } from "react";
import { format, startOfDay, addHours } from "date-fns";
import DateDisplay from "./DateDisplay";
import TimeSlot from "./TimeSlot";
import { generateSlots } from "../utils/timeUtils";

const TimeSlotList = ({ selectedDate }) => {
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlots, setSelectedSlots] = useState([]);

  useEffect(() => {
    if (selectedDate) {
      const startTime = startOfDay(selectedDate);
      const endTime = addHours(startTime, 4);
      const slots = generateSlots(startTime, endTime);

      const shuffledSlots = slots.sort(() => 0.5 - Math.random());
      setAvailableSlots(shuffledSlots.slice(0, 3));
    }
  }, [selectedDate]);

  const handleTimeSlotClick = (time) => {
    setSelectedSlots((prevSelected) =>
      prevSelected.some((slot) => slot.time === time)
        ? prevSelected.filter((slot) => slot.time !== time) // Deselect
        : [
            ...prevSelected,
            availableSlots.find((slot) => slot.time === time), // Select
          ]
    );
  };

  const handleDeleteSlot = (time) => {
    setSelectedSlots((prev) => prev.filter((slot) => slot.time !== time));
    setAvailableSlots((prev) => prev.filter((slot) => slot.time !== time));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-md mx-auto">
      {selectedDate ? (
        <DateDisplay date={format(selectedDate, "dd MMMM yyyy")} />
      ) : (
        <p>No date selected</p>
      )}

      <div className="space-y-2">
        {availableSlots.map((slot) => (
          <TimeSlot
            key={slot.time}
            time={slot.time}
            label={slot.label}
            isExpanded={selectedSlots.some(
              (selected) => selected.time === slot.time
            )}
            isSelected={selectedSlots.some(
              (selected) => selected.time === slot.time
            )}
            onClick={() => handleTimeSlotClick(slot.time)}
            onDelete={() => handleDeleteSlot(slot.time)}
          />
        ))}
      </div>
    </div>
  );
};

export default TimeSlotList;
