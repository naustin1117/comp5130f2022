import classes from "./PictureList.module.css";
import IndividualPicture from "./IndividualPicture";
import {ref,getDownloadURL, listAll, getMetadata} from "firebase/storage";
import {storage} from "../../firebase";
import { useState, useEffect } from "react";



function PictureList() {
  const [imageUrls, setImageUrls] = useState([]);
  const [metadata, setMetadata] = useState([])
  const [info, setInfo] = useState([])

  const imagesListRef = ref(storage, "images/");
  console.log(imagesListRef);
  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        var values = {
          url: "",
          title: "",
          price: ""
        }
        getMetadata(item).then((metadata) => {
          values.title = metadata.customMetadata.Title;
          values.price = metadata.customMetadata.Price;
        })
        .catch((error) => {alert(error)})
        getDownloadURL(item).then((url) => {
          values.url = url
        });
        setInfo((prev => [...prev,values]));
      });
    });
  },[]);


  
  return (
    <ul className={classes.list}>
      {info
        // .slice(0)
        // .reverse()
        .map((photo) => {
          console.log("PHOTO");
          console.log(photo);
          if(photo !== undefined) {
            return (
              <IndividualPicture
                url={photo.url}
                title={photo.title}
                price={photo.price}
              />
            );
          } else {
            return <h1>Invalid</h1>
          }
        })}
    </ul>
  );
}

export default PictureList;


