import "./Homepage.css";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div 
		className="homepage"
		initial={{wid: 0}}
		animate={{opacity: 1}}
		transition={{ease: "easeOut", duration: 1}}
		exit={{opacity: 0}}
	
		>
      <h1 class>Homepage</h1>
    </motion.div>
  );
};

export default Homepage;
