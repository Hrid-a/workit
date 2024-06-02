"use client";
import React from "react";
import { EmbedPDF } from "@simplepdf/react-embed-pdf";

import styles from "./PdfRender.module.css";

const PdfRenderer = ({ url }: { url: string }) => {
  return (
    <div className={styles.wrapper}>
      <EmbedPDF
        mode="inline"
        style={{ width: "100%", height: 665 }}
        documentURL={url}
      />
    </div>
  );
};

export default PdfRenderer;
