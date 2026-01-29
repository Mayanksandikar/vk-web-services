import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

// Animation Variants
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
    <nav className="fixed top-0 w-full z-[100] px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
      {/* Brand - mix-blend-difference makes it switch color based on background */}
      <Link to="/" className="font-serif text-2xl tracking-tighter z-[101]">
        VK.WS
      </Link>

      <div className="flex items-center gap-8 z-[101]">
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-light">
          {navLinks.map((link, i) => (
            <Link key={i} to={link.href} className="hover:italic transition-all">
              {link.title}
            </Link>
          ))}
        </div>
        
        <ThemeToggle />

        {/* Custom Animated Hamburger */}
        <button onClick={toggleMenu} className="flex flex-col gap-1.5 justify-center items-center">
          <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }} className="w-8 h-[1px] bg-current" />
          <motion.span animate={{ opacity: open ? 0 : 1 }} className="w-8 h-[1px] bg-current" />
          <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }} className="w-8 h-[1px] bg-current" />
        </button>
      </div>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen bg-ink text-paper origin-top p-10 flex flex-col justify-center"
          >
            <motion.div
              variants={linkContainerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col gap-4 items-center"
            >
              {navLinks.map((link, index) => (
                <div key={index} className="overflow-hidden">
                  <motion.div variants={linkVars} className="text-5xl md:text-7xl font-serif">
                    <Link to={link.href} onClick={toggleMenu}>
                      {link.title}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}