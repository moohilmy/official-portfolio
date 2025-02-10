"use client";
import { motion } from "framer-motion";

const SocialIcon = ({ children , index }: { children: React.ReactElement, index : number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 , delay: 0.5 * index}}
      
      viewport={{ once: true }}
      className=" cursor-pointer text-secondaryColor text-6xl hover:text-primaryColor"
    >
      {children}
    </motion.div>
  );
};

export default SocialIcon;
