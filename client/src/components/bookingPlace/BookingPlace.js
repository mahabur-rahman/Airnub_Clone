import React from "react";

const BookingPlace = ({ place }) => {
  return (
    <>
      <p>Price: ${place.price}/ per night</p>
      <div>
        <label>CheckIn </label>
        <input type="date" className="form-control" />
        <br />
        <br />
        <label>CheckOut </label>
        <input type="date" className="form-control" />
        <br />
        <br />

        <label>Number of guests </label>
        <input type="number" className="form-control" value={1} />
        <br />
        <br />

        <h4>Extra Info: </h4>
        <p>{place.extraInfo}</p>

        <br />
        <br />

        <button className="btn btn-primary">Book this place</button>

        <br />
        <br />
      </div>
    </>
  );
};

export default BookingPlace;
