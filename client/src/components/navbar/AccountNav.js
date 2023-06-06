import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function AccountNav() {
  const { pathname } = useLocation();
  let subpage = pathname.split("/")?.[2];

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

  return (
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
    </div>
  );
}
