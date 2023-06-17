import React from "react";
import { Col } from "react-bootstrap";

export default function PlaceImg({ place, index = 0, className = null }) {
  if (!place.photos?.length) {
    return "";
  }
  if (!className) {
    className = "w-25 my-3 h-25";
  }
  return (
    <Col xl={6} className="mx-auto text-center">
      <img
        className={className}
        src={"http://localhost:5000/" + place.photos[index]}
        alt={"photos"}
      />
    </Col>
  );
}
