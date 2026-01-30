"use client";

import { motion } from "framer-motion";

const projects = [
  { 
    id: 1, 
    title: "Lumina Digital", 
    category: "Branding & Social", 
    size: "md:col-span-2",
    img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1471&auto=format&fit=crop" 
  },
  { 
    id: 2, 
    title: "Aether OS", 
    category: "Software Development", 
    size: "md:col-span-1",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1470&auto=format&fit=crop" 
  },
  { 
    id: 3, 
    title: "Kinetic Lab", 
    category: "IT Solutions", 
    size: "md:col-span-1",
    // REPLACED BROKEN IMAGE URL BELOW
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470&auto=format&fit=crop" 
  },
  { 
    id: 4, 
    title: "Velvet Theory", 
    category: "Digital Marketing", 
    size: "md:col-span-2",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1470&auto=format&fit=crop" 
  },
];

const revealVariants = {
  initial: { x: "0%" },
  whileInView: { 
    x: "100%", 
    transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1] } 
  }
};

export default function Portfolio() {
  return (
    <section className="bg-[#121212] text-[#f4f4f4] px-6 md:px-24 py-40">
      <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
        <div className="space-y-4">
          <span className="text-[10px] uppercase tracking-[0.5em] text-gray-500 block">— Our Portfolio</span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-6xl md:text-9xl tracking-tighter leading-none"
          >
            Selected <br /> <span className="italic font-light opacity-50">Works</span>
          </motion.h2>
        </div>
        
        <p className="max-w-[300px] text-xs uppercase tracking-[0.3em] text-gray-400 leading-relaxed border-l border-white/10 pl-6">
          Architecting digital success through code and creative strategy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-24 md:gap-x-12">
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            className={`${project.size} group relative`}
          >
            <div className="overflow-hidden bg-[#111] aspect-[16/10] md:aspect-auto md:h-[550px] relative rounded-sm">
              
              {/* Animation Layer */}
              <motion.div 
                variants={revealVariants}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="absolute inset-0 bg-[#1a1a1a] z-20"
              />

              <motion.img
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={project.img}
                alt={project.title}
                // Added object-center for better cropping
                className="w-full h-full object-cover object-center grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700" />
            </div>

            <div className="mt-8 flex justify-between items-end border-b border-white/5 pb-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-lime-500 mb-1 block">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif group-hover:italic transition-all duration-500">
                  {project.title}
                </h3>
              </div>
              <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-lime-500 group-hover:text-black group-hover:border-lime-500 transition-all duration-500">
                <span className="text-sm">↗</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}