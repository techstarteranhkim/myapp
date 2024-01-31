import styles from "./Profile.module.css";

function Avatar({ person, size }) {
  return (
    <div className={styles["gallerypost"]}>
      <div className={styles["image-container"]}>
        <p>{person.name} </p>
        <img
          className="avatar"
          src="https://cdn-icons-png.flaticon.com/512/4322/4322991.png"
          alt={person.name}
          width={size}
          height={size}
        />
      </div>
      <div className={styles["text-container"]}>{"left an image"}</div>
    </div>
  );
}

function Profile({ person, avatarsize }) {
  return (
    <div>
      <Avatar
        size={avatarsize}
        person={{
          name: person,
          imageId: "uno",
        }}
      />
    </div>
  );
}
export default Profile;
