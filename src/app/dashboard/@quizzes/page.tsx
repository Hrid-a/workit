import React from "react";

import styles from "./Quizzes.module.css";
const Quizzes = () => {
  return (
    <section className={styles.wrapper}>
      <h2>my quizzes</h2>

      <article className={styles.content}>
        You don&apso; have any quizzes till now
      </article>
    </section>
  );
};

export default Quizzes;
