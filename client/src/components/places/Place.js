import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Place = () => {
  return (
    <div className="mt-5">
      <Link to={`/account/places/new`}>
        <Button variant="primary">+ Add New Place</Button>
      </Link>
    </div>
  );
};

export default Place;
