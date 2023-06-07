import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import AccountNav from "../../components/navbar/AccountNav";
import { Button } from "react-bootstrap";

const PlacesPage = () => {
  const getPlacesData = async () => {
    const res = await axios.get(`/user-places`);
    console.log(res);
  };
  // get places api call
  useEffect(() => {
    getPlacesData();
  }, []);

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
    </>
  );
};

export default PlacesPage;
