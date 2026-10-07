"use client";

import { motion } from "framer-motion";
import {
    ArrowRight,
    MessageCircle,
    ShieldCheck,
    Star,
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
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: 0.65,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/* -------------------------------------------------------------------------- */
/* HOME — TRUST / ACHIEVEMENT HIGHLIGHTS                                     */
/* -------------------------------------------------------------------------- */

export function HomeStats() {
    return (
        <section
            aria-label="Professional highlights"
            className="border-y border-dark-blue/10 bg-white"
        >
            <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
                {siteData.stats.map((stat, index) => (
                    <FadeIn
                        key={`${stat.label}-${index}`}
                        delay={index * 0.07}
                        className="border-dark-blue/10 px-5 py-10 text-center md:border-r md:px-8 md:py-14 last:border-r-0"
                    >
                        <div className="font-serif text-3xl leading-none text-dark-blue md:text-4xl">
                            {stat.value}
                        </div>

                        <div className="mx-auto mt-3 max-w-[180px] text-[10px] uppercase tracking-[0.16em] text-dark-blue/55">
                            {stat.label}
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}

/* -------------------------------------------------------------------------- */
/* HOME — WHY CHOOSE / WHY CONNECT                                           */
/* -------------------------------------------------------------------------- */

export function WhyChoose() {
    return (
        <section className="bg-slate-50 py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
                <FadeIn>
                    <div className="max-w-3xl">
                        <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                            {siteData.whyChoose.eyebrow}
                        </span>

                        <h2 className="mt-4 font-serif text-4xl leading-[1.08] text-dark-blue md:text-5xl lg:text-6xl">
                            {siteData.whyChoose.title}
                        </h2>
                    </div>
                </FadeIn>

                <div className="mt-14 grid gap-px overflow-hidden border border-dark-blue/10 bg-dark-blue/10 md:grid-cols-2 lg:grid-cols-3">
                    {siteData.whyChoose.items.map((item, index) => (
                        <FadeIn
                            key={item.title}
                            delay={index * 0.06}
                            className="h-full bg-white"
                        >
                            <article className="group h-full p-7 transition-colors duration-300 hover:bg-[#eef5fb] md:p-8">
                                <div className="flex items-start justify-between gap-5">
                                    <span className="font-serif text-2xl text-yellow">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <ShieldCheck
                                        className="h-5 w-5 text-dark-blue/35 transition-colors duration-300 group-hover:text-[#0054a6]"
                                        strokeWidth={1.5}
                                    />
                                </div>

                                <h3 className="mt-8 font-serif text-xl text-dark-blue">
                                    {item.title}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-dark-blue/65">
                                    {item.description}
                                </p>
                            </article>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* -------------------------------------------------------------------------- */
/* HOME — OUR APPROACH                                                        */
/* -------------------------------------------------------------------------- */

export function HomeApproach() {
    return (
        <section className="bg-white py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
                <FadeIn>
                    <div className="max-w-3xl">
                        <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                            {siteData.approach.eyebrow}
                        </span>

                        <h2 className="mt-4 font-serif text-4xl leading-[1.08] text-dark-blue md:text-5xl lg:text-6xl">
                            {siteData.approach.title}
                        </h2>
                    </div>
                </FadeIn>

                <div className="mt-14 grid border border-dark-blue/10 md:grid-cols-3 lg:grid-cols-6">
                    {siteData.approach.steps.map((step, index) => (
                        <FadeIn
                            key={step.title}
                            delay={index * 0.06}
                            className="border-b border-dark-blue/10 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
                        >
                            <div className="h-full p-6 md:p-7">
                                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0054a6]">
                                    Step {String(index + 1).padStart(2, "0")}
                                </span>

                                <h3 className="mt-6 font-serif text-xl text-dark-blue">
                                    {step.title}
                                </h3>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.25}>
                    <div className="mt-10 border-l-2 border-yellow bg-[#eef5fb] px-6 py-5 md:px-8">
                        <p className="text-sm font-medium leading-7 text-dark-blue md:text-base">
                            {siteData.approach.closingLine}
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

/* -------------------------------------------------------------------------- */
/* HOME — POLICY & INVESTMENT REVIEW                                         */
/* -------------------------------------------------------------------------- */

export function PolicyReview() {
    return (
        <section className="bg-[#eef5fb] py-24 md:py-28">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
                    <FadeIn>
                        <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                            {siteData.policyReview.eyebrow}
                        </span>

                        <h2 className="mt-4 max-w-3xl font-serif text-3xl leading-[1.1] text-dark-blue md:text-4xl lg:text-5xl">
                            {siteData.policyReview.title}
                        </h2>

                        <p className="mt-6 max-w-3xl text-base leading-7 text-dark-blue/70">
                            {siteData.policyReview.description}
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.12}>
                        <a
                            href={siteData.policyReview.href}
                            className="group inline-flex min-h-14 items-center justify-center gap-3 bg-[#0054a6] px-7 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-dark-blue"
                        >
                            {siteData.policyReview.buttonLabel}

                            <ArrowRight
                                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                strokeWidth={1.6}
                            />
                        </a>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

/* -------------------------------------------------------------------------- */
/* HOME — ACHIEVEMENTS                                                        */
/* -------------------------------------------------------------------------- */

export function HomeAchievements() {
    return (
        <section className="bg-white py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
                <FadeIn>
                    <div className="text-center">
                        <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                            {siteData.achievementsIntro.eyebrow}
                        </span>

                        <h2 className="mt-4 font-serif text-4xl leading-[1.08] text-dark-blue md:text-5xl">
                            {siteData.achievementsIntro.title}
                        </h2>
                    </div>
                </FadeIn>

                <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {siteData.achievements.map((achievement, index) => (
                        <FadeIn
                            key={achievement.title}
                            delay={index * 0.07}
                        >
                            <article className="h-full border border-dark-blue/10 bg-white p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-yellow hover:shadow-[0_14px_35px_rgba(0,59,115,0.08)]">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center bg-[#fff5bf] text-xl">
                                    {achievement.icon}
                                </div>

                                <h3 className="mt-6 font-serif text-xl text-dark-blue">
                                    {achievement.title}
                                </h3>
                            </article>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* -------------------------------------------------------------------------- */
/* HOME — TESTIMONIALS                                                        */
/* -------------------------------------------------------------------------- */

export function HomeTestimonials() {
    if (siteData.testimonials.length === 0) {
        return null;
    }

    return (
        <section className="bg-slate-50 py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
                <FadeIn>
                    <div className="text-center">
                        <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                            CUSTOMER TESTIMONIALS
                        </span>

                        <h2 className="mt-4 font-serif text-4xl text-dark-blue md:text-5xl">
                            What Our Customers Say
                        </h2>
                    </div>
                </FadeIn>

                <div className="mt-14 grid gap-5 md:grid-cols-3">
                    {siteData.testimonials.map((testimonial, index) => (
                        <FadeIn
                            key={index}
                            delay={index * 0.08}
                        >
                            <article className="h-full border border-dark-blue/10 bg-white p-7 md:p-8">
                                <div className="flex gap-1 text-yellow">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            className="h-4 w-4 fill-current"
                                            strokeWidth={1.2}
                                        />
                                    ))}
                                </div>

                                <p className="mt-6 text-sm leading-7 text-dark-blue/70">
                                    {testimonial}
                                </p>
                            </article>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* -------------------------------------------------------------------------- */
/* HOME — FINAL CTA                                                           */
/* -------------------------------------------------------------------------- */

export function HomeFinalCTA() {
    return (
        <section className="bg-dark-blue py-24 md:py-28">
            <div className="mx-auto max-w-5xl px-6 text-center">
                <FadeIn>
                    {siteData.finalCta.eyebrow && (
                        <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                            {siteData.finalCta.eyebrow}
                        </span>
                    )}

                    <h2 className="font-serif text-4xl leading-[1.08] text-white md:text-5xl lg:text-6xl">
                        {siteData.finalCta.title}
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 md:text-lg">
                        {siteData.finalCta.description}
                    </p>

                    <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                        <a
                            href={siteData.finalCta.primaryCta.href}
                            className="group inline-flex min-h-14 items-center justify-center gap-3 bg-yellow px-7 text-xs font-semibold uppercase tracking-[0.12em] text-dark-blue transition-colors duration-300 hover:bg-white"
                        >
                            {siteData.finalCta.primaryCta.label}

                            <ArrowRight
                                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                strokeWidth={1.6}
                            />
                        </a>

                        <a
                            href={siteData.finalCta.secondaryCta.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-14 items-center justify-center gap-3 border border-white/25 px-7 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
                        >
                            <MessageCircle
                                className="h-4 w-4"
                                strokeWidth={1.6}
                            />

                            {siteData.finalCta.secondaryCta.label}
                        </a>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

/* -------------------------------------------------------------------------- */
/* HOME — HOME CONTENT                                                        */
/* -------------------------------------------------------------------------- */

export function HomeSections() {
    return (
        <>
            <HomeStats />
            <WhyChoose />
            <HomeApproach />
            <PolicyReview />
            <HomeAchievements />
            <HomeTestimonials />
            <HomeFinalCTA />
        </>
    );
}