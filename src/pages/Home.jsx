import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <main ref={containerRef} className="relative bg-[#0a0a0a] text-[#f4f4f4] overflow-hidden">
      
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 relative z-10 pt-20">
        
        <div className="grid md:grid-cols-12 gap-8 items-end">
          {/* Main Headline - Massive but Stylized */}
          <div className="md:col-span-8">
            <h1 className="font-serif text-[12vw] md:text-[10vw] leading-[0.85] tracking-[ -0.04em] uppercase">
              <div className="overflow-hidden">
                <motion.span 
                  className="block"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={transition}
                >
                  Digital
                </motion.span>
              </div>
              <div className="overflow-hidden flex items-center gap-4">
                <motion.span 
                  className="block italic font-light lowercase text-[10vw] md:text-[8vw] opacity-60"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ ...transition, delay: 0.1 }}
                >
                  foundations
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span 
                  className="block"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ ...transition, delay: 0.2 }}
                >
                  for brands.
                </motion.span>
              </div>
            </h1>
          </div>

          {/* Floating Hero Image (Right) */}
          <motion.div 
            style={{ y: y1 }}
            className="hidden md:block md:col-span-4 h-[400px] overflow-hidden rounded-sm bg-zinc-900 shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
              alt="Software Development"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="mt-16 flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/10 pt-8"
        >
          <p className="text-gray-500 text-lg max-w-sm font-light leading-relaxed">
            VK Web Services: A specialized collective for Social Media, 
            Digital Marketing, and Software Engineering.
          </p>
          
          <div className="mt-8 md:mt-0 flex gap-4">
             <div className="text-[10px] uppercase tracking-[0.3em] py-2 px-4 border border-white/20 rounded-full">Social Management</div>
             <div className="text-[10px] uppercase tracking-[0.3em] py-2 px-4 border border-white/20 rounded-full">Development</div>
          </div>
        </motion.div>
      </section>

      {/* WORK / IMAGE GRID SECTION */}
      <section className="px-6 md:px-24 py-40">
        <div className="grid md:grid-cols-2 gap-20">
          
          {/* Left Block: Image + Text */}
          <motion.div style={{ y: y2 }} className="space-y-8">
            <div className="aspect-[4/5] overflow-hidden bg-zinc-900">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover grayscale contrast-125"
                alt="Digital Marketing Strategy"
              />
            </div>
            <h3 className="text-2xl font-serif italic">Strategy over noise.</h3>
          </motion.div>

          {/* Right Block: Content */}
          <div className="flex flex-col justify-center">
            <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="max-w-md"
            >
              <span className="text-[10px] uppercase tracking-[0.5em] text-gray-600 block mb-6">— Our Capability</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                From social algorithms to complex codebases.
              </h2>
              <p className="text-gray-400 font-light leading-relaxed mb-10">
                We bridge the gap between human connection (Social Media) and 
                technical excellence (IT Development). No quick wins, just 
                long-term growth.
              </p>
              <button className="group text-sm uppercase tracking-widest flex items-center gap-4">
                Explore Services <span className="group-hover:translate-x-2 transition-transform">→</span>
              </button>
            </motion.div>
          </div>

        </div>
      </section>

    </main>
  );
}