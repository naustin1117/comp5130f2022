import Card from "../ui/Card";
import LikeButton from "../ui/LikeButton";
import classes from "./IndividualPicture.module.css";
import DescriptionButton from "../ui/DescriptionButton";

function IndividualPicture(photo) {
  console.log(photo.title)
  return (
    <li className={classes.li}>
      <Card>
        <div className={classes.image}>
          <img src={photo.url} alt={photo.title} />
        </div>
        <div className={classes.content}>
          <h3>{photo.title}</h3>
          <h4> $ {photo.price}</h4>
          <LikeButton className={classes.button} />
          <DescriptionButton className={classes.button} photo={photo.url} />
        </div>
      </Card>
    </li>
  );
}

export default IndividualPicture;



// <li className={classes.li}>
// <Card>
//   <div className={classes.image}>
//     <img src={photo.url} alt={photo.title} />
//   </div>
//   <div className={classes.words}>
//     <h3>{photo.title}</h3>
//     <h4> $ {photo.price}</h4>
//   </div>
//   <div className={classes.clear}></div>
//   <div className={classes.content}>
//     <LikeButton className={classes.button} />
//     <DescriptionButton className={classes.button} photo={photo.url} />
//   </div>
// </Card>
// </li>

