"use client";
import Link from "next/link";
import * as React from "react";
import { format } from "date-fns";

import styles from "./PdfComponent.module.css";

function PdfComponent({
  id,
  createdAt,
  name,
  isPlaceholder,
}: {
  id: string;
  createdAt: Date;
  name: string | null;
  isPlaceholder?: boolean;
}) {
  const deleteFile = async (id: string) => {
    const res = await fetch(`/api/pdfs/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    console.log(data);
  };
  return (
    <Link
      href={`/dashboard/${id}`}
      style={{
        fontFamily: isPlaceholder ? "var(--font-family-loading)" : undefined,
      }}
      className={styles.wrapper}
    >
      <h3>{name}</h3>
      <div className={styles.content}>
        <p>{format(new Date(createdAt), "MMM - dd - yyyy")}</p>
        <button className={`btn  ${styles.btn}`} onClick={() => deleteFile(id)}>
          delete
        </button>
      </div>
    </Link>
  );
}

export default PdfComponent;
