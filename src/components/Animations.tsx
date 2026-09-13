"use client";

import {
    motion,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
    type UseScrollOptions,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const EASE_EDITORIAL = [0.76, 0, 0.24, 1] as const;

/* -------------------------------------------------------------------------- */
/* 1. PRELOADER                                                               */
/* -------------------------------------------------------------------------- */

export function Preloader({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isLoading, setIsLoading] = useState(true);
    const [counter, setCounter] = useState(0);
    const reducedMotion = useReducedMotion();

    useEffect(() => {
        let finishTimeout: ReturnType<typeof setTimeout> | undefined;

        const interval = setInterval(() => {
            setCounter((previous) => {
                if (previous >= 100) {
                    clearInterval(interval);

                    finishTimeout = setTimeout(
                        () => {
                            setIsLoading(false);
                        },
                        reducedMotion ? 0 : 350,
                    );

                    return 100;
                }

                return Math.min(previous + 4, 100);
            });
        }, reducedMotion ? 0 : 18);

        return () => {
            clearInterval(interval);

            if (finishTimeout) {
                clearTimeout(finishTimeout);
            }
        };
    }, [reducedMotion]);

    return (
        <>
            {isLoading && (
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: "-100%" }}
                    transition={{
                        duration: reducedMotion ? 0 : 0.9,
                        delay: reducedMotion ? 0 : 0.25,
                        ease: EASE_EDITORIAL,
                    }}
                    className="pointer-events-none fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-midnight"
                    aria-hidden="true"
                >
                    <div className="mb-5 font-serif text-4xl text-silver md:text-5xl">
                        {counter}%
                    </div>

                    <div className="relative h-px w-40 overflow-hidden bg-secondary-dark md:w-48">
                        <motion.div
                            className="absolute inset-y-0 left-0 bg-silver"
                            animate={{ width: `${counter}%` }}
                            transition={{ duration: 0.1, ease: "linear" }}
                        />
                    </div>
                </motion.div>
            )}

            {children}
        </>
    );
}

/* -------------------------------------------------------------------------- */
/* 2. MAGNETIC BUTTON                                                         */
/* -------------------------------------------------------------------------- */

type MagneticButtonProps = {
    children: React.ReactNode;
    href: string;
    className?: string;
};

