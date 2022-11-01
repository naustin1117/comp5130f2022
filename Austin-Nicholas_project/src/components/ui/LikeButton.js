import classes from "./LikeButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion } from "framer-motion";
import "./LikeButton.module.css";

function LikeButton() {
  const [state, changeState] = useState(false);

  const toggle = () => {
    console.log(state);
    changeState(!state);
  };

  return (
    <>
      <motion.button
        onClick={toggle}
        className={classes.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FontAwesomeIcon
          icon={faHeart}
          className={state ? classes.btnon : classes.btnoff}
        />
      </motion.button>
    </>
  );
}

export default LikeButton;
