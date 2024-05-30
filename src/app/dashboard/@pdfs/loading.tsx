import React from "react";
import styles from "./Pdfs.module.css";
import PdfComponent from "@/components/PdfComponent";
import { allPdfs } from "@/helpers/constant";

const loading = () => {
  return (
    <section className={styles.wrapper}>
      <article className={styles.header}>
        <h2>my files</h2>
      </article>
      <article>
        <div className={styles.pdfWrapper}>
          {allPdfs.map((pdf) => (
            <PdfComponent
              key={pdf.key}
              createdAt={pdf.createdAt}
              name={pdf.name}
              id={pdf.id}
              isPlaceholder={true}
            />
          ))}
        </div>
      </article>
    </section>
  );
};

export default loading;