export function MagneticButton({
    children,
    href,
    className = "",
}: MagneticButtonProps) {
    const ref = useRef<HTMLAnchorElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const reducedMotion = useReducedMotion();

    const handleMouseMove = (
        event: React.MouseEvent<HTMLAnchorElement>,
    ) => {
        if (reducedMotion || !ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const x = event.clientX - (rect.left + rect.width / 2);
        const y = event.clientY - (rect.top + rect.height / 2);

        setPosition({
            x: x * 0.18,
            y: y * 0.18,
        });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.a
            ref={ref}
            href={href}
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            animate={reducedMotion ? undefined : position}
            transition={{
                type: "spring",
                stiffness: 180,
                damping: 18,
                mass: 0.25,
            }}
            className={className}
        >
            {children}
        </motion.a>
    );
}

/* -------------------------------------------------------------------------- */
/* 3. FADE / REVEAL                                                           */
/* -------------------------------------------------------------------------- */

type FadeInProps = {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    amount?: number;
    distance?: number;
    duration?: number;
};

export function FadeIn({
    children,
    delay = 0,
    className = "",
    amount = 0.18,
    distance = 24,
    duration = 0.7,
}: FadeInProps) {
    const reducedMotion = useReducedMotion();

    return (
        <motion.div
            initial={
                reducedMotion
                    ? { opacity: 1 }
                    : { opacity: 0, y: distance }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
                once: false,
                amount,
            }}
            transition={{
                duration: reducedMotion ? 0 : duration,
                delay: reducedMotion ? 0 : delay,
                ease: EASE_OUT,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/* -------------------------------------------------------------------------- */
/* 4. SPOTLIGHT CARD                                                          */
/* -------------------------------------------------------------------------- */

type SpotlightCardProps = {
    children: React.ReactNode;
    className?: string;
};

export function SpotlightCard({
    children,
    className = "",
}: SpotlightCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    const reducedMotion = useReducedMotion();

    const handleMouseMove = (
        event: React.MouseEvent<HTMLDivElement>,
    ) => {
        if (reducedMotion || !cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();

        setPosition({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        });
    };

    return (
        <motion.div
            ref={cardRef}
            initial={
                reducedMotion
                    ? { opacity: 1 }
                    : { opacity: 0, y: 28 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
                once: false,
                amount: 0.18,
            }}
            transition={{
                duration: 0.7,
                ease: EASE_OUT,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsFocused(true)}
            onMouseLeave={() => {
                setIsFocused(false);
                setPosition({ x: 0, y: 0 });
            }}
            className={`relative overflow-hidden ${className}`}
        >
            {!reducedMotion && (
                <motion.div
                    animate={{
                        opacity: isFocused ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background: `radial-gradient(
              500px circle at ${position.x}px ${position.y}px,
              rgba(198, 168, 124, 0.08),
              transparent 42%
            )`,
                    }}
                />
            )}

            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
}

/* -------------------------------------------------------------------------- */
/* 5. EDITORIAL IMAGE REVEAL                                                  */
/* -------------------------------------------------------------------------- */

type ImageRevealProps = {
    src: string;
    alt: string;
    className?: string;
    parallax?: boolean;
    parallaxAmount?: number;
};

export function ImageReveal({
    src,
    alt,
    className = "",
    parallax = false,
    parallaxAmount = 12,
}: ImageRevealProps) {
    const reducedMotion = useReducedMotion();

    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const rawY = useTransform(
        scrollYProgress,
        [0, 1],
        reducedMotion || !parallax
            ? [0, 0]
            : [parallaxAmount, -parallaxAmount],
    );

    const y = useSpring(rawY, {
        stiffness: 100,
        damping: 30,
        mass: 0.25,
    });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: false,
                amount: 0.25,
            }}
            className={`relative overflow-hidden ${className}`}
        >
            {!reducedMotion && (
                <motion.div
                    variants={{
                        hidden: { y: "0%" },
                        visible: { y: "-100%" },
                    }}
                    transition={{
                        duration: 1,
                        ease: EASE_EDITORIAL,
                    }}
                    className="absolute inset-0 z-20 bg-secondary-dark"
                />
            )}

            <motion.img
                src={src}
                alt={alt}
                variants={{
                    hidden: {
                        scale: reducedMotion ? 1 : 1.08,
                    },
                    visible: {
                        scale: 1,
                    },
                }}
                transition={{
                    duration: 1.4,
                    ease: EASE_OUT,
                }}
                style={{ y }}
                className="relative z-10 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
            />
        </motion.div>
    );
}

/* -------------------------------------------------------------------------- */
/* 6. PARALLAX ELEMENT                                                        */
/* -------------------------------------------------------------------------- */

type ParallaxProps = {
    children: React.ReactNode;
    className?: string;
    distance?: number;
    offset?: NonNullable<UseScrollOptions["offset"]>;
};

export function Parallax({
    children,
    className = "",
    distance = 30,
    offset = ["start end", "end start"],
}: ParallaxProps) {
    const ref = useRef<HTMLDivElement>(null);
    const reducedMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset,
    });

    const rawY = useTransform(
        scrollYProgress,
        [0, 1],
        reducedMotion ? [0, 0] : [distance, -distance],
    );

    const y = useSpring(rawY, {
        stiffness: 90,
        damping: 28,
        mass: 0.25,
    });

    return (
        <motion.div
            ref={ref}
            style={{ y }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/* -------------------------------------------------------------------------- */
/* 7. SUBTLE DEPTH                                                           */
/* -------------------------------------------------------------------------- */

type DepthProps = {
    children: React.ReactNode;
    className?: string;
    amount?: number;
};

export function Depth({
    children,
    className = "",
    amount = 0.025,
}: DepthProps) {
    const ref = useRef<HTMLDivElement>(null);
    const reducedMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0.95 1", "0.15 1"],
    });

    const scale = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        reducedMotion
            ? [1, 1, 1]
            : [1 - amount, 1 - amount / 3, 1],
    );

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.25, 0.75, 1],
        reducedMotion
            ? [1, 1, 1, 1]
            : [0.78, 0.95, 1, 1],
    );

    return (
        <motion.div
            ref={ref}
            style={{
                scale,
                opacity,
            }}
            className={`origin-center ${className}`}
        >
            {children}
        </motion.div>
    );
}

/* -------------------------------------------------------------------------- */
/* 8. TEXT REVEAL                                                             */
/* -------------------------------------------------------------------------- */

type TextRevealProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    amount?: number;
};

export function TextReveal({
    children,
    className = "",
    delay = 0,
    amount = 0.2,
}: TextRevealProps) {
    const reducedMotion = useReducedMotion();

    return (
        <motion.div
            initial={
                reducedMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 32 }
            }
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: false,
                amount,
            }}
            transition={{
                duration: reducedMotion ? 0 : 0.9,
                delay: reducedMotion ? 0 : delay,
                ease: EASE_EDITORIAL,
            }}
            className={`overflow-hidden ${className}`}
        >
            {children}
        </motion.div>
    );
}

