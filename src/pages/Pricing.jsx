import { motion } from "framer-motion";
import { fadeUp } from "../animations/motionVariants";

export default function Pricing() {
  const plans = [
    { name: "Starter", price: "₹2,999", features: ["1 Platform", "Reports"] },
    { name: "Standard", price: "₹9,999", features: ["3 Platforms", "Ads"] },
    { name: "Premium", price: "₹24,999", features: ["All Services", "Support"] },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 pt-20 pb-32">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Pricing
      </motion.h2>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((p, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow cursor-pointer transition"
          >
            <h3 className="text-2xl font-semibold">{p.name}</h3>
            <p className="text-3xl text-blue-600 font-bold mt-4">{p.price}</p>
            <ul className="mt-4 space-y-2">
              {p.features.map((f, idx) => (
                <li key={idx}>✔ {f}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
