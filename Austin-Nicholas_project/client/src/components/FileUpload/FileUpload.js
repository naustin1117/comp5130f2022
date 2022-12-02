import React from "react";
import { FaPlus } from "react-icons/fa";
import classes from "./FileUpload.module.css";

const FileUpload = ({ files, setFiles }) => {
  //const uploadHandler = () => {};
  return (
    <>
      <div className={classes.filecard}>
        <div className={classes.fileinput}>
          <input type="file" />
          <button>
            <i>
              <FaPlus />
            </i>
          </button>
        </div>
        <p className="main">Supported Types</p>
        <p className="info">PDF, PNG, JPG</p>
      </div>
    </>
  );
};

export default FileUpload;
