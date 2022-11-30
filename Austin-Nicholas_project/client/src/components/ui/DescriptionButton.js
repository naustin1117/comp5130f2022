import { motion } from "framer-motion";
import classes from "./DescriptionButton.module.css";
import { useState } from "react";
import Modal from "../layout/Modal";
import {FaImage} from 'react-icons/fa';

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
        < FaImage />
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
