"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Award,
    BriefcaseBusiness,
    CheckCircle2,
    ChevronDown,
    GraduationCap,
    Handshake,
    Target,
} from "lucide-react";

import { siteData } from "@/lib/data";

function FadeIn({
    children,
    delay = 0,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
                duration: 0.7,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

const certifications = [
    "Diploma in Accounting and Taxation.",
    "Advance in Insurance and Finance.",
    "Combination Master",
    "Fundamentals of Life Insurance",
    "Retirement Solution",
] as const;

const missionPoints = [
    "🛡️ Helping clients protect themselves and their families through proper insurance planning.",
    "📈 Guiding clients towards suitable investment opportunities based on their goals and needs.",
    "🎯 Helping clients plan for important goals such as children’s education, retirement, and wealth creation.",
    "🤝 Building long-term relationships based on trust, honesty, and transparency.",
    "📚 Continuously improving our knowledge and service to provide better financial guidance.",
    "💡 Making financial planning simple, clear, and accessible for every client.",
] as const;

const biographyIntro = [
    "She is your trusted and guaranteed income planner.",
    "Life is beautiful, but it is also unpredictable. True financial Freedom isn’t just about earning well- Its is about Ensuring that the people you love are protected, no matter what tomorrow brings.",
    "For 13 Years She has helped thousands of families. Turn financial anxiety into absolute peace of mind. Backed by the rock-solid trust and sovereign guarantee of the Life Insurance Corporation of India (LIC), She designed smart personalizes saving and protection plans that adopt to your budget and match your biggest dreams.",
    "Operating from pune (The Heart of Maharashtra), with a clientele spread across the country and abroad, we cater to a wide spectrum of investors—from individual clients to High Net Worth Individuals (HNIs)—by offering personalized investment solutions tailored to their unique needs.",
] as const;

const biographyContinuation = [
    "What makes us different is our personalized and complete financial solutions. We carefully understand your portfolio and focus on safety, returns, liquidity, and tax benefits.",
    "Our goal is to help you make better financial decisions and build a secure and prosperous future. With simple processes, teamwork, and proper execution, we have helped many clients move closer to their financial goals and freedom.",
    "Our doorstep services, regular portfolio reviews, and personal touch ensure that your financial journey remains smooth and rewarding. And when the time comes, our unwavering commitment extends to the most important stage—claim settlement, where we ensure care, efficiency, and trust.",
] as const;

export default function AboutPage() {
    const [showMore, setShowMore] = useState(false);

    return (
        <main className="bg-white">
            {/* ------------------------------------------------------------------ */}
            {/* PROFILE                                                            */}
            {/* ------------------------------------------------------------------ */}

            <section className="relative overflow-hidden bg-[#eef5fb]">
                <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-white/70 blur-3xl" />

                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#003b73 1px, transparent 1px), linear-gradient(90deg, #003b73 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                    }}
                />

                <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-[0.7fr_1.3fr] md:gap-20 md:py-28">
                    <FadeIn>
                        <div className="relative mx-auto max-w-sm">
                            <div className="absolute -inset-3 border border-dark-blue/10" />

                            <div className="relative aspect-[4/5] overflow-hidden bg-white">
                                <img
                                    src={siteData.about.image}
                                    alt={siteData.about.imageAlt}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="absolute -bottom-5 -right-5 h-24 w-24 border-b-2 border-r-2 border-yellow md:h-28 md:w-28" />
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                            ABOUT PAGE
                        </span>

                        <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[1.02] tracking-[-0.02em] text-dark-blue md:text-6xl lg:text-7xl">
                            About Mrs. Darshanee P Lokhande
                        </h1>

                        <div className="mt-7 h-px w-20 bg-yellow" />

                        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.14em] text-dark-blue/60">
                            <span>Guaranteed Income Planer</span>
                            <span>13 Years</span>
                            <span>Started 2013</span>
                            <span>India and PCMC</span>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ------------------------------------------------------------------ */}
            {/* BIOGRAPHY                                                          */}
            {/* ------------------------------------------------------------------ */}

            <section className="bg-white py-24 md:py-32">
                <div className="mx-auto max-w-5xl px-6">
                    <FadeIn delay={0.1}>
                        <div className="mx-auto max-w-4xl text-center">
                            <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                                2. BIOGRAPHY
                            </span>

                            <h2 className="mt-5 font-serif text-3xl leading-[1.1] text-dark-blue md:text-4xl">
                                About Mrs. Darshanee P Lokhande – CEO Sindhudeep Consultancy
                            </h2>

                            <div className="mt-8 space-y-6 text-center text-[15px] leading-8 text-dark-blue/70 md:text-base">
                                {biographyIntro.map((paragraph, index) => (
                                    <p
                                        key={`${index}-${paragraph.slice(0, 24)}`}
                                        className={
                                            index === 0
                                                ? "font-medium text-dark-blue"
                                                : ""
                                        }
                                    >
                                        {paragraph}
                                    </p>
                                ))}

                                <button
                                    type="button"
                                    onClick={() => setShowMore((value) => !value)}
                                    className="group inline-flex items-center gap-2 border-b border-yellow pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-dark-blue transition-colors hover:text-[#0054a6]"
                                >
                                    {showMore ? "Read Less" : "Read More"}

                                    <ChevronDown
                                        className={`h-4 w-4 transition-transform duration-300 ${showMore ? "rotate-180" : ""
                                            }`}
                                        strokeWidth={1.6}
                                    />
                                </button>

                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: showMore ? "auto" : 0,
                                        opacity: showMore ? 1 : 0,
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="overflow-hidden"
                                >
                                    <div className="space-y-6 pt-2">
                                        {biographyContinuation.map((paragraph) => (
                                            <p key={paragraph}>{paragraph}</p>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ------------------------------------------------------------------ */}
            {/* PROFESSIONAL CERTIFICATION                                         */}
            {/* ------------------------------------------------------------------ */}

            <section className="bg-slate-50 py-24 md:py-28">
                <div className="mx-auto max-w-7xl px-6">
                    <FadeIn>
                        <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                            PROFESSIONAL CERTIFICATION
                        </span>

                        <h2 className="mt-4 font-serif text-4xl leading-[1.08] text-dark-blue md:text-5xl">
                            Professional Certification
                        </h2>
                    </FadeIn>

                    <div className="mt-12 grid gap-px overflow-hidden border border-dark-blue/10 bg-dark-blue/10 md:grid-cols-2 lg:grid-cols-5">
                        {certifications.map((item, index) => (
                            <FadeIn
                                key={item}
                                delay={index * 0.06}
                                className="h-full bg-white"
                            >
                                <article className="h-full p-7 md:p-8">
                                    <GraduationCap
                                        className="h-6 w-6 text-[#0054a6]"
                                        strokeWidth={1.4}
                                    />

                                    <span className="mt-7 block text-[10px] uppercase tracking-[0.16em] text-dark-blue/40">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <h3 className="mt-3 font-serif text-lg leading-6 text-dark-blue">
                                        {item}
                                    </h3>
                                </article>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ------------------------------------------------------------------ */}
            {/* PROFESSIONAL JOURNEY                                               */}
            {/* ------------------------------------------------------------------ */}

            <section className="bg-white py-24 md:py-32">
                <div className="mx-auto max-w-7xl px-6">
                    <FadeIn>
                        <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                            PROFESSIONAL JOURNEY
                        </span>

                        <h2 className="mt-4 font-serif text-4xl leading-[1.08] text-dark-blue md:text-5xl">
                            Professional Journey
                        </h2>
                    </FadeIn>

                    <div className="mt-14 grid gap-6 lg:grid-cols-2">
                        {/* MDRT */}
                        <FadeIn>
                            <article className="h-full border border-dark-blue/10 bg-[#eef5fb] p-8 md:p-10">
                                <div className="flex items-start justify-between gap-6">
                                    <div>
                                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#0054a6]">
                                            MDRT for Production Year 2024-
                                        </span>

                                        <h3 className="mt-4 font-serif text-3xl text-dark-blue">
                                            MDRT Achievement – 2024
                                        </h3>
                                    </div>

                                    <Award
                                        className="h-8 w-8 shrink-0 text-yellow"
                                        strokeWidth={1.4}
                                    />
                                </div>

                                <div className="mt-7 space-y-5 text-sm leading-7 text-dark-blue/70 md:text-base">
                                    <p>
                                        Achieving MDRT (Million Dollar Round Table)
                                        qualification in 2024 was an important milestone
                                        in our professional journey.
                                    </p>

                                    <p>
                                        This achievement reflects our commitment to
                                        professional excellence, ethical service, and
                                        putting clients’ financial needs first. MDRT is a
                                        globally recognized standard in the financial
                                        services profession, and qualifying for it
                                        represents dedication to serving clients with
                                        knowledge, discipline, and professionalism.
                                    </p>

                                    <p>
                                        For us, this achievement is not just a
                                        recognition—it is a responsibility to continue
                                        providing honest guidance, personalized financial
                                        solutions, and long-term support to every client.
                                    </p>

                                    <p>
                                        We remain committed to helping individuals and
                                        families plan better, protect their financial
                                        future, and work towards their financial goals.
                                    </p>
                                </div>
                            </article>
                        </FadeIn>

                        {/* BM CLUB */}
                        <FadeIn delay={0.1}>
                            <article className="h-full border border-dark-blue/10 bg-white p-8 md:p-10">
                                <div className="flex items-start justify-between gap-6">
                                    <div>
                                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#0054a6]">
                                            PROFESSIONAL JOURNEY
                                        </span>

                                        <h3 className="mt-4 font-serif text-3xl text-dark-blue">
                                            BM Club Member
                                        </h3>
                                    </div>

                                    <BriefcaseBusiness
                                        className="h-8 w-8 shrink-0 text-yellow"
                                        strokeWidth={1.4}
                                    />
                                </div>

                                <div className="mt-7 space-y-5 text-sm leading-7 text-dark-blue/70 md:text-base">
                                    <p>
                                        Being a BM Club Member is another important
                                        milestone in our professional journey. This
                                        recognition reflects our consistent performance,
                                        dedication, and commitment to providing quality
                                        financial services to our clients.
                                    </p>

                                    <p>
                                        It motivates us to continuously improve our
                                        knowledge, service standards, and client
                                        experience. We believe that every client has
                                        different financial goals, and our role is to
                                        understand their needs and provide simple,
                                        suitable, and personalized financial solutions.
                                    </p>

                                    <p>
                                        Our membership in the BM Club inspires us to
                                        maintain high standards of professionalism and
                                        continue building long-term relationships based
                                        on trust and service.
                                    </p>
                                </div>
                            </article>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ------------------------------------------------------------------ */}
            {/* VISION                                                             */}
            {/* ------------------------------------------------------------------ */}

            <section className="bg-dark-blue py-24 md:py-28">
                <div className="mx-auto max-w-5xl px-6 text-center">
                    <FadeIn>
                        <Target
                            className="mx-auto h-9 w-9 text-yellow"
                            strokeWidth={1.3}
                        />

                        <span className="mt-7 block text-[11px] uppercase tracking-[0.24em] text-yellow">
                            OUR VISION
                        </span>

                        <h2 className="mt-4 font-serif text-4xl text-white md:text-5xl">
                            Our Vision
                        </h2>

                        <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/70 md:text-lg">
                            To become a trusted financial partner for individuals and
                            families by helping them make informed financial decisions,
                            protect their future, and achieve their long-term financial
                            goals.
                        </p>

                        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/70 md:text-lg">
                            We aim to build lasting relationships with our clients through
                            trust, transparency, personalized advice, and professional
                            service.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* ------------------------------------------------------------------ */}
            {/* MISSION                                                            */}
            {/* ------------------------------------------------------------------ */}

            <section className="bg-white py-24 md:py-32">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
                        <FadeIn>
                            <div>
                                <Handshake
                                    className="h-9 w-9 text-[#0054a6]"
                                    strokeWidth={1.3}
                                />

                                <span className="mt-7 block text-[11px] uppercase tracking-[0.24em] text-yellow">
                                    OUR MISSION
                                </span>

                                <h2 className="mt-4 font-serif text-4xl text-dark-blue md:text-5xl">
                                    Our Mission
                                </h2>

                                <p className="mt-6 text-base leading-8 text-dark-blue/70">
                                    Our mission is to understand each client’s unique
                                    financial needs and provide simple, personalized, and
                                    practical financial solutions.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="border border-dark-blue/10">
                                {missionPoints.map((point) => (
                                    <div
                                        key={point}
                                        className="flex gap-5 border-b border-dark-blue/10 p-6 last:border-b-0 md:p-7"
                                    >
                                        <CheckCircle2
                                            className="mt-0.5 h-5 w-5 shrink-0 text-[#0054a6]"
                                            strokeWidth={1.5}
                                        />

                                        <p className="text-sm leading-7 text-dark-blue/70 md:text-base">
                                            {point}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ------------------------------------------------------------------ */}
            {/* MESSAGE                                                            */}
            {/* ------------------------------------------------------------------ */}

            <section className="bg-[#eef5fb] py-24 md:py-32">
                <div className="mx-auto max-w-5xl px-6">
                    <FadeIn>
                        <div className="border-l-2 border-yellow pl-6 md:pl-10">
                            <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                                A MESSAGE FROM THE DARSHANEE
                            </span>

                            <h2 className="mt-4 font-serif text-4xl leading-[1.08] text-dark-blue md:text-5xl">
                                A Message from the Darshanee
                            </h2>

                            <div className="mt-9 space-y-6 text-base leading-8 text-dark-blue/70 md:text-lg">
                                <p>Dear Clients and Well-Wishers,</p>

                                <p>
                                    Thank you for trusting us and giving us the opportunity
                                    to be a part of your financial journey.
                                </p>

                                <p>
                                    I believe that financial planning is not just about
                                    choosing an investment or buying an insurance policy.
                                    It is about protecting your family, planning for your
                                    dreams, and building a financially secure future.
                                </p>

                                <p>
                                    Every individual and family has different needs and
                                    goals. Our approach is therefore to first understand
                                    your financial situation, priorities, and aspirations,
                                    and then provide simple, transparent, and personalized
                                    solutions.
                                </p>

                                <p>
                                    Our journey has been built on trust, honesty,
                                    professional knowledge, and long-term relationships.
                                    Achievements such as MDRT 2024 qualification and BM
                                    Club membership motivate us to continuously improve
                                    and serve our clients better.
                                </p>

                                <p>
                                    Whether you are already our client or are considering
                                    working with us for the first time, we look forward
                                    to being your trusted financial partner and supporting
                                    you at every stage of your financial journey.
                                </p>

                                <p>Thank you for your trust and support.</p>

                                <div className="pt-2 font-serif text-xl text-dark-blue">
                                    Warm Regards,
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ------------------------------------------------------------------ */}
            {/* AWARD PHOTOS                                                       */}
            {/* ------------------------------------------------------------------ */}

            <section className="bg-white py-24 md:py-28">
                <div className="mx-auto max-w-7xl px-6">
                    <FadeIn>
                        <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                            AWARD PHOTOS
                        </span>

                        <h2 className="mt-4 font-serif text-4xl leading-[1.08] text-dark-blue md:text-5xl">
                            Award Photos…
                        </h2>

                        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    src: "https://res.cloudinary.com/djblsvzgm/image/upload/mdrt-trophy-moment.jpg_aa268q",
                                    alt: "MDRT Trophy Moment",
                                },
                                {
                                    src: "https://res.cloudinary.com/djblsvzgm/image/upload/mdrt-2024-trophy.jpg_ysowo5",
                                    alt: "MDRT 2024 Trophy",
                                },
                                {
                                    src: "https://res.cloudinary.com/djblsvzgm/image/upload/mdrt-pune-stage.jpg_hblmtb",
                                    alt: "MDRT Pune Stage",
                                },
                            ].map((image) => (
                                <div
                                    key={image.src}
                                    className="overflow-hidden border border-dark-blue/10 bg-[#eef5fb]"
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="h-[280px] w-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}