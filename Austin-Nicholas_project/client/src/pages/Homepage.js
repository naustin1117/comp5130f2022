import axios from "axios";
import { useState, useEffect } from "react";
import PictureList from "../components/pictures/PictureList";
import Loader from "../components/ui/Loader";

function Homepage() {
  const url =
    "https://api.nasa.gov/planetary/apod?api_key=oyixdqkDkfWcxWbQg6pNTO1RWWkr5vjIjpz4ukSG";
  const date = new Date();
  console.log(date.getDate());
  date.setDate(date.getDate() - 9);
  const today =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(url, { params: { start_date: today } }).then((response) => {
      console.log(response);
      setProduct(response.data);
    });
  }, [url]);

  if (product) {
    return <PictureList product={product} />;
  }

  return (
    <div>
      <Loader />
    </div>
  );
}

export default Homepage;
