import { format } from "date-fns";

export const generateSlots = (startTime, endTime, interval = 60) => {
  const slots = [];
  let currentTime = new Date(startTime);

  while (currentTime < endTime) {
    const formattedTime = format(currentTime, "h:mm a");
    slots.push({ time: formattedTime, label: `Slot ${slots.length + 1}` });
    currentTime = new Date(currentTime.getTime() + interval * 60000);
  }

  return slots;
};
