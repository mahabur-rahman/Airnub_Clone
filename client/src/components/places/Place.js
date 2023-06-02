import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link, useParams } from "react-router-dom";
import { FaCloudUploadAlt } from "react-icons/fa";
import Perks from "../perks/Perks";
import axios from "axios";

const Place = () => {
  const { action } = useParams();

  // state for inputs
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photoByLink, setPhotoByLink] = useState("");
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

  // add photo by link
  const addPhotoWithLink = async (e) => {
    e.preventDefault();

    try {
      const { data: filename } = await axios.post(`/upload-by-link`, {
        link: photoByLink,
      });
      setAddedPhotos((prev) => {
        return [...prev, filename];
      });

      setPhotoByLink("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="mt-5">
        <div className="text-center">
          {action !== "new" && (
            <Link to={`/account/places/new`}>
              <Button variant="secondary">+ Add New Place</Button>
            </Link>
          )}
        </div>

        <div className="container">
          <div className="col-6 mx-auto">
            {action === "new" && (
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
                  <div className="d-flex justify-content-between">
                    <input
                      className="form-control"
                      type="text"
                      placeholder=" Add using a link ...jpg"
                      value={photoByLink}
                      onChange={(e) => setPhotoByLink(e.target.value)}
                    />

                    <button
                      className="btn btn-secondary btn-sm w-25"
                      onClick={addPhotoWithLink}
                    >
                      Add photo
                    </button>
                  </div>

                  {/* insert photo by link */}
                  {addedPhotos.length > 0 &&
                    addedPhotos.map((link) => (
                      <div key={link} className="mt-3">
                        <img
                          className="img-fluid w-25  mx-1"
                          src={`http://localhost:5000/uploads/` + link}
                          alt=""
                        />
                      </div>
                    ))}
                  <br />

                  <button
                    className="btn"
                    style={{ border: "1px solid #ddd", padding: ".8rem" }}
                  >
                    <FaCloudUploadAlt /> Upload Photo
                  </button>

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

                  {preInput(
                    `Checkin & Out times`,
                    `add check in and out times`
                  )}
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
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Place;
