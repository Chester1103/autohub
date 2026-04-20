const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

export const TimeSlotGrid = ({ selected, onSelect, bookings }) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {timeSlots.map((slot) => {
        const isBooked = bookings.some((b) => b.time === slot);

        return (
          <button
            key={slot}
            disabled={isBooked}
            onClick={() => onSelect(slot)}
            className={`p-2 rounded border text-sm transition ${
              isBooked
                ? "bg-red-500 text-white cursor-not-allowed"
                : selected === slot
                  ? "bg-white text-black"
                  : "bg-neutral-800 hover:bg-neutral-700"
            }`}
          >
            {slot}
          </button>
        );
      })}
    </div>
  );
};
