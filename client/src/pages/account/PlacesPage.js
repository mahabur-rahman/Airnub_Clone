import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import Place from "../../components/places/Place";

const PlacesPage = () => {
  const [redirect, setRedirect] = useState(null);
  const { user, ready, setUser } = useContext(UserContext);

  let { subpage } = useParams();

  if (!ready) {
    return <h1>Loading...</h1>;
  }

  if (ready && !user && !redirect) {
    return <Navigate to={`/login`} />;
  }

  if (subpage === undefined) {
    subpage = "profile";
  }

  function linkClasses(type = null) {
    let classes = `px-3`;
    if (type === subpage) {
      classes += " p-2 bg-primary text-light";
    } else {
      classes += " p-2 bg-light text-black";
    }

    return classes;
  }

  //   logout user
  const logoutUser = async () => {
    try {
      await axios.post(`/logout`);
      alert(`User logout`);
      setRedirect("/");
      setUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <>
      <div className="mx-auto w-75 text-center mt-4">
        <Link to={`/account`} className={linkClasses("profile")}>
          My Profile
        </Link>
        <Link to={`/account/bookings`} className={linkClasses("bookings")}>
          My Bookings
        </Link>
        <Link to={`/account/places`} className={linkClasses(`places`)}>
          My Accommodation
        </Link>

        {subpage === "profile" && (
          <div>
            <p className="py-3">
              Logged in as Name: {user.name} Email: ({user.email})
            </p>
            <button className="btn btn-danger" onClick={logoutUser}>
              Logout
            </button>
          </div>
        )}
      </div>
      {subpage === "places" && <Place />}
    </>
  );
};

export default PlacesPage;
