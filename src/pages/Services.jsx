import { motion } from "framer-motion";

const services = [
  { title: "Social Media Management", desc: "Strategy, content & engagement that builds brand authority." },
  { title: "Digital Marketing", desc: "SEO, paid ads & branding that convert." },
  { title: "Website Development", desc: "Fast, responsive & SEO‑optimized websites." },
  { title: "Software & IT Services", desc: "Custom software and scalable systems." },
  { title: "Custom Solutions", desc: "Tailored tech solutions for your business." },
];

export default function Services() {
  // Parent variants for staggered animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Each card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <motion.h2
        className="text-4xl font-bold mb-14 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Our Expertise
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((s, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.03 }}
            className="p-8 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur border border-gray-200 dark:border-gray-800 shadow-xl cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
