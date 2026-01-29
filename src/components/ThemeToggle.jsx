import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    // Check localStorage first, then system preference
    localStorage.getItem("theme") === "dark" || 
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className={`
        relative w-14 h-7 flex items-center rounded-full px-1 transition-colors duration-500
        ${dark ? "bg-zinc-800 border-zinc-700" : "bg-zinc-100 border-zinc-300"}
        border
      `}
    >
      {/* The Sliding Circle */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className="w-5 h-5 bg-current rounded-full flex items-center justify-center overflow-hidden"
        style={{ x: dark ? "100%" : "0%" }}
      >
        {/* Subtle Icon Switch */}
        <motion.span 
          key={dark ? "sun" : "moon"}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          className="text-[10px]"
        >
          {dark ? "☀" : "🌙"}
        </motion.span>
      </motion.div>
    </button>
  );
}