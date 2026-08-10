"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { siteData } from "@/lib/data";
import { HelixBackground } from "./Animations";
import { MagneticButton } from "./Animations";

export default function PremiumHero() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section className="relative min-h-screen flex items-center pt-0 overflow-hidden bg-midnight">
            <HelixBackground />

            <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center relative z-10 mt-16 md:mt-0">

                {/* Spatial Text Reveal */}
                <motion.div
                    initial="hidden" animate="visible"
                    variants={{
                        hidden: { opacity: 0, perspective: 1000 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
                    }}
                    className="space-y-8"
                >
                    <motion.span
                        variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
                        className="block text-xs font-medium text-silver tracking-[0.2em] uppercase"
                    >
                        {siteData.hero.eyebrow}
                    </motion.span>

                    <motion.h1
                        variants={{ hidden: { opacity: 0, rotateX: 40, y: 40 }, visible: { opacity: 1, rotateX: 0, y: 0, transition: { duration: 1, ease: "easeOut" } } }}
                        className="text-5xl md:text-6xl lg:text-7xl leading-tight whitespace-pre-line drop-shadow-2xl origin-bottom"
                    >
                        {siteData.hero.headline}
                    </motion.h1>

                    <motion.p
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                        className="text-lg text-silver max-w-lg leading-relaxed"
                    >
                        {siteData.hero.description}
                    </motion.p>

                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="flex flex-col sm:flex-row gap-6 pt-4"
                    >
                        <MagneticButton href="#contact" className="px-10 py-5 bg-silver text-midnight text-sm font-semibold tracking-wide hover:bg-off-white transition-colors duration-300 rounded-sm text-center shadow-[0_0_30px_rgba(198,168,124,0.2)]">
                            Connect With Me
                        </MagneticButton>
                        <MagneticButton href={siteData.contact.paymentLink} className="px-10 py-5 bg-transparent border border-silver/50 text-off-white text-sm font-semibold tracking-wide hover:bg-silver/10 transition-colors duration-300 rounded-sm text-center">
                            LIC Payment
                        </MagneticButton>
                    </motion.div>
                </motion.div>

                {/* 3D Floating Portrait */}
                <div className="relative h-[500px] md:h-[700px] w-full flex items-center justify-center perspective-[2000px]">
                    <motion.div
                        initial={{ opacity: 0, rotateY: 20, rotateX: 10, scale: 0.8, z: -100 }}
                        animate={{ opacity: 1, rotateY: -5, rotateX: 5, scale: 1, z: 0 }}
                        transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ rotateY: 0, rotateX: 0, scale: 1.02 }}
                        className="relative z-10 w-64 h-80 md:w-80 md:h-[450px] bg-secondary-dark border border-silver/20 rounded-sm overflow-hidden shadow-[20px_20px_60px_rgba(0,0,0,0.6)]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent z-10 pointer-events-none" />
                        <img
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                            alt="Professional Portrait Placeholder"
                            className="object-cover w-full h-full grayscale-[20%] transition-transform duration-700 hover:scale-110"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}