/* -------------------------------------------------------------------------- */
/* 9. EDITORIAL LINE                                                          */
/* -------------------------------------------------------------------------- */

type EditorialLineProps = {
    className?: string;
    delay?: number;
};

export function EditorialLine({
    className = "",
    delay = 0,
}: EditorialLineProps) {
    const reducedMotion = useReducedMotion();

    return (
        <motion.div
            initial={{
                scaleX: reducedMotion ? 1 : 0,
            }}
            whileInView={{
                scaleX: 1,
            }}
            viewport={{
                once: false,
                amount: 0.5,
            }}
            transition={{
                duration: reducedMotion ? 0 : 0.9,
                delay: reducedMotion ? 0 : delay,
                ease: EASE_EDITORIAL,
            }}
            style={{
                transformOrigin: "left center",
            }}
            className={`h-px w-full bg-silver/20 ${className}`}
            aria-hidden="true"
        />
    );
}

/* -------------------------------------------------------------------------- */
/* 10. HOVER LIFT                                                             */
/* -------------------------------------------------------------------------- */

type HoverLiftProps = {
    children: React.ReactNode;
    className?: string;
    amount?: number;
};

export function HoverLift({
    children,
    className = "",
    amount = 4,
}: HoverLiftProps) {
    const reducedMotion = useReducedMotion();

    return (
        <motion.div
            whileHover={
                reducedMotion
                    ? undefined
                    : {
                        y: -amount,
                    }
            }
            transition={{
                duration: 0.35,
                ease: EASE_OUT,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/* -------------------------------------------------------------------------- */
/* 11. HELIX / ABSTRACT BACKGROUND                                            */
/* -------------------------------------------------------------------------- */

export function HelixBackground() {
    return (
        <div
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-[0.035]"
            aria-hidden="true"
        >
            <svg
                className="absolute h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <defs>
                    <pattern
                        id="premium-helix"
                        x="0"
                        y="0"
                        width="120"
                        height="240"
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                            d="M60 0 C120 60 120 180 60 240 C0 300 0 420 60 480"
                            fill="transparent"
                            stroke="currentColor"
                            strokeWidth="1"
                        />

                        <path
                            d="M60 0 C0 60 0 180 60 240 C120 300 120 420 60 480"
                            fill="transparent"
                            stroke="currentColor"
                            strokeWidth="1"
                        />
                    </pattern>
                </defs>

                <rect
                    width="100%"
                    height="100%"
                    fill="url(#premium-helix)"
                    className="text-silver"
                />
            </svg>

            <div className="absolute inset-0 bg-gradient-to-b from-midnight via-transparent to-midnight" />
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/* 12. SPATIAL SECTION                                                        */
/* -------------------------------------------------------------------------- */

export function SpatialSection({
    children,
}: {
    children: React.ReactNode;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const reducedMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0.9 1", "0.15 1"],
    });

    const scale = useTransform(
        scrollYProgress,
        [0, 0.7, 1],
        reducedMotion ? [1, 1, 1] : [0.985, 0.995, 1],
    );

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.35, 0.8],
        reducedMotion ? [1, 1, 1] : [0.6, 0.92, 1],
    );

    return (
        <motion.div
            ref={ref}
            style={{
                scale,
                opacity,
            }}
            className="origin-center"
        >
            {children}
        </motion.div>
    );
}

/* -------------------------------------------------------------------------- */
/* 13. SECTION CHAPTER REVEAL                                                 */
/* -------------------------------------------------------------------------- */

type ChapterRevealProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
};

export function ChapterReveal({
    children,
    className = "",
    delay = 0,
}: ChapterRevealProps) {
    const reducedMotion = useReducedMotion();

    return (
        <motion.div
            initial={
                reducedMotion
                    ? { opacity: 1 }
                    : { opacity: 0, y: 18 }
            }
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: false,
                amount: 0.12,
            }}
            transition={{
                duration: reducedMotion ? 0 : 0.8,
                delay: reducedMotion ? 0 : delay,
                ease: EASE_OUT,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/* -------------------------------------------------------------------------- */
/* 14. SCROLL PROGRESS                                                        */
/* -------------------------------------------------------------------------- */

export function ScrollProgress({
    className = "",
}: {
    className?: string;
}) {
    const reducedMotion = useReducedMotion();

    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            style={{
                scaleX: reducedMotion ? 1 : scrollYProgress,
            }}
            className={`fixed left-0 right-0 top-0 z-[100] h-px origin-left bg-silver ${className}`}
            aria-hidden="true"
        />
    );
}