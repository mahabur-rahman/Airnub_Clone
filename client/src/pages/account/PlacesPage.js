import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import AccountNav from "../../components/navbar/AccountNav";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

const PlacesPage = () => {
  const [places, setPlaces] = useState([]);

  const getPlacesData = async () => {
    const res = await axios.get(`/user-places`);
    setPlaces(res.data);
  };

  // get places api call
  useEffect(() => {
    getPlacesData();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <AccountNav />
          <div className="text-center mt-4">
            <Link to={`/account/places/new`}>
              <Button variant="secondary" className="btn-sm btn">
                + Add New Place
              </Button>
            </Link>
          </div>
          {/* content her  */}
          {places.length > 0 &&
            places.map((place) => {
              return (
                <Col xl={4} lg={6}>
                  <Card className="my-3" style={{ height: "600px" }}>
                    {place.photos.length > 0 && (
                      <Card.Img
                        style={{
                          height: "300px",
                        }}
                        className="img-fluid"
                        variant="top"
                        src={`http://localhost:5000/` + place.photos[0]}
                      />
                    )}
                    <Card.Body>
                      <Card.Title>{place.title}</Card.Title>
                      <Card.Text>{place.description}</Card.Text>
                      {place?.price && (
                        <Card.Text className="fw-bold">
                          Price: {place.price} per night
                        </Card.Text>
                      )}
                      <Link
                        variant="warning"
                        to={`/account/places/${place._id}`}
                      >
                        Details
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
};

export default PlacesPage;
