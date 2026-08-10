"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";

/* 1. BESPOKE PRELOADER */
export function Preloader({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                return prev + 2; // Speed of the loader
            });
        }, 20);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {isLoading && (
                <motion.div
                    initial={{ y: 0 }} animate={{ y: "-100%" }} transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[99999] bg-midnight flex flex-col items-center justify-center pointer-events-none"
                >
                    <div className="font-serif text-5xl text-silver mb-4">{counter}%</div>
                    <div className="w-48 h-[1px] bg-secondary-dark relative overflow-hidden">
                        <motion.div className="absolute top-0 left-0 h-full bg-silver" style={{ width: `${counter}%` }} />
                    </div>
                </motion.div>
            )}
            {children}
        </>
    );
}

/* 2. MAGNETIC BUTTON */
export function MagneticButton({ children, href, className }: { children: React.ReactNode, href: string, className: string }) {
    const ref = useRef<HTMLAnchorElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
    };

    const reset = () => setPosition({ x: 0, y: 0 });

    const { x, y } = position;
    return (
        <motion.a
            href={href} ref={ref} onMouseMove={handleMouse} onMouseLeave={reset}
            animate={{ x, y }} transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={className}
        >
            {children}
        </motion.a>
    );
}

/* 3. SPOTLIGHT CARD (Dynamic Mouse Lighting) */
export function SpotlightCard({ children, className }: { children: React.ReactNode, className: string }) {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            ref={divRef} onMouseMove={handleMouseMove} onMouseEnter={() => setIsFocused(true)} onMouseLeave={() => setIsFocused(false)}
            className={`relative overflow-hidden ${className}`}
        >
            <motion.div
                animate={{ opacity: isFocused ? 1 : 0 }} transition={{ duration: 0.3 }}
                className="absolute inset-0 pointer-events-none"
                style={{ background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(198,168,124,0.08), transparent 40%)` }}
            />
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}

/* 4. EDITORIAL IMAGE REVEAL */
export function ImageReveal({ src, alt, className }: { src: string, alt: string, className: string }) {
    return (
        <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}
            className={`relative overflow-hidden ${className}`}
        >
            {/* The masking block that slides away */}
            <motion.div
                variants={{ hidden: { y: 0 }, visible: { y: "-100%" } }}
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0 bg-secondary-dark z-20"
            />
            {/* The image that scales down slightly */}
            <motion.img
                variants={{ hidden: { scale: 1.2 }, visible: { scale: 1 } }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                src={src} alt={alt} className="w-full h-full object-cover relative z-10"
            />
        </motion.div>
    );
}

/* 5. HELIX BACKGROUND & SPATIAL SECTION */
export function HelixBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.05]">
            <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <pattern id="helix" x="0" y="0" width="100" height="200" patternUnits="userSpaceOnUse">
                    <path d="M 50 0 C 100 50, 100 150, 50 200 C 0 250, 0 350, 50 400" fill="transparent" stroke="currentColor" strokeWidth="1" />
                    <path d="M 50 0 C 0 50, 0 150, 50 200 C 100 250, 100 350, 50 400" fill="transparent" stroke="currentColor" strokeWidth="1" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#helix)" className="text-silver" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-b from-midnight via-transparent to-midnight" />
        </div>
    );
}

export function SpatialSection({ children }: { children: React.ReactNode }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["0 1", "1 1"] });
    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

    return (
        <motion.div ref={ref} style={{ scale, opacity }} className="origin-bottom">
            {children}
        </motion.div>
    );
}