import { motion } from "framer-motion";

const containerVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
  }
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } 
  }
};

export default function Contact() {
  return (
    <main className="bg-ink text-paper min-h-screen">
      <section className="px-6 md:px-24 py-40 max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        
        {/* LEFT SIDE: TEXT */}
        <motion.div 
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 
            variants={itemVariants}
            className="font-serif text-6xl md:text-8xl tracking-tighter leading-none mb-12"
          >
            Say <br /> <span className="italic font-light opacity-50">Hello.</span>
          </motion.h2>
          
          <motion.div variants={itemVariants} className="space-y-8">
            <p className="text-xl text-muted font-light max-w-sm leading-relaxed">
              Tell us about your project — we’ll reply thoughtfully within 24 hours.
            </p>
            
            <div className="flex flex-col gap-2 uppercase tracking-[0.2em] text-[10px]">
              <span className="opacity-40">Direct Inquiry</span>
              <a href="mailto:hello@vkwebservices.com" className="text-sm hover:italic transition-all">
                hello@vkwebservices.com
              </a>
            </div>

            <div className="flex flex-col gap-2 uppercase tracking-[0.2em] text-[10px]">
              <span className="opacity-40">Instant Message</span>
              <a href="https://wa.me/91XXXXXXXXXX" className="text-sm hover:italic transition-all">
                +91 XXXXX XXXXX
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE: MINIMAL FORM */}
        <motion.form 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col gap-12"
        >
          <div className="relative group">
            <label className="text-[10px] uppercase tracking-widest opacity-40 block mb-2 transition-all group-focus-within:opacity-100 group-focus-within:text-white">Name</label>
            <input 
              type="text" 
              className="w-full bg-transparent border-b border-paper/20 py-2 outline-none focus:border-white transition-colors font-light"
              placeholder="Your name"
            />
          </div>

          <div className="relative group">
            <label className="text-[10px] uppercase tracking-widest opacity-40 block mb-2 transition-all group-focus-within:opacity-100 group-focus-within:text-white">Email Address</label>
            <input 
              type="email" 
              className="w-full bg-transparent border-b border-paper/20 py-2 outline-none focus:border-white transition-colors font-light"
              placeholder="email@example.com"
            />
          </div>

          <div className="relative group">
            <label className="text-[10px] uppercase tracking-widest opacity-40 block mb-2 transition-all group-focus-within:opacity-100 group-focus-within:text-white">Project Details</label>
            <textarea 
              rows="4"
              className="w-full bg-transparent border-b border-paper/20 py-2 outline-none focus:border-white transition-colors font-light resize-none"
              placeholder="Tell us what you're building..."
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-max px-12 py-4 bg-paper text-ink uppercase tracking-[0.3em] text-xs font-bold hover:bg-white transition-colors mt-4"
          >
            Send Inquiry
          </motion.button>
        </motion.form>
      </section>
    </main>
  );
}