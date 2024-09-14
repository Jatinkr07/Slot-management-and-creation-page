import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DatePicker from "../components/DatePicker";
import SlotForm from "../components/SlotForm";
import TimeSlotList from "../components/TimeSlotList";
import ProgressBar from "../components/Progressbar";
import TimeZone from "../components/TimeZone";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <div className="flex flex-col h-screen bg-[#F0F8FF]">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8 overflow-auto">
          <div className="flex justify-center mb-6">
            <ProgressBar />
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Interview 1</h2>
              <button className="bg-[#00A3FF] text-white px-4 py-2 rounded-md text-sm">
                View students
              </button>
            </div>
            <div className="flex flex-wrap gap-6">
              <div className="flex-1 min-w-[300px]">
                <SlotForm />
              </div>
              <div className="flex-1 min-w-[300px]">
                <DatePicker onDateChange={handleDateChange} />
                <TimeZone />
              </div>
              <div className="flex-1 min-w-[300px]">
                <TimeSlotList selectedDate={selectedDate} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
