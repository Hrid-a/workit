import React from "react";

import styles from "./Pdfs.module.css";
import UploadButton from "@/components/UploadButton";

const PdfsEntity = async () => {
  return (
    <section className={styles.wrapper}>
      <article className={styles.header}>
        <h2>my files</h2>
        <UploadButton />
      </article>
      <article className={styles.content}>
        You don&apos; have any files uploaded
      </article>
    </section>
  );
};

export default PdfsEntity;
