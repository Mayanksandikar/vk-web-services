import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper pt-24 pb-10 px-6 md:px-24 border-t border-paper/10">
      <div className="flex flex-col md:flex-row justify-between items-end gap-12">
        
        {/* BIG BRANDING */}
        <div className="overflow-hidden">
          <motion.h2 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            viewport={{ once: true }}
            className="text-[15vw] leading-[0.8] font-serif font-bold tracking-tighter opacity-10"
          >
            VK.WS
          </motion.h2>
        </div>

        {/* FOOTER LINKS / INFO */}
        <div className="flex flex-col items-end text-right gap-6">
          <div className="flex gap-8 text-sm uppercase tracking-widest font-light">
            <a href="mailto:hello@vkws.com" className="hover:italic transition-all">Email</a>
            <a href="#" className="hover:italic transition-all">Instagram</a>
            <a href="#" className="hover:italic transition-all">LinkedIn</a>
          </div>
          
          <div className="max-w-[200px] text-xs leading-relaxed text-muted uppercase tracking-tighter">
            Digital craftsmanship <br /> 
            based in the void.
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-24 pt-8 border-t border-paper/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-muted">
        <p>© {currentYear} VK Web Services</p>
        <p>Built with precision & motion</p>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="hover:text-paper transition-colors"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}