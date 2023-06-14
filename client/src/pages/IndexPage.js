import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const IndexPage = () => {
  const [places, setPlaces] = useState([]);

  // get all places
  const getAllPlaces = async () => {
    try {
      const res = await axios.get(`/all-places`);
      setPlaces(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllPlaces();
  }, []);

  return (
    <>
      <Container>
        <Row>
          {places.length > 0 &&
            places.map((place) => (
              <Col key={place._id} xl={4} lg={6} className="mt-4">
                <Link to={`/place/${place._id}`}>
                  <Card style={{ height: "580px" }}>
                    {place.photos?.[0] && (
                      <Card.Img
                        height="300px"
                        variant="top"
                        src={"http://localhost:5000/" + place.photos[0]}
                      />
                    )}
                    <Card.Body>
                      <Card.Title className="text-truncate fw-bold text-black">
                        {place.title}
                      </Card.Title>
                      <Card.Text className="text-black">
                        {place.description}
                      </Card.Text>
                      {place?.price && (
                        <Card.Text className="fw-bold">
                          Price: ${place.price} per night
                        </Card.Text>
                      )}
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default IndexPage;
