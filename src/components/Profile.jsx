import styles from "./Profile.module.css";
import VisuallyHidden from "../components/VisuallyHidden";
import profileImg from "/images/avatar-michelle.jpg";

function Profile({ toggleShare, value }) {
  console.log(value);
  return (
    <>
      <div
        className={
          !value ? styles.wrapper : `${styles.wrapper} ${styles.display}`
        }
      >
        <div className={styles.porfileContainer}>
          <img
            className={styles.profileImg}
            src={profileImg}
            alt="Profile image"
          />
          <div>
            <h2 className={styles.name}>Michelle Appleton</h2>
            <span className={styles.date}>28 Jun 2020</span>
          </div>
        </div>
        <button className={styles.shareButton} onClick={toggleShare}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="13"
            role="img"
            aria-describedby="icon-share"
          >
            <title id="icon-share">Icon Share</title>
            <path
              fill="#6E8098"
              d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
            />
          </svg>
          <VisuallyHidden>Icon Share</VisuallyHidden>
        </button>
      </div>
    </>
  );
}

export default Profile;
