import { useState, useEffect } from "react";
import axios from "axios";
import AccountNav from "../../components/navbar/AccountNav";
import PlaceImg from "../../components/placeImg/PlaceImg";
import BookingDates from "../../components/bookingDates/BookingDates";
import { Link } from "react-router-dom";

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get(`/booking`)
      .then((response) => {
        setBookings(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(bookings);

  return (
    <>
      <AccountNav />
      {bookings?.length > 0 &&
        bookings.map((booking) => {
          return (
            <Link to={`/account/bookings/${booking._id}`}>
              <div key={booking._id} className="text-center">
                <PlaceImg place={booking.place} />

                <h3>{booking.place.title}</h3>

                <BookingDates
                  booking={booking}
                  className="text-primary fw-bold"
                />

                <div>
                  <span>Total Price: ${booking.price}</span>
                </div>
              </div>
            </Link>
          );
        })}
    </>
  );
};

export default BookingsPage;
