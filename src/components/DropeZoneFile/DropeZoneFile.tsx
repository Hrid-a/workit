import * as React from "react";
import Dropzone from "react-dropzone";

import styles from "./DropZoneFile.module.css";
import { useUploadThing } from "@/helpers/uploadthing";

function DropeZoneFile() {
  const { startUpload } = useUploadThing("pdfUploader");
  return (
    <Dropzone
      multiple={false}
      onDrop={async (acceptedFile) => {
        const res = await startUpload(acceptedFile);
        console.log(res);
      }}
      accept={{ "application/pdf": [] }}
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
