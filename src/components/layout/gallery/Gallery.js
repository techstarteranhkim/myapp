import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Gallery.module.css";
import Profile from "../profile";

function UserPost({ person, imageUrl, altText }) {
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
        <Profile person={person}></Profile>
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

function Gallery({ posts }) {
  return (
    <div className={styles["gallery"]}>
      <h2 className={styles["centered-text"]}>Catmazing Guestboard</h2>
      <div className={styles["grid-container"]}>
        {posts.map((post, index) => (
          <UserPost
            person={{ name: `Cat${index + 1}`, image: post.image }} // Änderung
            imageUrl={post.image}
            altText={`Bild von Cat${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
