"use client";

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

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
    <>
      <nav 
        className={`fixed top-0 w-full z-[100] px-6 md:px-12 py-5 flex justify-between items-center transition-all duration-500 ${
          scrolled 
            ? "bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/5 py-4" 
            : "bg-transparent"
        }`}
      >
        {/* Brand - Changed text color to white/lime */}
        <Link to="/" className="flex items-center gap-2 z-[101] font-black text-2xl tracking-tighter text-white">
          VK<span className="text-lime-400">.WS</span>
        </Link>

        {/* --- DESKTOP NAVIGATION --- */}
        <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-300">
          {navLinks.map((link, i) => (
            <Link key={i} to={link.href} className="group relative overflow-hidden">
              <span className="block group-hover:-translate-y-full transition-transform duration-500">
                {link.title}
              </span>
              <span className="absolute top-0 left-0 block translate-y-full group-hover:translate-y-0 transition-transform duration-500 text-lime-400 font-black italic">
                {link.title}
              </span>
            </Link>
          ))}
        </div>

        {/* --- ACTIONS --- */}
        <div className="flex items-center gap-6 z-[101]">
          <ThemeToggle />
          
          {/* Hamburger Icon - Responsive colors */}
          <button 
            onClick={toggleMenu} 
            className="flex flex-col gap-1.5 justify-center items-center outline-none group"
          >
            <motion.div 
              animate={{ rotate: open ? 45 : 0, y: open ? 7.5 : 0 }} 
              className={`w-7 h-[2px] transition-colors ${open ? 'bg-white' : 'bg-lime-400'}`} 
            />
            <motion.div 
              animate={{ opacity: open ? 0 : 1 }} 
              className="w-7 h-[2px] bg-white" 
            />
            <motion.div 
              animate={{ rotate: open ? -45 : 0, y: open ? -7.5 : 0 }} 
              className={`w-7 h-[2px] transition-colors ${open ? 'bg-white' : 'bg-lime-400'}`} 
            />
          </button>
        </div>
      </nav>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            // Using a slightly different dark shade for the menu overlay
            className="fixed inset-0 w-full h-screen bg-[#050505] z-[99] origin-top flex flex-col justify-center items-center p-10"
          >
            <motion.div
              variants={linkContainerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col gap-4 items-center"
            >
              {navLinks.map((link, index) => (
                <div key={index} className="overflow-hidden py-1">
                  <motion.div variants={linkVars}>
                    <Link 
                      to={link.href} 
                      onClick={toggleMenu}
                      className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white hover:text-lime-400 hover:italic transition-all duration-300 block"
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}