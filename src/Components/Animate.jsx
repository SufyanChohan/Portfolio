import { motion } from 'framer-motion';

const Animate= () => {
  return (
    <motion.h2
      initial={{ y: -100, opacity: 0 }}   // 👈 Left se start
      whileInView={{ y: 0, opacity: 1 }}  // 👈 Scroll me dikhte hi aaja
      exit={{ y: -100, opacity: 0 }}      // 👈 Optional: hide again
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }} // 👈 Kitne scroll pe trigger ho
    >
      Hello Jiger! 😎
    </motion.h2>
  );
};

export default Animate;
