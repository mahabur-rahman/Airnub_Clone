import { differenceInCalendarDays, format } from "date-fns";

export default function BookingDates({ booking, className }) {
  return (
    <div className={"my-2 " + className}>
      {differenceInCalendarDays(
        new Date(booking.checkOut),
        new Date(booking.checkIn)
      )}{" "}
      nights
      <br />
      <span>{format(new Date(booking.checkIn), "yyyy-MM-dd")}</span> &rarr;
      <span>{format(new Date(booking.checkOut), "yyyy-MM-dd")}</span>
    </div>
  );
}
