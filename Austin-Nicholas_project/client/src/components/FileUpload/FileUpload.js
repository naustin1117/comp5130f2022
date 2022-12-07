import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import classes from "./FileUpload.module.css";
import {db} from "../../firebase";
import {storage} from "../../firebase";
import { ref, uploadBytes, getDownloadURL, updateMetadata} from "firebase/storage";
import {v4} from 'uuid';
import { addDoc, collection} from "firebase/firestore";

const FileUpload = ({ files, setFiles }) => {


  const [values, setValues] = useState({
    Title:"",
    Price: ""
  });

  const [imageUpload, setImageUpload] = useState(null);

  const uploadImage = (event) => {
    event.preventDefault();
    const metadata = {
      customMetadata: values
    };

    if(imageUpload == null) {
      alert("Need to add an image")
      return;
    } else if(values.Price === null) {
      alert("Need to add a Price")
      return;
    } else if(values.Title === "") {
      alert("Need to add a Title")
      return;}

    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("Image Uploaded")
      updateMetadata(imageRef, metadata).then((metadata) => {
      }).catch((error) => {
        alert(error);
      }).catch((error) => {
        alert(error);
      })
    }).finally(()=>{
      setValues({Title:"", Price: undefined})
      setImageUpload(null);
    })
    
  };

  const handleChange = (event) => {
    setValues({
        ...values,
        [event.target.name]: event.target.value,
    })
  }

  const handleImageChange = (event) => {
    setImageUpload(event.target.files[0])
  }


  return (
    <>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div>
              <h1 className={classes.header}>New Listing</h1>
          </div>
          <form className={classes.formwrapper}>
            <div className={classes.email}>
              <label className={classes.label}>Title</label>
              <input 
              className={classes.input} 
              type="title" 
              name="Title" 
              value={values.Title}
              onChange={handleChange}
              />
            </div>
            <div className={classes.email}>
              <label className={classes.label}>Price</label>
              <input 
              className={classes.input} 
              type="price" 
              name="Price" 
              value={values.Price}
              onChange={handleChange}
              />
            </div>
            <div className={classes.email}>
              <label className={classes.label}>Image</label>
              <input 
              className={classes.input} 
              type="file" 
              name="Ref" 
              value={values.Ref}
              onChange={handleImageChange}
              />
            </div>
          </form>
          <button className={classes.submit} onClick={uploadImage}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default FileUpload;
