import Button from "react-bootstrap/Button";
import { Link, useParams } from "react-router-dom";

const Place = () => {
  const { action } = useParams();

  return (
    <div className="mt-5">
      {action !== "new" && (
        <Link to={`/account/places/new`}>
          <Button variant="primary">+ Add New Place</Button>
        </Link>
      )}

      {action === "new" && (
        <div className="py-5">
          <form>
            <h2>Title</h2>
            <p>
              Title for your place, should be short and catchy as in
              advertisement
            </p>
            <input
              className="form-control"
              type="text"
              placeholder="title, for example: My lovely apartment"
            />

            <h2>Address</h2>
            <p>Address to this place</p>
            <input className="form-control" type="text" placeholder="address" />

            <h2>Photos</h2>
            <p>more = better</p>
            <input
              className="form-control"
              type="text"
              placeholder=" Add using a link ...jpg"
            />

            <button className="btn btn-secondary">Add photo</button>

            <br />
            <button>Upload Photo</button>

            <h2>Description</h2>
            <p>description of this place</p>
            <textarea
              className="form-control"
              type="text"
              placeholder="description"
            />

            <h2>Perks</h2>
            <p>select all the perks of your place</p>
            <input type="checkbox" />
            <span>Wifi</span>
            <input type="checkbox" />
            <span>Free parking spot</span>
            <input type="checkbox" />
            <span>TV</span>
            <input type="checkbox" />
            <span>Radio</span>
            <input type="checkbox" />
            <span>Pets</span>
            <input type="checkbox" />
            <span>Private entrance</span>

            <h2>Extra Info</h2>
            <p>house rules, etc</p>
            <textarea className="form-control" type="text" />

            <h2>CheckIn & Out times</h2>
            <p>add check in and out times</p>

            <h2>Check in time</h2>
            <input className="form-control" type="number" placeholder="14:00" />

            <h2>Check out time</h2>
            <input className="form-control" type="number" placeholder="16:00" />

            <h2>Max guest</h2>
            <input className="form-control" type="number" placeholder="1" />

            <button className="btn btn-info btn">Save</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Place;
