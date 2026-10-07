"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

import { siteData } from "@/lib/data";

export default function PremiumHero() {
    return (
        <section
            id="home"
            className="relative overflow-hidden bg-white"
        >
            {/* Subtle LIC-inspired background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#eef5fb] blur-3xl" />

                <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-[#fff5bf]/40 blur-3xl" />

                <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#003b73 1px, transparent 1px), linear-gradient(90deg, #003b73 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-12 md:pb-28 md:pt-20 lg:pb-32 lg:pt-24">
                <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="max-w-3xl"
                    >
                        <h1 className="max-w-3xl font-serif text-5xl leading-[0.98] tracking-[-0.025em] text-dark-blue sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                            {siteData.hero.headline}
                        </h1>

                        <div className="mt-7 h-px w-20 bg-yellow" />

                        <p className="mt-7 max-w-2xl text-base leading-8 text-dark-blue/65 md:text-lg md:leading-8">
                            {siteData.hero.description}
                        </p>

                        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                            <a
                                href={siteData.hero.primaryCta.href}
                                className="group inline-flex min-h-14 items-center justify-center gap-3 bg-[#0054a6] px-7 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-dark-blue"
                            >
                                {siteData.hero.primaryCta.label}

                                <ArrowRight
                                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                    strokeWidth={1.6}
                                />
                            </a>

                            <a
                                href={siteData.hero.secondaryCta.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-14 items-center justify-center gap-3 border border-dark-blue/15 bg-white px-7 text-xs font-semibold uppercase tracking-[0.12em] text-dark-blue transition-colors duration-300 hover:border-[#0054a6] hover:bg-[#eef5fb]"
                            >
                                <MessageCircle
                                    className="h-4 w-4"
                                    strokeWidth={1.6}
                                />

                                {siteData.hero.secondaryCta.label}
                            </a>
                        </div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                            duration: 0.9,
                            delay: 0.12,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative"
                    >
                        <div className="absolute -bottom-5 -left-5 h-24 w-24 border-b-2 border-l-2 border-yellow md:-bottom-7 md:-left-7 md:h-32 md:w-32" />

                        <div className="relative aspect-[4/5] overflow-hidden bg-[#eef5fb] md:aspect-[5/6]">
                            <Image
                                src={siteData.hero.image}
                                alt={siteData.hero.imageAlt}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 45vw"
                                className="object-cover object-center"
                            />
                        </div>

                        <div className="absolute -right-4 -top-4 h-20 w-20 border-r-2 border-t-2 border-yellow md:-right-6 md:-top-6 md:h-28 md:w-28" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}