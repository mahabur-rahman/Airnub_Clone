import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FaBarcode, FaWindowClose } from "react-icons/fa";
import BookingPlace from "../../components/bookingPlace/BookingPlace";

export default function SinglePlacePage() {
  const [place, setPlace] = useState({});
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    getSinglePlace();
  }, [id]);

  const getSinglePlace = async () => {
    if (!id) return;
    try {
      const res = await axios.get(`/places/${id}`);
      setPlace(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  if (!place) return;

  if (showAllPhotos) {
    return (
      <div className="modal_tab">
        <Container className="text-center">
          <h2>Photos of {place.title}</h2>
          {place?.photos?.length > 0 &&
            place.photos.map((photo) => (
              <img
                src={`http://localhost:5000/` + photo}
                className="img-fluid"
              />
            ))}
          <button
            className="close_btn rounded-4"
            onClick={() => setShowAllPhotos(false)}
          >
            <FaWindowClose />
            <span className="mx-1">Close</span>
          </button>
        </Container>
      </div>
    );
  }

  return (
    <>
      <Container className="text-center pb-4">
        <h2 className="text-center my-2">{place.title}</h2>
        {/* google map link */}
        <a
          target="_blank"
          href={`https://maps.google.com/?q=` + place?.address}
          rel="noreferrer"
        >
          {place.address}
        </a>

        <Row>
          <Col xl={7}>
            <div className="py-4">
              <img
                src={`http://localhost:5000/` + place?.photos?.[0]}
                alt="photo"
                className="img-fluid"
              />
            </div>
          </Col>
          <Col xl={5}>
            <div className="py-4">
              <img
                src={`http://localhost:5000/` + place?.photos?.[1]}
                alt="photo"
                width="75%"
                height="490px"
              />
              <img
                src={`http://localhost:5000/` + place?.photos?.[2]}
                alt="photo"
                width="75%"
                height="490px"
                className="mt-2"
              />
            </div>
          </Col>

          <div>
            <h4>Description</h4>
            <p>{place.description}</p>
            <p>Check In: {place.checkIn}</p>
            <p>Check Out: {place.checkOut}</p>
            <p>Max Number of Guests: {place.maxGuests}</p>
          </div>

          <BookingPlace place={place} />

          {/* show all photos */}
          <button className="btn btn-secondary">
            <FaBarcode />{" "}
            <span className="mx-1" onClick={() => setShowAllPhotos(true)}>
              Show All Photos
            </span>
          </button>
        </Row>
      </Container>
    </>
  );
}
