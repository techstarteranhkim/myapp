import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Gallery.module.css";
import Profile from "../profile";

function UserPost({ avatarSize, person, imageUrl, altText }) {
  const [isImageOpen, setImageOpen] = useState(false);

  const handleImageClick = () => {
    setImageOpen(true);
  };

  const handleClose = () => {
    setImageOpen(false);
  };

  return (
    <div className={styles["image-container"]}>
      <div className="gallery-post">
        <Profile avatarsize={avatarSize} person={person}>
          User posts
        </Profile>
        <div className={styles["image-border"]}>
          <img
            src={imageUrl}
            alt={altText}
            className={styles["gallery-image"]}
            onClick={handleImageClick}
          />
        </div>
      </div>
      {isImageOpen && (
        <div className={styles["modal"]} onClick={handleClose}>
          <img
            src={imageUrl}
            alt={altText}
            className={styles["modal-content"]}
          />
        </div>
      )}
    </div>
  );
}

UserPost.propTypes = {
  avatarSize: PropTypes.number.isRequired,
  person: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

function Gallery() {
  const imageUrls = [
    "https://t4.ftcdn.net/jpg/00/97/58/97/240_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg",
    "https://t3.ftcdn.net/jpg/03/31/21/08/240_F_331210846_9yjYz8hRqqvezWIIIcr1sL8UB4zyhyQg.jpg",
    "https://t4.ftcdn.net/jpg/01/02/62/81/240_F_102628155_ZPiAaNEDRSZU2S0LAkbcgvwLyMmr9c2Y.jpg",
    "https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?cs=srgb&dl=pexels-wojciech-kumpicki-2071882.jpg",
    // ...
  ];

  return (
    <div className={styles["gallery"]}>
      <h2 className={styles["centered-text"]}>Catmazing Guestboard</h2>
      <div className={styles["grid-container"]}>
        {imageUrls.map((url, index) => (
          <UserPost
            key={index}
            avatarSize={50}
            person={`Cat${index + 1}`}
            imageUrl={url}
            altText={`Bild von Cat${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
