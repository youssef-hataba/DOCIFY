/* eslint-disable react/prop-types */

import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function DoctorSlots({docInfo}) {
  const [docSlots, setDocSlots] = useState([]); // Store available slots
  const [selectedDay, setSelectedDay] = useState(null); // Track which day is selected
  const [selectedSlot, setSelectedSlot] = useState(null); // Track which slot is selected

  useEffect(() => {
    if (!docInfo || !docInfo.time) return;

    function getAvailableSlots() {
      const workingDays = docInfo.time.workingDays; // Sunday (0), Monday (1), Tuesday (2), Wednesday (3), Thursday (4)
      const startTimeString = docInfo.time.startTimeString; // Example start time for all days
      const endTimeString = docInfo.time.endTimeString; // Example end time for all days

      const [startHour, startMinute] = startTimeString.split(":").map(Number);
      const [endHour, endMinute] = endTimeString.split(":").map(Number);

      let today = new Date();
      let currentHour = today.getHours();
      let currentMinutes = today.getMinutes();
      let currentDayOfWeek = today.getDay();

      setDocSlots([]); // Clear previous slots

      for (let i = 0; i < 14; i++) {
        let currentDate = new Date(today);
        currentDate.setDate(today.getDate() + i);
        let dayOfWeek = currentDate.getDay();

        if (!workingDays.includes(dayOfWeek)) continue;

        if (dayOfWeek === currentDayOfWeek && i === 0 && currentHour >= endHour) {
          continue;
        }

        let daySlots = [];
        let currentStartTime = new Date(currentDate);
        let currentEndTime = new Date(currentDate);

        currentStartTime.setHours(startHour, startMinute, 0, 0);
        currentEndTime.setHours(endHour, endMinute, 0, 0);

        if (
          dayOfWeek === currentDayOfWeek &&
          i === 0 &&
          currentHour >= startHour &&
          currentHour < endHour
        ) {
          let newStartMinutes = currentMinutes >= 30 ? 30 : 0;
          currentStartTime.setHours(currentHour, newStartMinutes, 0, 0);

          if (currentMinutes > 0 && currentMinutes < 30) {
            currentStartTime.setMinutes(30);
          } else if (currentMinutes > 30) {
            currentStartTime.setHours(currentHour + 1, 0, 0, 0);
          }
        }

        while (currentStartTime < currentEndTime) {
          let formattedTime = currentStartTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });

          daySlots.push({
            datetime: new Date(currentStartTime),
            time: formattedTime,
            available: true, // Assuming all slots are available
          });

          currentStartTime.setMinutes(currentStartTime.getMinutes() + 30);
        }

        setDocSlots((prev) => [
          ...prev,
          {
            day: currentDate.toLocaleDateString([], {
              weekday: "short",
              month: "short",
              day: "numeric",
            }),
            weekday: currentDate.toLocaleDateString([], {weekday: "short"}).toUpperCase(),
            date: currentDate.toLocaleDateString([], {
              day: "numeric",
              month: "short",
            }),
            slots: daySlots,
          },
        ]);
      }
    }

    getAvailableSlots();
  }, [docInfo]);

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setSelectedSlot(null);
  };

  return (
    <div className="flex flex-col my-12 gap-5 lg:ml-[19rem]">
      <p className="flex items-start text-gray-700 font-medium">Booking Slots</p>
      {/* Display available days */}
      <div className="flex gap-3 flex-wrap">
        {docSlots.map((daySlot, index) => (
          <button
            key={index}
            onClick={() => handleDayClick(daySlot.day)}
            className={`${
              selectedDay === daySlot.day ? "bg-primary text-white border-none" : "bg-white"
            }
            flex flex-col bg-primary rounded-full p-1.5 py-6 items-center text-gray-600 border border-gray-300`}>
            <div>{daySlot.weekday}</div>
            <div>{daySlot.date}</div>
          </button>
        ))}
      </div>

      {/* Display available slots for the selected day */}
      {selectedDay && (
        <div>
          <ul className="flex gap-3 flex-wrap max-w-[80%]">
            {docSlots
              .find((daySlot) => daySlot.day === selectedDay)
              ?.slots.map((slot, i) => (
                <li
                  onClick={() => handleSlotClick(slot)}
                  key={i}
                  className={`text-gray-500 text-sm border border-gray-200 
                rounded-full p-1.5 px-3 cursor-pointer ${
                  selectedSlot === slot ? "bg-primary text-white" : ""
                }`}>
                  {slot.available ? slot.time : "(Unavailable)"}
                </li>
              ))}
          </ul>
        </div>
      )}
      {selectedSlot && (
        <Link to="/my-appointments">
          <button
            className="bg-primary rounded-full p-2 px-8 text-white text-sm font-light 
        hover:scale-105 transition-all duration-500 mt-2">
            Book an apointment
          </button>
        </Link>
      )}
    </div>
  );
}

export default DoctorSlots;
