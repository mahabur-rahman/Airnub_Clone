import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link, useParams } from "react-router-dom";
import { FaCloudUploadAlt } from "react-icons/fa";
import axios from "axios";
import UploadPhotos from "../../components/uploadPhotos/UploadPhotos";
import Perks from "../../components/perks/Perks";
import AccountNav from "../../components/navbar/AccountNav";

const Place = () => {
  const { action } = useParams();

  // state for inputs
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);

  function inputHeader(text) {
    return <h4 className="mt-4">{text}</h4>;
  }

  function inputDescription(text) {
    return <p className="text-secondary">{text}</p>;
  }

  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="mt-5">
        <AccountNav />

        <div className="container">
          <div className="col-6 mx-auto">
            <div className="py-5">
              <form onSubmit={handleSubmit}>
                <div>
                  {preInput(
                    `Title`,
                    ` Title for your place, should be short and catchy as in
              advertisement`
                  )}
                  <input
                    className="form-control"
                    type="text"
                    placeholder="title, for example: My lovely apartment"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                {preInput(`Address`, ` Address to this place`)}
                <input
                  className="form-control"
                  type="text"
                  placeholder="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />

                {preInput(`Photos`, ` more = better`)}

                {/* UPLOAD PHOTOS */}
                <UploadPhotos
                  addedPhotos={addedPhotos}
                  setAddedPhotos={setAddedPhotos}
                />

                {preInput(`Description`, ` description of this place`)}

                <textarea
                  className="form-control"
                  type="text"
                  placeholder="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />

                {preInput(`Perks`, `select all the perks of your place`)}

                {/* perks component */}
                <Perks value={perks} setPerks={setPerks} />

                {preInput(`Extra Info`, `house rules, etc`)}
                <textarea
                  className="form-control"
                  type="text"
                  value={extraInfo}
                  onChange={(e) => setExtraInfo(e.target.value)}
                />

                {preInput(`Checkin & Out times`, `add check in and out times`)}
                <h4>Check in time</h4>
                <input
                  className="form-control"
                  type="number"
                  placeholder="14:00"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                />

                <h4 className="my-3">Check out time</h4>
                <input
                  className="form-control"
                  type="number"
                  placeholder="16:00"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                />

                <h4>Max guest</h4>
                <input
                  className="form-control"
                  type="number"
                  value={maxGuests}
                  onChange={(e) => setMaxGuests(e.target.value)}
                />

                <div className="d-grid gap-2 mt-3">
                  <Button variant="primary" size="lg">
                    Save
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Place;
