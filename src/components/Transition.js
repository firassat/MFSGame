import { motion } from "framer-motion";

const Transition = ({ children, y1, y2, delay, className }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: y1 }}
        animate={{ opacity: 1, y: y2 }}
        exit={{ opacity: 0, y: y1 }}
        transition={{ delay, duration: 0.6, type: "spring" }}
        className={className}
      >
        {children}
      </motion.div>
    </>
  );
};

export default Transition;

const Transition2 = ({ children, x1, x2, r1, r2, delay, className }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: x1, rotate: r1 }}
        animate={{ opacity: 1, x: x2, rotate: r2 }}
        exit={{ opacity: 0, x: x1, rotate: r1 }}
        transition={{ delay, duration: 0.6, type: "spring" }}
        className={className}
      >
        {children}
      </motion.div>
    </>
  );
};

const Transition3 = ({ children, s1, s2, r1, r2, delay, className }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: s1, rotate: r1 }}
        animate={{ opacity: 1, scale: s2, rotate: r2 }}
        exit={{ opacity: 0, scale: s1, rotate: r1 }}
        transition={{ delay, duration: 1, type: "spring" }}
        className={className}
      >
        {children}
      </motion.div>
    </>
  );
};

export { Transition3, Transition2 };
