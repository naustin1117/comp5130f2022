import React, { useState } from "react";
import NewItemForm from "../components/ui/NewItemForm";
import FileUpload from "../components/FileUpload/FileUpload";

const NewListing = () => {
  const [files, setFiles] = useState([
    {
      name: "myFile.pdf",
    },
  ]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "Right",
        alignItems: "Right",
        height: "100vh",
      }}
    >
      <FileUpload files={files} setFiles={setFiles} />
    </div>
  );
};

export default NewListing;
