import { motion } from "framer-motion";

export default function About() {
  // Variants for staggered list items
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      {/* Heading */}
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        About VK Web Services
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className="mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        We are a full-service digital agency delivering growth-focused solutions.
      </motion.p>

      {/* List */}
      <motion.ul
        className="grid md:grid-cols-3 gap-6"
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.li
          className="p-6 border rounded"
          variants={itemVariants}
        >
          Mission-driven approach
        </motion.li>
        <motion.li
          className="p-6 border rounded"
          variants={itemVariants}
        >
          Experienced professionals
        </motion.li>
        <motion.li
          className="p-6 border rounded"
          variants={itemVariants}
        >
          Results-oriented mindset
        </motion.li>
      </motion.ul>
    </div>
  );
}
