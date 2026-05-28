import { motion, AnimatePresence } from "framer-motion";

function Aliencard(props) {
  return (
    <motion.div className="card">
      <AnimatePresence mode="wait">
        {props.clicked ? (
          <motion.div
            key={props.alien.id + "-wrapper"}
            className="img2-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={props.alien.img2}
              alt={props.alien.name}
              className="alien-img-left"
            />
          </motion.div>
        ) : (
          <motion.img
            key={props.alien.id + "-normal"}
            src={props.alien.img1}
            alt={props.alien.name}
            onClick={props.onCardClick}
            className="alien-img"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ cursor: "pointer" }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!props.clicked && (
          <motion.h2
            key={props.alien.id + "-name"}
            className="alien-name"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {props.alien.name}
          </motion.h2>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Aliencard;