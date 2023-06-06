import { useContext, useState } from "react";
import AccountNav from "../../components/navbar/AccountNav";
import { UserContext } from "../../context/UserContext";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";

export default function ProfilePage() {
  const [redirect, setRedirect] = useState(null);
  const { user, setUser, ready } = useContext(UserContext);

  let { subpage } = useParams();

  if (subpage === undefined) {
    subpage = `profile`;
  }

  //   logout user
  const logoutUser = async () => {
    try {
      await axios.post(`/logout`);
      setRedirect("/");
      setUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  if (!ready) {
    return "Loading...";
  }

  if (ready && !user && !redirect) {
    return <Navigate to={`/login`} />;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="mx-auto w-75 text-center mt-4">
      <AccountNav />

      {subpage === "profile" && (
        <div>
          <p className="py-3">
            Logged in as <span className="fw-bold">Name:</span> {user.name}{" "}
            <span className="fw-bold">Email:</span> ({user.email})
          </p>
          <button className="btn btn-danger" onClick={logoutUser}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
