import { motion } from "framer-motion";
import { fadeUp } from "../animations/motionVariants";

export default function AnimatedSection({ children, className }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
