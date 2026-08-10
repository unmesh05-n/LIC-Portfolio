"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-midnight">
            <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <span className="text-xs font-medium text-silver tracking-[0.2em] uppercase">
                        {siteData.hero.eyebrow}
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight whitespace-pre-line">
                        {siteData.hero.headline}
                    </h1>
                    <p className="text-lg text-silver max-w-lg leading-relaxed">
                        {siteData.hero.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a href="#contact" className="px-8 py-4 bg-off-white text-navy text-sm font-medium hover:bg-silver transition-colors rounded-sm text-center">
                            Connect With Me
                        </a>
                        <a href={siteData.contact.paymentLink} className="px-8 py-4 bg-transparent border border-silver/30 text-off-white text-sm font-medium hover:bg-white/5 transition-colors rounded-sm text-center">
                            LIC Payment
                        </a>
                    </div>
                </motion.div>

                {/* Right Content - Abstract 3D/CSS Visual & Portrait */}
                <div className="relative h-[500px] md:h-[700px] w-full flex items-center justify-center">
                    {/* Subtle Abstract Luxury Visual (CSS + Framer Motion for stability) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-silver/10"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[400px] h-[400px] md:w-[650px] md:h-[650px] rounded-full border border-silver/5"
                        />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,41,59,0.3)_0%,transparent_60%)]" />
                    </div>

                    {/* Portrait Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative z-10 w-64 h-80 md:w-80 md:h-[450px] bg-secondary-dark border border-silver/20 rounded-sm overflow-hidden shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-navy/50 mix-blend-multiply z-10" />
                        {/* Replace src with actual client portrait for production */}
                        <img
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                            alt="Professional Portrait Placeholder"
                            className="object-cover w-full h-full grayscale-[30%]"
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}