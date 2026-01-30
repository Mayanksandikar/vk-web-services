"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { FiArrowUpRight, FiCheckCircle, FiLayers, FiZap, FiTarget } from "react-icons/fi";

export default function Home() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scale = useTransform(smoothProgress, [0, 0.5], [1, 1.5]);
  const opacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);
  const textY = useTransform(smoothProgress, [0, 0.5], [0, 200]);

  const processes = [
    { 
      title: "Discovery", 
      desc: "Deep diving into your business goals and user psychology.",
      icon: <FiTarget className="text-lime-500" />
    },
    { 
      title: "Architecture", 
      desc: "Building scalable blueprints with the latest tech stack.",
      icon: <FiLayers className="text-lime-500" />
    },
    { 
      title: "Execution", 
      desc: "Pixel-perfect development with high-performance code.",
      icon: <FiZap className="text-lime-500" />
    }
  ];

  return (
    <main ref={containerRef} className="relative bg-[#050505] text-white selection:bg-lime-500 selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[180vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
          <motion.div style={{ scale, opacity }} className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070" 
              className="w-full h-full object-cover"
              alt="Background"
            />
          </motion.div>

          <motion.div style={{ y: textY }} className="relative z-20 text-center px-4">
            <motion.h1 className="text-[18vw] md:text-[14vw] font-black leading-none tracking-tighter uppercase italic">
              VK.<span className="text-transparent bg-clip-text bg-gradient-to-tr from-lime-400 to-lime-600 not-italic">WS</span>
            </motion.h1>
            <p className="mt-4 text-zinc-400 tracking-[0.4em] uppercase text-sm">Premier Digital Engineering</p>
          </motion.div>
        </div>
      </section>

      {/* 2. CLIENT INFO & TRUST SECTION */}
      <section className="relative z-30 px-6 py-24 bg-white text-black rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto">
          
          {/* Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 border-b border-zinc-200 pb-12">
            {[
              { label: "Projects Delivered", value: "150+" },
              { label: "Client Satisfaction", value: "100%" },
              { label: "Performance Score", value: "99+" },
              { label: "Years Experience", value: "08" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl font-black text-lime-600">{stat.value}</p>
                <p className="text-zinc-500 text-sm uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter mb-8">
                Your Vision, <br /> <span className="text-lime-600">Engineered.</span>
              </h2>
              <p className="text-zinc-600 text-xl leading-relaxed">
                We partner with ambitious brands to build digital products that don't just look good—they dominate the market. From custom SaaS platforms to immersive web experiences.
              </p>
            </div>

            {/* Process Cards */}
            <div className="space-y-12">
              {processes.map((p, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  key={i} 
                  className="flex gap-6 border-l-2 border-zinc-100 pl-8 hover:border-lime-500 transition-colors"
                >
                  <div className="text-3xl mt-1">{p.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold uppercase">{p.title}</h3>
                    <p className="text-zinc-500 mt-2">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. BENTO GRID (Portfolios) */}
      <section className="relative z-30 bg-white px-6 pb-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <motion.div whileHover={{ y: -10 }} className="md:col-span-8 group relative aspect-video overflow-hidden rounded-3xl bg-zinc-900">
               <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="Work" />
               <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <span className="text-lime-400 text-sm font-bold uppercase tracking-widest mb-2">Case Study</span>
                  <h3 className="text-4xl font-black text-white">Next-Gen FinTech UI</h3>
               </div>
            </motion.div>
            <div className="md:col-span-4 bg-zinc-100 rounded-3xl p-10 flex flex-col justify-center">
              <h4 className="text-2xl font-bold mb-4 italic">"The most professional team we've worked with."</h4>
              <p className="text-zinc-500">— CTO, TechFlow Systems</p>
            </div>
          </div>
        </div>
      </section>

    
    </main>
  );
}