import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link, useParams } from "react-router-dom";
import { FaCloudUploadAlt } from "react-icons/fa";

const Place = () => {
  const { action } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addPhoto, setAddPhoto] = useState("");
  const [photoByLink, setPhotoByLink] = useState("");
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuest] = useState("");

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

  return (
    <>
      <div className="mt-5">
        {action !== "new" && (
          <Link to={`/account/places/new`}>
            <Button variant="primary">+ Add New Place</Button>
          </Link>
        )}

        <div className="container">
          <div className="col-6 mx-auto">
            {action === "new" && (
              <div className="py-5">
                <form>
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
                    />
                  </div>

                  {preInput(`Address`, ` Address to this place`)}
                  <input
                    className="form-control"
                    type="text"
                    placeholder="address"
                  />

                  {preInput(`Photos`, ` more = better`)}
                  <div className="d-flex justify-content-between">
                    <input
                      className="form-control"
                      type="text"
                      placeholder=" Add using a link ...jpg"
                    />

                    <button className="btn btn-secondary btn-sm w-25">
                      Add photo
                    </button>
                  </div>

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
                  />

                  {preInput(`Perks`, `select all the perks of your place`)}

                  <input type="checkbox" className="mx-2" />
                  <span>Wifi</span>
                  <input type="checkbox" className="mx-2" />
                  <span>Free parking spot</span>
                  <input type="checkbox" className="mx-2" />
                  <span>TV</span>
                  <input type="checkbox" className="mx-2" />
                  <span>Radio</span>
                  <input type="checkbox" className="mx-2" />
                  <span>Pets</span>
                  <input type="checkbox" className="mx-2" />
                  <span>Private entrance</span>

                  {preInput(`Extra Info`, `house rules, etc`)}
                  <textarea className="form-control" type="text" />

                  {preInput(
                    `Checkin & Out times`,
                    `add check in and out times`
                  )}
                  <h4>Check in time</h4>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="14:00"
                  />

                  <h4 className="my-3">Check out time</h4>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="16:00"
                  />

                  <h4>Max guest</h4>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="number of guests, ex: 1"
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
