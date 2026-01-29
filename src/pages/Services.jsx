import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const services = [
  {
    id: "01",
    title: "Social Media Management",
    description: "Curating authentic narratives that resonate. We transform social presence from a broadcast into a conversation.",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "Digital Marketing",
    description: "Precision-engineered growth. We combine SEO depth with creative brand strategy to capture attention and conversion.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "Software Development",
    description: "Architecting the future. Clean code meets elegant UI to build digital tools that are as powerful as they are intuitive.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="bg-[#0a0a0a] text-[#f4f4f4] px-6 md:px-24 py-40 min-h-screen relative overflow-hidden"
    >
      {/* Floating Image Follower */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: 0,
              x: mousePos.x - 150, // Center image on cursor
              y: mousePos.y - 200 
            }}
            exit={{ opacity: 0, scale: 0.5, rotate: 5 }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="fixed pointer-events-none z-50 w-[300px] h-[400px] overflow-hidden rounded-lg shadow-2xl hidden md:block"
          >
            <img 
              src={activeService.img} 
              alt={activeService.title}
              className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-32 max-w-4xl"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] text-gray-500 block mb-6">— Expertises</span>
        <h2 className="font-serif text-6xl md:text-8xl tracking-tighter leading-none">
          Our <span className="italic font-light opacity-50">Core</span> Capabilities
        </h2>
      </motion.div>

      <div className="flex flex-col border-t border-white/10">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            onMouseEnter={() => setActiveService(service)}
            onMouseLeave={() => setActiveService(null)}
            className="group relative border-b border-white/10 py-12 md:py-20 cursor-pointer transition-colors duration-500 hover:bg-white/[0.02]"
          >
            <div className="flex items-center justify-between gap-8 z-10 relative">
              <div className="flex items-center gap-10 md:gap-20">
                <span className="font-mono text-xs opacity-30 group-hover:opacity-100 transition-opacity">
                  {service.id}
                </span>
                <h3 className="text-4xl md:text-7xl font-serif tracking-tight group-hover:italic group-hover:translate-x-6 transition-all duration-700 ease-out">
                  {service.title}
                </h3>
              </div>
              
              <div className="hidden md:block overflow-hidden h-12">
                <motion.span 
                  className="block text-4xl font-light opacity-20 group-hover:opacity-100 transition-all group-hover:-translate-y-full"
                >
                  <span className="block h-12">→</span>
                  <span className="block h-12 italic text-white">View</span>
                </motion.span>
              </div>
            </div>

            {/* Mobile-only Description (Always visible on small screens) */}
            <p className="mt-6 text-gray-500 text-lg max-w-xl md:hidden">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Decorative background text */}
      <div className="absolute -bottom-20 -right-20 text-[20vw] font-serif italic opacity-[0.02] pointer-events-none select-none">
        VK.WS
      </div>
    </section>
  );
}