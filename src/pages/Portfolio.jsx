import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      title: "Corporate Website",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Marketing Dashboard",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Startup Landing Page",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold mb-14"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Our Work
      </motion.h2>

      {/* Projects */}
      <motion.div
        className="grid md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            className="overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-gray-900 cursor-pointer"
          >
            <motion.img
              src={p.image}
              alt={p.title}
              className="h-56 w-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="p-4">
              <h3 className="font-semibold">{p.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
