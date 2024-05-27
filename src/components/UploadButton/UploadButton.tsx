"use client";
import React from "react";

import styles from "./UploadButton.module.css";
import Modal from "../Modal";
import DropeZoneFile from "../DropeZoneFile";

function UploadButton() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <div>
      <button className={`btn ${styles.btn}`} onClick={() => setIsOpen(true)}>
        upload file
      </button>
      {isOpen ? (
        <Modal isOpen={isOpen} title="upload your pdf" onDismiss={setIsOpen}>
          <DropeZoneFile />
        </Modal>
      ) : null}
    </div>
  );
}

export default UploadButton;
