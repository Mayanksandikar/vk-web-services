"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowUpRight, FiZap, FiTarget, FiBox } from "react-icons/fi";

export default function About() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Unique animations
  const textX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

  return (
    <main className="bg-zinc-50 dark:bg-[#050505] text-zinc-900 dark:text-white transition-colors duration-700">
      
      {/* 1. THE KINETIC HEADER */}
      <section className="h-[120vh] relative flex items-center overflow-hidden">
        <motion.div 
          style={{ x: textX }}
          className="whitespace-nowrap flex gap-20 text-[20vw] font-black uppercase tracking-tighter leading-none opacity-5 select-none pointer-events-none absolute"
        >
          <span>VK WEB SERVICES • VK WEB SERVICES • VK WEB SERVICES</span>
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-7xl md:text-[10rem] font-black uppercase leading-[0.8] mb-12">
              WE ARE <br />
              <span className="text-lime-500 italic font-light font-serif">Kinetic.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. THE FLOATING MASK SECTION */}
      <section className="py-40 container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <motion.div 
            style={{ scale: imageScale }}
            className="aspect-[3/4] rounded-sm overflow-hidden border-[12px] border-white dark:border-zinc-900 shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              alt="Studio Life"
            />
          </motion.div>
          {/* Floating Badge */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-10 -right-10 w-32 h-32 bg-lime-500 rounded-full flex items-center justify-center p-4 text-center text-[10px] font-bold text-black uppercase tracking-tighter"
          >
            Design • Build • Scale • 
          </motion.div>
        </div>

        <div className="space-y-8">
          <h2 className="text-4xl font-bold uppercase tracking-tighter">The Anti-Template Philosophy</h2>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed">
            VK Web Services was built on a singular realization: <span className="text-zinc-900 dark:text-white underline decoration-lime-500 underline-offset-8">The internet is bored.</span> Most websites look the same because they are built the same. 
          </p>
          <p className="text-lg text-zinc-500 dark:text-zinc-400">
            We use **Computational Design** and **High-Fidelity Interaction** to create digital ecosystems that feel alive. We don't just deliver code; we deliver competitive advantages.
          </p>
          
          <div className="grid grid-cols-2 gap-4 pt-8">
            <div className="p-6 bg-zinc-200 dark:bg-zinc-900 rounded-xl">
              <span className="text-4xl font-black text-lime-500 italic">01.</span>
              <p className="text-xs uppercase font-bold mt-2">Zero Latency Philosophy</p>
            </div>
            <div className="p-6 bg-zinc-200 dark:bg-zinc-900 rounded-xl">
              <span className="text-4xl font-black text-lime-500 italic">02.</span>
              <p className="text-xs uppercase font-bold mt-2">Emotion-Driven UI</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE "SINE-WAVE" CAPABILITY SECTION */}
      <section className="py-40 bg-zinc-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h3 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter">
              Our <br /> Core <span className="text-lime-400">DNA.</span>
            </h3>
            <p className="max-w-xs text-zinc-500 uppercase text-[10px] tracking-[0.3em] font-bold">
              Engineering solutions that transcend the browser window.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-1 border-t border-zinc-800">
            {[
              { icon: <FiZap />, label: "Velocity", desc: "Edge-computed performance benchmarks." },
              { icon: <FiTarget />, label: "Clarity", desc: "User journeys mapped with cognitive precision." },
              { icon: <FiBox />, label: "Modularity", desc: "Scalable systems that evolve with your business." },
              { icon: <FiArrowUpRight />, label: "Impact", desc: "Conversion rates that speak louder than words." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ backgroundColor: "#84cc16", color: "#000" }}
                className="p-12 border-b border-zinc-800 transition-colors duration-300 group cursor-pointer"
              >
                <div className="text-3xl mb-8 group-hover:rotate-12 transition-transform">{item.icon}</div>
                <h4 className="text-2xl font-bold uppercase mb-4 tracking-tighter">{item.label}</h4>
                <p className="text-sm opacity-50 group-hover:opacity-100">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}