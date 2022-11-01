import React from "react";
import { motion } from "framer-motion";
import classes from "./Loader.module.css";

const loaderVariants = {
  animationOne: {
    y: [20, -20],
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

const Loader = () => {
  return (
    <>
      <motion.div
        className={classes.loader}
        variants={loaderVariants}
        animate="animationOne"
      ></motion.div>
    </>
  );
};

export default Loader;
