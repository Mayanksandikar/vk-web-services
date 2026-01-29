import { motion } from "framer-motion";

const plans = [
  { 
    name: "Starter", 
    price: "7,999", 
    currency: "₹",
    detail: "Monthly Retainer",
    features: ["Basic Social Media", "Monthly Report", "Standard Support"] 
  },
  { 
    name: "Growth", 
    price: "19,999", 
    currency: "₹",
    detail: "Monthly Retainer",
    features: ["Advanced Marketing", "Ads Management", "Bi-weekly Strategy"] 
  },
  { 
    name: "Custom", 
    price: "Talk to us", 
    currency: "",
    detail: "Project Based",
    features: ["Full Development", "Brand Identity", "Dedicated Support"] 
  },
];

export default function Pricing() {
  return (
    <main className="bg-[#0a0a0a] text-[#f5f5f5] min-h-screen">
      <section className="px-6 md:px-24 py-40 max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-serif text-5xl md:text-8xl tracking-tighter"
          >
            Investment <br /> <span className="italic font-light opacity-50 text-zinc-500">Guide</span>
          </motion.h2>
          <p className="mt-8 text-zinc-500 uppercase tracking-[0.3em] text-[10px]">
            Every project is unique. These are our baselines.
          </p>
        </div>

        {/* Interactive Pricing List */}
        <div className="border-t border-white/10">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group py-12 border-b border-white/10 flex flex-col md:grid md:grid-cols-3 items-start md:items-center hover:bg-white/[0.01] transition-all duration-500 px-4"
            >
              {/* Plan Name */}
              <div className="flex flex-col">
                <h3 className="text-3xl font-serif group-hover:pl-4 transition-all duration-500">
                  {plan.name}
                </h3>
                <span className="text-[10px] uppercase tracking-widest opacity-40 mt-1">
                  {plan.detail}
                </span>
              </div>

              {/* Features List */}
              <div className="my-6 md:my-0">
                <ul className="text-[10px] space-y-2 uppercase tracking-[0.2em] text-zinc-500">
                  {plan.features.slice(0, 2).map((feat, idx) => (
                    <li key={idx} className="group-hover:text-white transition-colors">
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ATTRACTIVE PRICE SECTION */}
              <div className="md:text-right w-full">
                <motion.div 
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.8, delay: i * 0.2 }}
                   className="relative inline-block"
                >
                  <span className="text-zinc-500 text-lg md:text-xl align-top mr-1">{plan.currency}</span>
                  <span className="text-4xl md:text-6xl font-light tracking-tighter group-hover:text-white transition-colors duration-500 bg-gradient-to-b from-white to-zinc-600 bg-clip-text text-transparent group-hover:to-white">
                    {plan.price}
                  </span>
                  {plan.currency === "₹" && (
                    <span className="text-xs opacity-30 italic font-serif ml-2">/mo</span>
                  )}
                  
                  {/* Underline decorative element */}
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent mt-1"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-12 text-[10px] text-zinc-600 uppercase leading-relaxed max-w-xs">
          Prices may vary based on scope and complexity. Taxes applicable as per local laws.
        </p>
      </section>
    </main>
  );
}