import Button from "../ui/Button";

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
        let variant = "slot";
        if (isBooked) variant = "disabled";
        else if (selected === slot) variant = "selected";

        return (
          <Button
            key={slot}
            variant={variant}
            disabled={isBooked}
            onClick={() => onSelect(slot)}
            className="w-full"
          >
            {slot}
          </Button>
        );
      })}
    </div>
  );
};
