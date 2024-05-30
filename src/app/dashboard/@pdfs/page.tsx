import React from "react";

import styles from "./Pdfs.module.css";
import UploadButton from "@/components/UploadButton";
import PdfComponent from "@/components/PdfComponent";
import { getAllPdfs } from "@/server/pdf";

const PdfsEntity = async () => {
  const allPdfs = await getAllPdfs();
  return (
    <section className={styles.wrapper}>
      <article className={styles.header}>
        <h2>my files</h2>
        <UploadButton />
      </article>
      <article className={styles.content}>
        {allPdfs.length ? (
          <div className={styles.pdfWrapper}>
            {allPdfs.map((pdf) => (
              <PdfComponent
                key={pdf.key}
                createdAt={pdf.createdAt}
                name={pdf.name}
                id={pdf.id}
              />
            ))}
          </div>
        ) : (
          <p className={styles.paragraph}>
            You don&apos; have any files uploaded
          </p>
        )}
      </article>
    </section>
  );
};

export default PdfsEntity;
