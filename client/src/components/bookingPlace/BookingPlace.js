import { useContext, useState, useEffect } from "react";
import { differenceInCalendarDays } from "date-fns";
import axios from "axios";
import { UserContext } from "../../context/UserContext";

const BookingPlace = ({ place }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState();
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);

  let numberOfNights = 0;

  if (checkIn && checkOut) {
    numberOfNights = differenceInCalendarDays(
      new Date(checkOut),
      new Date(checkIn)
    );
  }

  // bookThisPlace
  const bookThisPlace = async () => {
    try {
      const res = await axios.post(`/booking`, {
        checkIn,
        checkOut,
        numberOfGuests,
        name,
        phone,
        place: place._id,
        price: numberOfNights * place.price,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <p>Price: ${place.price}/ per night</p>
      <div>
        <label>CheckIn </label>
        <input
          type="date"
          className="form-control"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
        <br />
        <br />
        <label>CheckOut </label>
        <input
          type="date"
          className="form-control"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
        <br />
        <br />

        <label>Number of guests </label>
        <input
          type="number"
          className="form-control"
          value={numberOfGuests}
          onChange={(e) => setNumberOfGuests(e.target.value)}
        />
        <br />
        <br />

        {numberOfNights > 0 && (
          <>
            <label>Your full name </label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <br />

            <label>Phone Number </label>
            <input
              type="tel"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </>
        )}

        <h4>Extra Info: </h4>
        <p>{place.extraInfo}</p>

        <br />
        <br />

        <button className="btn btn-primary" onClick={bookThisPlace}>
          Book this place
          {numberOfNights > 0 && <span> $ {numberOfNights * place.price}</span>}
        </button>

        <br />
        <br />
      </div>
    </>
  );
};

export default BookingPlace;
