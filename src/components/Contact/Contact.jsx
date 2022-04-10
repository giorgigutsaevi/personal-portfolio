import "./Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ wid: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="contacth1">Contact Page</h1>
    </motion.div>
  );
};

export default Contact;
