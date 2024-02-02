import styles from "./Profile.module.css";

function Profile({ person }) {
  return (
    <div className={styles["gallerypost"]}>
      <div className={styles["image-container"]}>
        <p>{person.name} </p>
        <img
          className="avatar"
          src="https://cdn-icons-png.flaticon.com/512/4322/4322991.png"
          alt={person.name}
        />
      </div>
      <div className={styles["text-container"]}>{"left an image"}</div>
    </div>
  );
}
export default Profile;
