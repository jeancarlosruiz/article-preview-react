import React from "react";
import styles from "./Profile.module.css";
import VisuallyHidden from "../components/VisuallyHidden";
import profileImg from "../../public/images/avatar-michelle.jpg";
import iconShare from "../../public/images/icon-share.svg";

function Profile() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.porfileContainer}>
        <img className={styles.profileImg} src={profileImg} alt="Profile img" />
        <div>
          <h2 className={styles.name}>Michelle Appleton</h2>
          <span className={styles.date}>28 Jun 2020</span>
        </div>
      </div>
      <button className={styles.shareButton}>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
          <path
            fill="#6E8098"
            d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
          />
        </svg>
        <VisuallyHidden>Icon Share</VisuallyHidden>
      </button>
    </div>
  );
}

export default Profile;
