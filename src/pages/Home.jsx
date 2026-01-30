"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { useRef, useEffect } from "react";
import { FiArrowUpRight, FiCheckCircle, FiLayers, FiZap, FiTarget, FiChevronDown } from "react-icons/fi";

export default function Home() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Hero transforms
  const scale = useTransform(smoothProgress, [0, 0.5], [1, 1.5]);
  const opacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);
  const textY = useTransform(smoothProgress, [0, 0.5], [0, 200]);
  
  // New hero-specific animations
  const heroScrollProgress = useTransform(smoothProgress, [0, 0.2], [0, 1]);
  
  // Parallax layers
  const parallaxY1 = useTransform(heroScrollProgress, [0, 1], [0, 100]);
  const parallaxY2 = useTransform(heroScrollProgress, [0, 1], [0, 200]);
  
  // Text animations
  const titleOpacity = useTransform(heroScrollProgress, [0, 0.1, 0.3], [0, 0.5, 1]);
  const titleScale = useTransform(heroScrollProgress, [0, 0.2], [0.8, 1]);
  const subtitleY = useTransform(heroScrollProgress, [0, 0.3], [50, 0]);
  
  // Gradient animation
  const gradientX = useMotionValue(0);
  const gradientY = useMotionValue(0);
  
  // Mouse tracking for interactive gradient
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xPercent = x / rect.width;
      const yPercent = y / rect.height;
      
      gradientX.set(xPercent * 100);
      gradientY.set(yPercent * 100);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [gradientX, gradientY]);

  const gradientPosition = useMotionTemplate`${gradientX}% ${gradientY}%`;

  // Scroll indicator animation
  const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);
  const scrollIndicatorY = useTransform(smoothProgress, [0, 0.1], [0, 20]);

  // Particle Component
  const Particle = ({ index }) => {
    const x = useMotionValue(Math.random() * 100);
    const y = useMotionValue(Math.random() * 100);
    const scale = useTransform(smoothProgress, [0, 0.5], [0.5 + Math.random() * 0.5, 0]);
    
    useEffect(() => {
      const animate = () => {
        x.set(Math.random() * 100);
        y.set(Math.random() * 100);
        setTimeout(animate, 2000 + Math.random() * 3000);
      };
      animate();
    }, [x, y]);

    return (
      <motion.div
        style={{
          x: useMotionTemplate`${x}vw`,
          y: useMotionTemplate`${y}vh`,
          scale,
          opacity: useTransform(smoothProgress, [0, 0.3], [0.3, 0])
        }}
        className="absolute w-[1px] h-[1px] bg-lime-400 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 2 + Math.random() * 2,
          repeat: Infinity,
          delay: index * 0.1
        }}
      />
    );
  };

  // Floating 3D Object Component
  const Floating3DObject = ({ index }) => {
    const x = useMotionValue(Math.random() * 100);
    const y = useMotionValue(Math.random() * 100);
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    
    const objectScale = useTransform(smoothProgress, [0, 0.5], [0.8 + Math.random() * 0.4, 0]);
    
    useEffect(() => {
      const animate = () => {
        x.set(Math.random() * 100);
        y.set(Math.random() * 100);
        rotateX.set(rotateX.get() + 1);
        rotateY.set(rotateY.get() + 0.5);
        requestAnimationFrame(animate);
      };
      animate();
    }, [x, y, rotateX, rotateY]);

    const shapeStyle = index % 3 === 0 ? "rounded-lg" : index % 3 === 1 ? "rounded-full" : "";
    
    return (
      <motion.div
        style={{
          x: useMotionTemplate`${x}vw`,
          y: useMotionTemplate`${y}vh`,
          rotateX,
          rotateY,
          scale: objectScale,
          opacity: useTransform(smoothProgress, [0, 0.3], [0.4, 0])
        }}
        className={`absolute w-20 h-20 ${shapeStyle} ${
          index % 3 === 0 
            ? "bg-gradient-to-br from-lime-500/20 to-transparent border border-lime-500/30" 
            : index % 3 === 1 
            ? "bg-gradient-to-tr from-lime-600/15 to-transparent" 
            : "bg-gradient-to-bl from-lime-400/10 to-transparent"
        } backdrop-blur-sm`}
        animate={{
          y: [0, Math.random() * 40 - 20, 0],
          x: [0, Math.random() * 30 - 15, 0]
        }}
        transition={{
          duration: 4 + Math.random() * 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.3
        }}
      />
    );
  };

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
    <main ref={containerRef} className="relative bg-[#050505] text-white selection:bg-lime-500 selection:text-black overflow-hidden">
      
      {/* 1. ENHANCED HERO SECTION WITH 3D */}
      <section ref={heroRef} className="relative h-[180vh]">
        {/* Animated Background Layers */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Base Background */}
          <motion.div 
            style={{ scale, opacity }} 
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-lime-950/20 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070" 
              className="w-full h-full object-cover"
              alt="Background"
            />
          </motion.div>

          {/* 3D Floating Objects Container */}
          <div className="absolute inset-0 z-15">
            {[...Array(8)].map((_, i) => (
              <Floating3DObject key={i} index={i} />
            ))}
          </div>

          {/* Interactive Gradient Layer */}
          <motion.div
            style={{
              background: useMotionTemplate`radial-gradient(circle at ${gradientPosition}, rgba(132, 204, 22, 0.15) 0%, transparent 50%)`
            }}
            className="absolute inset-0 z-20 mix-blend-overlay"
          />

          {/* Animated Grid Overlay */}
          <motion.div
            style={{ opacity: useTransform(smoothProgress, [0, 0.3], [0.1, 0]) }}
            className="absolute inset-0 z-10"
          >
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(132, 204, 22, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(132, 204, 22, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
                maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)'
              }}
            />
          </motion.div>

          {/* Floating Particles */}
          <div className="absolute inset-0 z-10 overflow-hidden">
            {[...Array(25)].map((_, i) => (
              <Particle key={i} index={i} />
            ))}
          </div>
        </div>

        {/* Sticky Content Container */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center">
          <div className="relative z-30 w-full max-w-7xl mx-auto px-4">
            
            {/* 3D Animated Text Block */}
            <motion.div
              initial={{ rotateX: 45, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000
              }}
              className="relative mb-12 mx-auto max-w-3xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-lime-900/20 to-black/20 backdrop-blur-sm border border-lime-500/30 rounded-2xl transform translate-z-[-20px]" />
              <div className="relative p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  <span className="text-lime-400">Premier Digital Engineering</span>
                </h2>
                <p className="text-zinc-300">
                  We architect digital experiences with precision and innovation, 
                  transforming complex challenges into elegant solutions.
                </p>
              </div>
            </motion.div>

            {/* Main Title with Enhanced Effects */}
            <motion.div 
              style={{ y: textY }}
              className="relative"
            >
              {/* Glow Effect */}
              <motion.div
                style={{
                  opacity: useTransform(smoothProgress, [0, 0.2], [0.5, 0]),
                  scale: useTransform(smoothProgress, [0, 0.2], [1, 1.2])
                }}
                className="absolute inset-0 blur-3xl bg-gradient-to-r from-lime-500/30 to-transparent"
              />

              {/* Main Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-center"
              >
                <motion.span 
                  style={{ 
                    opacity: titleOpacity,
                    scale: titleScale
                  }}
                  className="block text-[18vw] md:text-[14vw] font-black leading-none tracking-tighter uppercase italic"
                >
                  VK.
                  <motion.span 
                    animate={{
                      textShadow: [
                        "0 0 20px rgba(132, 204, 22, 0.5)",
                        "0 0 40px rgba(132, 204, 22, 0.8)",
                        "0 0 20px rgba(132, 204, 22, 0.5)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="text-transparent bg-clip-text bg-gradient-to-tr from-lime-400 via-lime-500 to-lime-600 not-italic"
                  >
                    WS
                  </motion.span>
                </motion.span>
              </motion.h1>

              {/* Subtitle with Stagger Animation */}
              <motion.div
                style={{ y: subtitleY }}
                className="relative mt-4"
              >
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-center text-zinc-400 tracking-[0.4em] uppercase text-sm font-medium"
                >
                  Crafting Digital Excellence
                </motion.p>
                
                {/* Animated Underline */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                  className="h-[1px] bg-gradient-to-r from-transparent via-lime-500 to-transparent mx-auto mt-6 max-w-xs"
                />
              </motion.div>
            </motion.div>

            {/* Floating Code Elements */}
            <motion.div
              style={{ y: parallaxY1 }}
              className="absolute left-10 top-1/4 text-lime-400/20 text-6xl"
            >
              &lt;/&gt;
            </motion.div>
            <motion.div
              style={{ y: parallaxY2 }}
              className="absolute right-10 bottom-1/4 text-lime-400/20 text-6xl"
            >
              {`{ }`}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              style={{
                opacity: scrollIndicatorOpacity,
                y: scrollIndicatorY
              }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            >
              <motion.div
                animate={{
                  y: [0, 10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-lime-400"
              >
                <FiChevronDown size={24} />
              </motion.div>
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-xs text-zinc-500 uppercase tracking-widest"
              >
                Scroll
              </motion.p>
            </motion.div>
          </div>
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
            <motion.div 
              whileHover={{ y: -10 }} 
              className="md:col-span-8 group relative aspect-video overflow-hidden rounded-3xl bg-zinc-900"
            >
               <img 
                 src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070" 
                 className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
                 alt="Work" 
               />
               <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <span className="text-lime-400 text-sm font-bold uppercase tracking-widest mb-2">Case Study</span>
                  <h3 className="text-4xl font-black text-white">Next-Gen FinTech UI</h3>
               </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}