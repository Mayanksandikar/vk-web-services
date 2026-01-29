"use client"; // Add this if you are using Next.js App Router

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.33, 1, 0.68, 1] } 
  },
  viewport: { once: true, margin: "-10%" }
};

export default function About() {
  return (
    /* Changed bg-ink to bg-[#0a0a0a] and text-paper to text-[#f5f5f5] */
    <main className="bg-[#0a0a0a] text-[#f5f5f5] min-h-screen">
      <section className="px-6 md:px-24 py-40 max-w-6xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="overflow-hidden mb-12">
          <motion.h2 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-7xl tracking-tighter"
          >
            About <span className="italic font-light opacity-60">VK.WS</span>
          </motion.h2>
        </div>

        {/* TWO COLUMN CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <motion.div {...fadeUp}>
            {/* Changed text-muted to text-zinc-400 */}
            <p className="text-zinc-400 text-xl leading-relaxed">
              VK Web Services was founded with a simple idea — digital work should feel
              <span className="text-white italic"> considered</span>, not rushed.
            </p>
          </motion.div>

          <motion.div 
            {...fadeUp} 
            transition={{ ...fadeUp.whileInView.transition, delay: 0.2 }}
            className="flex flex-col justify-end"
          >
            {/* Changed text-muted to text-zinc-400 */}
            <p className="text-zinc-400 text-lg leading-relaxed">
              We collaborate closely with clients, understand their real needs, and
              build solutions that stay relevant over time.
            </p>
            
            {/* Minimalist Stat/Info */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <span className="text-[10px] uppercase tracking-[0.3em] block mb-2">Philosophy</span>
              <p className="text-sm italic opacity-50">Precision over Speed. Strategy over Trends.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OPTIONAL: A "IMAGE MASK" SECTION */}
      <section className="px-6 md:px-24 py-20">
         <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="h-[60vh] w-full bg-zinc-900 rounded-sm overflow-hidden"
         >
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 grayscale hover:grayscale-0 transition-all duration-1000" />
         </motion.div>
      </section>
    </main>
  );
}