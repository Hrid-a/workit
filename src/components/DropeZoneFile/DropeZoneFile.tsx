import * as React from "react";
import Dropzone from "react-dropzone";

import styles from "./DropZoneFile.module.css";

function DropeZoneFile() {
 

  return (
    <Dropzone onDrop={(acceptedFiles)=>console.log(acceptedFiles)}
    accept={{'application/pdf': [] }}
    >
      {({ getRootProps, getInputProps }) => (
        <section className={styles.wrapper}>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag and drop some files here, or click to select files</p>
          </div>
        </section>
      )}
    </Dropzone>
  );
}

export default DropeZoneFile;
