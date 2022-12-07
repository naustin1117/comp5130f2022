import axios from "axios";
import { useState, useEffect } from "react";
import PictureList from "../components/pictures/PictureList";
import Loader from "../components/ui/Loader";
import {ref,getDownloadURL, listAll, getMetadata} from "firebase/storage";
import {storage} from "../firebase";

function Homepage() {
  // const url =
  //   "https://api.nasa.gov/planetary/apod?api_key=oyixdqkDkfWcxWbQg6pNTO1RWWkr5vjIjpz4ukSG";
  // const date = new Date();
  // console.log(date.getDate());
  // date.setDate(date.getDate() - 9);
  // const today =
  //   date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  // const [product, setProduct] = useState(null);

  // useEffect(() => {
  //   axios.get(url, { params: { start_date: today } }).then((response) => {
  //     console.log(response);
  //     setProduct(response.data);
  //   });
  // }, [url]);
  
  //NEW CODE
  const [imageUrls, setImageUrls] = useState([]);
  const [metadata, setMetadata] = useState([])

  const imagesListRef = ref(storage, "images/");
  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getMetadata(item).then((metadata) => {setMetadata(metadata)})
        .catch((error) => {alert(error)})
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  //console.log(imagesListRef)
  //console.log(metadata)
  
  // if (imageUrls) {
  //   return <PictureList product={imageUrls} metadata={metadata}/>;
  // }
  if (imageUrls) {
    return <PictureList />;
  }

  return (
    <div>
      <Loader />
    </div>
  );
}

export default Homepage;
