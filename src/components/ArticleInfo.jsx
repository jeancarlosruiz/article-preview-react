import React from "react";
import styles from "./ArticleInfo.module.css";
import Profile from "./Profile";
import Share from "./Share";

function ArticleInfo() {
  const [value, setValue] = React.useState(false);

  const toggleShare = function () {
    return value === false ? setValue(true) : setValue(false);
  };

  return (
    <>
      <div className={styles.relative}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p className={styles.paragraph}>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
          <Profile value={value} toggleShare={toggleShare} />
        </div>
        {value && <Share toggleShare={toggleShare} />}
      </div>
    </>
  );
}

export default ArticleInfo;
