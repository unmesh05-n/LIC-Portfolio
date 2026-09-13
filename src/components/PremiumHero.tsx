"use client";

import Image from "next/image";
import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

import { siteData } from "@/lib/data";
import {
    HelixBackground,
    MagneticButton,
} from "./Animations";

export default function PremiumHero() {
    const reducedMotion = useReducedMotion();

    const { scrollYProgress } = useScroll();

    const contentY = useTransform(
        scrollYProgress,
        [0, 0.35],
        reducedMotion ? [0, 0] : [0, -55],
    );

    const contentOpacity = useTransform(
        scrollYProgress,
        [0, 0.32],
        reducedMotion ? [1, 1] : [1, 0],
    );

    const portraitY = useTransform(
        scrollYProgress,
        [0, 0.45],
        reducedMotion ? [0, 0] : [0, 90],
    );

    const portraitOpacity = useTransform(
        scrollYProgress,
        [0, 0.5],
        reducedMotion ? [1, 1] : [1, 0],
    );

    return (
        <section
            id="home"
            className="section-shell relative flex min-h-[100svh] items-center overflow-hidden bg-midnight pt-24 md:pt-20"
        >
            {/* ================================================================== */}
            {/* ATMOSPHERIC BACKGROUND                                             */}
            {/* ================================================================== */}

            <div
                className="ambient-background absolute inset-0 z-0"
                aria-hidden="true"
            >
                <div className="ambient-glow left-[-12%] top-[12%]" />

                <div className="ambient-glow-secondary bottom-[-18%] right-[-12%]" />

                <div className="ambient-dust" />

                <div className="ambient-grid" />

                <div className="ambient-vignette" />
            </div>

            {/* Existing editorial helix layer */}
            <HelixBackground />

            {/* ================================================================== */}
            {/* CINEMATIC LIGHT                                                     */}
            {/* ================================================================== */}

            <div
                className="pointer-events-none absolute inset-0 z-[1]"
                aria-hidden="true"
            >
                <div className="absolute left-[-10%] top-[24%] h-[360px] w-[360px] rounded-full bg-silver/[0.025] blur-[110px] md:h-[500px] md:w-[500px]" />

                <div className="absolute bottom-[-12%] right-[-8%] h-[380px] w-[380px] rounded-full bg-soft-blue/[0.08] blur-[130px] md:h-[500px] md:w-[500px]" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_0%,rgba(13,13,15,0.18)_72%,rgba(13,13,15,0.65)_100%)]" />
            </div>

            {/* ================================================================== */}
            {/* MAIN STORY                                                          */}
            {/* ================================================================== */}

            <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-6 py-14 md:grid-cols-[1.35fr_0.65fr] md:gap-8 md:py-20 lg:grid-cols-[1.4fr_0.6fr] lg:gap-12">
                {/* ---------------------------------------------------------------- */}
                {/* Story / Identity                                                */}
                {/* ---------------------------------------------------------------- */}

                <motion.div
                    style={{
                        y: contentY,
                        opacity: contentOpacity,
                    }}
                    className="max-w-3xl"
                >
                    <motion.div
                        initial={
                            reducedMotion
                                ? { opacity: 1 }
                                : { opacity: 0, x: -24 }
                        }
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.75,
                            delay: reducedMotion ? 0 : 0.15,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-silver">
                            {siteData.hero.eyebrow}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={
                            reducedMotion
                                ? { opacity: 1 }
                                : { opacity: 0, y: 35 }
                        }
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: reducedMotion ? 0 : 0.25,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-5 max-w-4xl whitespace-pre-line font-serif text-[clamp(3rem,7vw,6.8rem)] leading-[0.94] tracking-[-0.035em] text-off-white"
                    >
                        {siteData.hero.headline}
                    </motion.h1>

                    <motion.p
                        initial={
                            reducedMotion
                                ? { opacity: 1 }
                                : { opacity: 0, y: 20 }
                        }
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: reducedMotion ? 0 : 0.45,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-7 max-w-xl text-base leading-7 text-light-silver/80 md:text-lg"
                    >
                        {siteData.hero.description}
                    </motion.p>

                    <motion.div
                        initial={
                            reducedMotion
                                ? { opacity: 1 }
                                : { opacity: 0, y: 20 }
                        }
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: reducedMotion ? 0 : 0.6,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
                    >
                        <MagneticButton
                            href="#contact"
                            className="inline-flex min-h-14 items-center justify-center gap-3 bg-silver px-7 text-xs font-semibold uppercase tracking-[0.14em] text-midnight transition-colors duration-300 hover:bg-off-white"
                        >
                            {siteData.hero.primaryCta.label}

                            <ArrowRight
                                className="h-4 w-4"
                                strokeWidth={1.5}
                            />
                        </MagneticButton>

                        <a
                            href={siteData.hero.secondaryCta.href}
                            className="group inline-flex min-h-14 items-center justify-center gap-3 border border-silver/25 px-7 text-xs font-medium uppercase tracking-[0.14em] text-off-white transition-colors duration-300 hover:border-silver/60 hover:bg-silver/[0.06]"
                        >
                            {siteData.hero.secondaryCta.label}

                            <ArrowDown
                                className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1"
                                strokeWidth={1.5}
                            />
                        </a>
                    </motion.div>

                    {/* Small identity marker */}
                    <motion.div
                        initial={
                            reducedMotion
                                ? { opacity: 1 }
                                : { opacity: 0 }
                        }
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: reducedMotion ? 0 : 0.9,
                        }}
                        className="mt-12 flex items-center gap-4"
                    >
                        <span className="h-px w-10 bg-silver/40" />

                        <span className="text-[10px] uppercase tracking-[0.2em] text-silver/60">
                            {siteData.global.designation}
                        </span>
                    </motion.div>
                </motion.div>

                {/* ---------------------------------------------------------------- */}
                {/* Portrait / Depth Composition                                    */}
                {/* ---------------------------------------------------------------- */}

                <motion.div
                    style={{
                        y: portraitY,
                        opacity: portraitOpacity,
                    }}
                    className="depth-perspective relative flex min-h-[430px] items-center justify-center md:min-h-[580px] lg:min-h-[650px]"
                >
                    {/* Ambient portrait halo */}
                    <motion.div
                        aria-hidden="true"
                        className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-silver/[0.035] blur-[90px]"
                        animate={
                            reducedMotion
                                ? undefined
                                : {
                                    scale: [1, 1.045, 1],
                                    opacity: [0.5, 0.8, 0.5],
                                }
                        }
                        transition={{
                            duration: 9,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Far depth frame */}
                    <motion.div
                        initial={
                            reducedMotion
                                ? { opacity: 1, scale: 1 }
                                : { opacity: 0, scale: 0.92 }
                        }
                        animate={
                            reducedMotion
                                ? { opacity: 1, scale: 1 }
                                : {
                                    opacity: 1,
                                    scale: [1, 1.018, 1],
                                }
                        }
                        transition={
                            reducedMotion
                                ? { duration: 0 }
                                : {
                                    opacity: {
                                        duration: 1.2,
                                        delay: 0.35,
                                        ease: [0.22, 1, 0.36, 1],
                                    },
                                    scale: {
                                        duration: 10,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    },
                                }
                        }
                        className="absolute h-[92%] w-[88%] border border-silver/[0.07]"
                    />

                    {/* Main decorative frame */}
                    <motion.div
                        initial={
                            reducedMotion
                                ? { opacity: 1, scale: 1 }
                                : { opacity: 0, scale: 0.94 }
                        }
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 1.2,
                            delay: reducedMotion ? 0 : 0.4,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="depth-layer absolute h-[88%] w-[82%] border border-silver/35"
                    />

                    {/* Offset editorial frame */}
                    <motion.div
                        initial={
                            reducedMotion
                                ? { opacity: 1, x: 0, y: 0 }
                                : { opacity: 0, x: 16, y: 16 }
                        }
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: reducedMotion ? 0 : 0.55,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="depth-layer absolute h-[82%] w-[76%] translate-x-3 translate-y-3 border border-silver/[0.08]"
                    />

                    {/* Portrait */}
                    <motion.div
                        initial={
                            reducedMotion
                                ? { opacity: 1, scale: 1 }
                                : {
                                    opacity: 0,
                                    scale: 0.9,
                                    rotate: 2,
                                    z: -40,
                                }
                        }
                        animate={{
                            opacity: 1,
                            scale: 1,
                            rotate: 0,
                            z: 0,
                        }}
                        transition={{
                            duration: 1.2,
                            delay: reducedMotion ? 0 : 0.5,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={
                            reducedMotion
                                ? undefined
                                : {
                                    scale: 1.015,
                                    rotate: -0.5,
                                    z: 12,
                                }
                        }
                        className="depth-layer relative z-10 aspect-[4/5] w-[82%] max-w-[420px] md:w-[78%] lg:w-[82%] overflow-hidden border border-silver/50 bg-secondary-dark shadow-[25px_30px_80px_rgba(0,0,0,0.45)]"
                    >
                        <div
                            className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-midnight/60 via-transparent to-transparent"
                            aria-hidden="true"
                        />

                        <div
                            className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(120deg,transparent_30%,rgba(198,168,124,0.06)_50%,transparent_70%)]"
                            aria-hidden="true"
                        />

                        <Image
                            src={siteData.hero.image}
                            alt={siteData.hero.imageAlt}
                            fill
                            priority
                            unoptimized
                            sizes="(max-width: 767px) 82vw, (max-width: 1023px) 36vw, 420px"
                            className="object-cover transition-transform duration-1000 ease-out hover:scale-[1.02]"
                        />
                    </motion.div>

                    {/* Floating professional marker */}
                    <motion.div
                        initial={
                            reducedMotion
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 12 }
                        }
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: reducedMotion ? 0 : 1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute bottom-[5%] left-[4%] z-20 border border-silver/15 bg-midnight/80 px-4 py-3 backdrop-blur-md md:left-0"
                    >
                        <div className="text-[9px] uppercase tracking-[0.2em] text-silver/60">
                            Professional journey
                        </div>

                        <div className="mt-1 text-sm text-off-white">
                            {siteData.global.name}
                        </div>
                    </motion.div>

                    {/* Small orbit marker */}
                    <motion.div
                        aria-hidden="true"
                        className="absolute right-[7%] top-[18%] z-20 hidden h-2 w-2 rounded-full bg-silver/60 shadow-[0_0_24px_rgba(198,168,124,0.35)] md:block"
                        animate={
                            reducedMotion
                                ? undefined
                                : {
                                    y: [0, -7, 0],
                                    opacity: [0.45, 0.85, 0.45],
                                }
                        }
                        transition={{
                            duration: 4.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </motion.div>
            </div>

            {/* ================================================================== */}
            {/* SCROLL CUE                                                         */}
            {/* ================================================================== */}

            <motion.a
                href="#about"
                initial={
                    reducedMotion
                        ? { opacity: 1 }
                        : { opacity: 0 }
                }
                animate={{ opacity: 1 }}
                transition={{
                    duration: 1,
                    delay: reducedMotion ? 0 : 1.3,
                }}
                className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 text-[9px] uppercase tracking-[0.25em] text-silver/50 md:flex"
                aria-label="Scroll to introduction"
            >
                <span>Discover</span>

                <motion.span
                    animate={
                        reducedMotion
                            ? undefined
                            : { y: [0, 5, 0] }
                    }
                    transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <ArrowDown
                        className="h-4 w-4"
                        strokeWidth={1.2}
                    />
                </motion.span>
            </motion.a>
        </section >
    );
}