import classes from "./LikeButton.module.css";
import { FaHeart } from 'react-icons/fa';
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
        <FaHeart 
        className={state ? classes.btnon : classes.btnoff}
        />
      </motion.button>
    </>
  );
}

export default LikeButton;
