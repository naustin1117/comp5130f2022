import classes from "./PictureList.module.css";
import IndividualPicture from "./IndividualPicture";

function PictureList(props) {
  return (
    <ul className={classes.list}>
      {props.product
        .slice(0)
        .reverse()
        .map((photo) => {
          return (
            <IndividualPicture
              title={photo.title}
              explanation={photo.explanation}
              url={photo.url}
              date={photo.date}
            />
          );
        })}
    </ul>
  );
}

export default PictureList;
