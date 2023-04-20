import React from "react";
import img from "../../public/images/drawers.jpg";
import styles from "./Article.module.css";
import ArticleInfo from "./ArticleInfo";

function Article() {
  return (
    <article className={styles.article}>
      <img className={styles.drawers} src={img} alt="imagen" />
      <ArticleInfo />
    </article>
  );
}

export default Article;