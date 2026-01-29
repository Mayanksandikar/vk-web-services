import { motion } from "framer-motion";

export default function MobileCTA() {
  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden w-[90%]"
    >
      <div className="bg-ink/90 dark:bg-paper/90 backdrop-blur-md text-paper dark:text-ink px-6 py-4 rounded-full flex justify-between items-center shadow-2xl border border-white/10 dark:border-black/10">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-[0.2em] opacity-60">Inquiry</span>
          <span className="text-sm font-serif italic">Start a conversation</span>
        </div>

        <motion.a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.95 }}
          className="bg-paper dark:bg-ink text-ink dark:text-paper px-5 py-2 rounded-full text-xs uppercase tracking-widest font-bold"
        >
          WhatsApp
        </motion.a>
      </div>
    </motion.div>
  );
}