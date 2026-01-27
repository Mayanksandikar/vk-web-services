import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-bold mb-6">
            Digital Growth Starts Here
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Social Media • Digital Marketing • IT Solutions
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.img
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
          alt="Agency work"
          className="w-full h-[350px] object-cover rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        />
      </div>
    </section>
  );
}
