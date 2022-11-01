import { motion } from "framer-motion";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./DescriptionButton.module.css";
import { useState } from "react";
import Modal from "../layout/Modal";

function DescriptionButton(props) {
  const [state, setState] = useState(false);
  return (
    <>
      <motion.button
        className={classes.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setState(true);
        }}
      >
        <FontAwesomeIcon icon={faImage} />
      </motion.button>
      <Modal
        show={state}
        photo={props.photo}
        onClick={() => {
          setState(false);
        }}
      />
    </>
  );
}
export default DescriptionButton;
