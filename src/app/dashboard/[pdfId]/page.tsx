import React from "react";

import { getPdf } from "@/server/pdf";
import PdfRender from "@/components/PdfRender";
import ChatWrapper from "@/components/ChatWrapper";

import styles from "./page.module.css";
const PdfPage = async ({ params }: { params: { pdfId: string } }) => {
  const { pdfId } = params;
  const pdfFile = await getPdf(pdfId);

  return (
    <div className={styles.wrapper}>
      <PdfRender url={pdfFile.url} />
      <ChatWrapper />
    </div>
  );
};

export default PdfPage;
