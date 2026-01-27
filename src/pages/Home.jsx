import { motion } from "framer-motion";


export default function Home() {
return (
<main className="bg-ink text-paper">


{/* HERO */}
<section className="min-h-screen flex items-center px-6 md:px-24">
<motion.div
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1.2 }}
className="max-w-3xl"
>
<h1 className="font-serif text-5xl md:text-7xl leading-tight">
Thoughtful digital
<br /> experiences.
</h1>


<p className="mt-6 text-muted text-lg max-w-xl">
VK Web Services works quietly behind the scenes to help brands
communicate better, work smarter, and grow naturally.
</p>
</motion.div>
</section>


{/* INTRO */}
<section className="px-6 md:px-24 py-32">
<p className="max-w-2xl text-xl leading-relaxed text-muted">
We are a small team of designers, developers, and strategists focused
on building long‑lasting digital foundations — not quick wins.
</p>
</section>


</main>
);
}