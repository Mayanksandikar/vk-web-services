import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const menuVars = {
  initial: { scaleY: 0 },
  animate: {
    scaleY: 1,
    transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] },
  },
  exit: {
    scaleY: 0,
    transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const linkContainerVars = {
  initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
  open: { transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 } },
};

const linkVars = {
  initial: { y: "30vh", transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] } },
  open: { y: 0, transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] } },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setOpen(!open);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Pricing", href: "/pricing" }, 
    { title: "Contact", href: "/contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] px-6 md:px-12 py-5 flex justify-between items-center transition-all duration-300 ${
        scrolled ? "bg-black/20 backdrop-blur-lg border-b border-white/10 py-4" : "bg-transparent"
      }`}
    >
      {/* Brand */}
      <Link 
        to="/" 
        className="font-serif text-2xl tracking-tighter z-[101] mix-blend-difference text-white"
      >
        VK<span className="italic opacity-50">.WS</span>
      </Link>

      <div className="flex items-center gap-8 z-[101]">
        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.2em] font-medium mix-blend-difference text-white">
          {navLinks.map((link, i) => (
            <Link key={i} to={link.href} className="group relative overflow-hidden">
              <span className="block group-hover:-translate-y-full transition-transform duration-500 italic">
                {link.title}
              </span>
              <span className="absolute top-0 left-0 block translate-y-full group-hover:translate-y-0 transition-transform duration-500 font-bold text-white">
                {link.title}
              </span>
            </Link>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Hamburger Menu Toggle */}
          <button 
            onClick={toggleMenu} 
            className="group flex flex-col gap-1.5 justify-center items-center p-2"
          >
            <motion.span 
              animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0, backgroundColor: open ? "#f5f5f5" : "#ffffff" }} 
              className="w-6 h-[1.5px] bg-white mix-blend-difference" 
            />
            <motion.span 
              animate={{ scaleX: open ? 0 : 1 }} 
              className="w-6 h-[1.5px] bg-white origin-right mix-blend-difference" 
            />
            <motion.span 
              animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0, backgroundColor: open ? "#f5f5f5" : "#ffffff" }} 
              className="w-6 h-[1.5px] bg-white mix-blend-difference" 
            />
          </button>
        </div>
      </div>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen bg-[#0a0a0a] text-[#f5f5f5] origin-top p-10 flex flex-col justify-center items-center"
          >
            <motion.div
              variants={linkContainerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col gap-6 items-center"
            >
              {navLinks.map((link, index) => (
                <div key={index} className="overflow-hidden">
                  <motion.div 
                    variants={linkVars} 
                    className="text-5xl md:text-8xl font-serif hover:italic transition-all duration-300"
                  >
                    <Link to={link.href} onClick={toggleMenu}>
                      {link.title}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </motion.div>
            
            {/* Bottom Menu Info */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 1 }}
              className="absolute bottom-10 flex gap-10 text-[10px] uppercase tracking-widest opacity-40"
            >
              <p>Instagram</p>
              <p>Twitter</p>
              <p>LinkedIn</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}