import { motion } from "framer-motion";

export default function Eye({
  eyeImage,
  x,
  y,
  className = "",
}) {
  return (
    <motion.img
      src={eyeImage}
      alt="eyeball"
      draggable={false}
      className={`absolute z-30 pointer-events-none select-none ${className}`}
      animate={{ x, y }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 18,
        mass: 0.6,
      }}
    />
  );
}