import { motion } from 'framer-motion';

const Animate= () => {
  return (
    <motion.h2
      initial={{ y: -100, opacity: 0 }}   
      whileInView={{ y: 0, opacity: 1 }}  
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }} 
    >
      Hello Jiger! 😎
    </motion.h2>
  );
};

export default Animate;
