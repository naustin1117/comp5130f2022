import classes from "./Modal.module.css";
import { motion } from "framer-motion";
import Card from "../ui/Card";

function Modal(props) {
  if (!props.show) {
    return null;
  }
  return (
    <modal className={classes.modal}>
      <motion.img
        src={props.photo}
        alt={"damn"}
        className={classes.image}
        onClick={props.onClick}
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.25 }}
      />
    </modal>
  );
}

export default Modal;
