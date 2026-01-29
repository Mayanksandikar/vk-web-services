import { motion } from "framer-motion";

const plans = [
  { 
    name: "Starter", 
    price: "₹7,999", 
    detail: "Monthly Retainer",
    features: ["Basic Social Media", "Monthly Report", "Standard Support"] 
  },
  { 
    name: "Growth", 
    price: "₹19,999", 
    detail: "Monthly Retainer",
    features: ["Advanced Marketing", "Ads Management", "Bi-weekly Strategy"] 
  },
  { 
    name: "Custom", 
    price: "Talk to us", 
    detail: "Project Based",
    features: ["Full Development", "Brand Identity", "Dedicated Support"] 
  },
];

export default function Pricing() {
  return (
    <main className="bg-ink text-paper min-h-screen">
      <section className="px-6 md:px-24 py-40 max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-serif text-5xl md:text-8xl tracking-tighter"
          >
            Investment <br /> <span className="italic font-light opacity-50">Guide</span>
          </motion.h2>
          <p className="mt-8 text-muted uppercase tracking-[0.3em] text-[10px]">
            Every project is unique. These are our baselines.
          </p>
        </div>

        {/* Interactive Pricing List */}
        <div className="border-t border-paper/10">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group py-12 border-b border-paper/10 flex flex-col md:grid md:grid-cols-3 items-start md:items-center hover:bg-paper/[0.02] transition-colors"
            >
              {/* Plan Name */}
              <div className="flex flex-col">
                <h3 className="text-3xl font-serif group-hover:italic transition-all">
                  {plan.name}
                </h3>
                <span className="text-[10px] uppercase tracking-widest opacity-40 mt-1">
                  {plan.detail}
                </span>
              </div>

              {/* Features List */}
              <div className="my-6 md:my-0">
                <ul className="text-xs space-y-2 uppercase tracking-widest text-muted">
                  {plan.features.slice(0, 2).map((feat, idx) => (
                    <li key={idx}>• {feat}</li>
                  ))}
                </ul>
              </div>

              {/* Price Reveal */}
              <div className="md:text-right">
                <span className="text-2xl md:text-4xl font-light tracking-tighter">
                  {plan.price}
                  {plan.price.includes("₹") && <span className="text-sm opacity-50 italic"> /mo</span>}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-12 text-[10px] text-muted uppercase leading-relaxed max-w-xs">
          Prices may vary based on scope and complexity. Taxes applicable as per local laws.
        </p>
      </section>
    </main>
  );
}