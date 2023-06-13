import axios from "axios";
import React, { useState } from "react";
import {
  FaCloudUploadAlt,
  FaTrash,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";

const UploadPhotos = ({ addedPhotos, setAddedPhotos }) => {
  const [photoByLink, setPhotoByLink] = useState("");

  // add photo by link
  const addPhotoWithLink = async (e) => {
    e.preventDefault();

    try {
      const { data: filename } = await axios.post(`/upload-by-link`, {
        link: photoByLink,
      });
      setAddedPhotos((prev) => {
        return [...prev, filename];
      });

      setPhotoByLink("");
    } catch (err) {
      console.log(err);
    }
  };

  // upload photo from computer
  const uploadPhoto = (e) => {
    const files = e.target.files;
    const data = new FormData();

    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }

    axios
      .post("/upload", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        const { data: filenames } = response;
        setAddedPhotos((prev) => {
          return [...prev, ...filenames];
        });
      });
  };

  // remove photo
  const removePhoto = (e, filename) => {
    e.preventDefault();
    setAddedPhotos([...addedPhotos.filter((photo) => photo !== filename)]);
  };

  // select as main photo
  const selectAsMainPhoto = (e, link) => {
    e.preventDefault();
    setAddedPhotos([link, ...addedPhotos.filter((photo) => photo !== link)]);
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <input
          className="form-control"
          type="text"
          placeholder=" Add using a link ...jpg"
          value={photoByLink}
          onChange={(e) => setPhotoByLink(e.target.value)}
        />

        <button
          className="btn btn-secondary btn-sm w-25"
          onClick={addPhotoWithLink}
        >
          Add photo
        </button>
      </div>

      {/* insert photo by link */}
      {addedPhotos.length > 0 &&
        addedPhotos.map((link) => (
          <div key={link} className="mt-3">
            <img
              style={{ height: "100px" }}
              className="img-fluid w-25 mx-1"
              src={`http://localhost:5000/` + link}
              alt="img"
            />
            <button
              className="text-danger"
              onClick={(e) => removePhoto(e, link)}
            >
              <FaTrash />
            </button>

            {/* selecting star mark */}
            <button
              className="mx-2"
              onClick={(ev) => selectAsMainPhoto(ev, link)}
            >
              {link === addedPhotos[0] && (
                <span>
                  <FaStar />
                </span>
              )}
              {link !== addedPhotos[0] && (
                <span>
                  <FaStarHalfAlt />
                </span>
              )}
            </button>
          </div>
        ))}

      <br />

      <label
        className="btn position-relative"
        style={{ border: "1px solid #ddd", padding: ".8rem" }}
      >
        <input
          type="file"
          style={{
            visibility: `hidden`,
            position: `absolute`,
            width: 0,
            height: 0,
          }}
          onChange={uploadPhoto}
          multiple
        />
        <FaCloudUploadAlt /> Upload Photo
      </label>
    </>
  );
};

export default UploadPhotos;
