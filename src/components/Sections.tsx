"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";
import { Shield, TrendingUp, Users, Award, Play } from "lucide-react";
import { SpatialSection, SpotlightCard, ImageReveal } from "./Animations";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        // KEY FIX: set once to false
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
        {children}
    </motion.div>
);

export function Stats() {
    return (
        <section className="py-20 bg-secondary-dark border-y border-silver/10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-silver/10 text-center">
                {siteData.stats.map((stat, i) => (
                    <FadeIn key={i} delay={i * 0.1}>
                        <div className="flex flex-col space-y-2">
                            <span className="text-4xl md:text-5xl font-serif text-off-white">{stat.value}</span>
                            <span className="text-sm text-silver uppercase tracking-wider">{stat.label}</span>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}

export function About() {
    return (
        <section id="about" className="py-32 bg-midnight">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <FadeIn>
                    <div className="relative aspect-[3/4] md:aspect-square bg-navy border border-silver/10">
                        <img
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=800&auto=format&fit=crop"
                            alt="Client Meeting Placeholder"
                            className="object-cover w-full h-full opacity-80"
                        />
                    </div>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <span className="text-xs text-silver tracking-[0.2em] uppercase">{siteData.about.eyebrow}</span>
                    <h2 className="text-4xl md:text-5xl mt-4 mb-8 whitespace-pre-line">{siteData.about.headline}</h2>
                    <div className="space-y-6 text-silver leading-relaxed mb-8">
                        {siteData.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                    </div>
                    <ul className="space-y-3">
                        {siteData.about.highlights.map((h, i) => (
                            <li key={i} className="flex items-center text-sm text-off-white">
                                <span className="w-1.5 h-1.5 bg-silver mr-3 rounded-full" />
                                {h}
                            </li>
                        ))}
                    </ul>
                </FadeIn>
            </div>
        </section>
    );
}

export function Experience() {
    return (
        <section id="experience" className="py-32 bg-secondary-dark relative">
            <div className="max-w-3xl mx-auto px-6">
                <FadeIn>
                    <div className="text-center mb-20">
                        <span className="text-xs text-silver tracking-[0.2em] uppercase">The Journey</span>
                        <h2 className="text-4xl md:text-5xl mt-4">Years of Experience.<br />A Journey of Trust.</h2>
                    </div>
                </FadeIn>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-silver/20 before:to-transparent">
                    {siteData.experience.map((exp, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-silver/30 bg-midnight shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl z-10">
                                    <div className="w-2 h-2 bg-silver rounded-full" />
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-midnight border border-silver/5 rounded-sm">
                                    <span className="font-serif text-2xl text-off-white">{exp.year}</span>
                                    <h4 className="text-lg font-medium text-silver mt-2 mb-2">{exp.title}</h4>
                                    <p className="text-sm text-light-silver/70 leading-relaxed">{exp.description}</p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function Services() {
    const icons = [Shield, TrendingUp, Award, Users];
    return (
        <section id="services" className="py-32 bg-midnight overflow-hidden">
            <SpatialSection>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16">
                        <span className="text-xs text-silver tracking-[0.2em] uppercase">Expertise</span>
                        <h2 className="text-4xl md:text-5xl mt-4">Guidance for Every Stage of Life.</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {siteData.services.map((service, i) => {
                            const Icon = icons[i];
                            return (
                                <SpotlightCard key={i} className="p-8 border border-silver/20 bg-secondary-dark rounded-sm h-full group">
                                    <Icon className="w-8 h-8 text-silver mb-6 opacity-70 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                                    <h3 className="text-xl mb-3 text-off-white font-serif">{service.title}</h3>
                                    <p className="text-sm text-light-silver leading-relaxed">{service.description}</p>
                                </SpotlightCard>
                            );
                        })}
                    </div>
                </div>
            </SpatialSection>
        </section>
    );
}

export function Achievements() {
    return (
        <section className="py-24 bg-navy border-y border-silver/10">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                {siteData.achievements.map((achieve, i) => (
                    <FadeIn key={i} delay={i * 0.1}>
                        <div className="space-y-3">
                            <h4 className="text-lg font-medium text-off-white border-b border-silver/20 pb-3">{achieve.category}</h4>
                            <p className="text-sm text-silver leading-relaxed">{achieve.description}</p>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}

export function Gallery() {
    return (
        <section id="gallery" className="py-32 bg-midnight">
            <div className="max-w-7xl mx-auto px-6">
                <FadeIn>
                    <div className="text-center mb-16">
                        <span className="text-xs text-silver tracking-[0.2em] uppercase">Personal & Professional</span>
                        <h2 className="text-4xl md:text-5xl mt-4">Moments That Tell the Story.</h2>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FadeIn delay={0.1} className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-secondary-dark aspect-video md:aspect-auto">
                        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop" alt="Gallery Main" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" />
                    </FadeIn>
                    <FadeIn delay={0.2} className="relative group overflow-hidden bg-secondary-dark aspect-square">
                        <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop" alt="Gallery Image 2" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                    </FadeIn>
                    <FadeIn delay={0.3} className="relative group overflow-hidden bg-secondary-dark aspect-square flex items-center justify-center border border-silver/10">
                        {/* Video Placeholder */}
                        <div className="absolute inset-0">
                            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover opacity-40 mix-blend-overlay" alt="Video cover" />
                        </div>
                        <div className="relative z-10 w-16 h-16 rounded-full border border-off-white flex items-center justify-center bg-midnight/50 backdrop-blur-sm cursor-pointer hover:bg-midnight transition-colors">
                            <Play className="w-6 h-6 text-off-white ml-1" fill="currentColor" />
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

export function PaymentCTA() {
    return (
        <section className="py-24 bg-soft-blue/20 border-y border-silver/10">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <FadeIn>
                    <h2 className="text-3xl md:text-4xl mb-4">Stay Connected. Stay Protected.</h2>
                    <p className="text-silver mb-8 max-w-xl mx-auto">Access your LIC payment service safely and securely through the official LIC platform.</p>
                    <a href={siteData.contact.paymentLink} className="inline-block px-8 py-4 bg-off-white text-navy text-sm font-medium hover:bg-silver transition-colors rounded-sm">
                        Proceed to LIC Payment
                    </a>
                </FadeIn>
            </div>
        </section>
    );
}