import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <main className="bg-ink text-paper min-h-screen">
      <section className="px-6 md:px-24 py-40 max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        
        {/* STICKY SIDEBAR TITLE */}
        <div className="md:w-1/3">
          <div className="md:sticky md:top-40">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="font-serif text-5xl md:text-7xl tracking-tighter leading-none"
            >
              Privacy <br /> 
              <span className="italic font-light opacity-50">& Terms</span>
            </motion.h2>
            <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-muted">
              Last Updated: January 2026
            </p>
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="md:w-2/3">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-16"
          >
            <section>
              <h3 className="text-xs uppercase tracking-widest mb-6 text-muted underline underline-offset-8">
                01. Our Philosophy
              </h3>
              <p className="text-xl md:text-2xl font-light leading-relaxed">
                VK Web Services values discretion. We collect minimal data necessary 
                to provide a seamless digital experience. We do not track for 
                advertisement purposes nor do we sell your digital footprint.
              </p>
            </section>

            <section className="border-t border-paper/10 pt-16">
              <h3 className="text-xs uppercase tracking-widest mb-6 text-muted">
                02. Data Usage
              </h3>
              <div className="space-y-6 text-muted font-light leading-relaxed">
                <p>
                  Any information provided through our inquiry forms is used 
                  strictly for communication between VK.WS and the client.
                </p>
                <p>
                  We utilize industry-standard encryption to ensure that your 
                  brand data and personal details remain private and secure.
                </p>
              </div>
            </section>

            <section className="border-t border-paper/10 pt-16">
              <h3 className="text-xs uppercase tracking-widest mb-6 text-muted">
                03. Cookies
              </h3>
              <p className="text-muted font-light leading-relaxed">
                This site uses essential cookies only to maintain performance and 
                user preferences, such as your choice between Dark and Light mode.
              </p>
            </section>
          </motion.div>
        </div>
      </section>
    </main>
  );
}