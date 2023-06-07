import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import AccountNav from "../../components/navbar/AccountNav";
import { Button } from "react-bootstrap";

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

  console.log(places);
  return (
    <>
      <AccountNav />
      <div className="text-center mt-4">
        <Link to={`/account/places/new`}>
          <Button variant="secondary" className="btn-sm btn">
            + Add New Place
          </Button>
        </Link>
      </div>
      {/* content her  */}
      <div>
        {places.length > 0 &&
          places.map((place) => {
            return (
              <div key={place._id}>
                <div className="bg-light">
                  <img src={place.photos[0]} alt="img" />
                </div>
                <h4>{place.title}</h4>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default PlacesPage;
