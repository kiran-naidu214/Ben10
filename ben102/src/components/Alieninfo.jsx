import { motion, AnimatePresence } from "framer-motion";

function Alieninfo(props) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="alien-info"
        key={props.alien.id}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 60 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.h1
          className="alien-name-side"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {props.alien.name}
        </motion.h1>
        <motion.p
          className="alien-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          {props.alien.description}
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}

export default Alieninfo;