import classes from "./Card.module.css";
import { motion } from "framer-motion";

function Card(props) {
  const cardVariants = {
    visible: { opacity: 1, scale: 2, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };
  return <motion.div className={classes.card}>{props.children}</motion.div>;
}

export default Card;
