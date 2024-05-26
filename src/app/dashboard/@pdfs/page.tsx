import React from "react";

import styles from "./Pdfs.module.css";

const PdfsEntity = async () => {
  return (
    <section className={styles.wrapper}>
      <article className={styles.header}>
        <h2>my files</h2>
        <button className={`btn ${styles.btn}`}>upload file</button>
      </article>
      <article className={styles.content}>
        You don&apos; have any files uploaded
      </article>
    </section>
  );
};

export default PdfsEntity;
