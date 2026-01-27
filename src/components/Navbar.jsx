import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto w-full px-4 py-4 flex justify-between items-center">
        <h1 className="font-bold text-lg md:text-xl">VK Web Services</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              <Link onClick={() => setOpen(false)} to="/">Home</Link>
              <Link onClick={() => setOpen(false)} to="/about">About</Link>
              <Link onClick={() => setOpen(false)} to="/services">Services</Link>
              <Link onClick={() => setOpen(false)} to="/portfolio">Portfolio</Link>
              <Link onClick={() => setOpen(false)} to="/pricing">Pricing</Link>
              <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
