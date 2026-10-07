"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    ChevronDown,
    HeartPulse,
    ShieldCheck,
    Umbrella,
} from "lucide-react";

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

const categories = [
    {
        title: "Life Insurance",
        cta: "Explore Life Insurance",
        href: "/life-insurance",
        icon: ShieldCheck,
    },
    {
        title: "Health Insurance",
        cta: "Get Health Quote",
        href: "/health-insurance",
        icon: HeartPulse,
    },
    {
        title: "General Insurance",
        cta: "Explore General Insurance",
        href: "/general-insurance",
        icon: Umbrella,
    },
] as const;

const lifeCategories = [
    { title: "Term Insurance", description: "Life cover designed primarily to provide financial protection to your family in the event of the policyholder’s death during the policy term." },
    { title: "Retirement Planning", description: "Planning focused on building financial security for your retirement years and creating a structured approach towards your future needs." },
    { title: "Child Education Planning", description: "Financial planning aimed at building funds for important future education expenses and supporting your child’s educational goals." },
    { title: "Savings / Endowment", description: "Insurance-based savings solutions that combine life protection with a structured long-term savings approach." },
    { title: "Money-back / Income-oriented", description: "Solutions designed around planned benefits or income-oriented needs over the policy period, depending on the selected plan." },
    { title: "ULIP / Market-linked", description: "Insurance solutions that combine life protection with investment exposure linked to market-based funds, subject to the terms of the selected plan." },
    { title: "Other verified categories", description: "Other life insurance categories can be discussed based on your specific requirement and the currently available solutions." },
] as const;

const healthCategories = [
    { title: "Individual", description: "Health insurance designed to provide medical expense protection for an individual, subject to the policy terms and coverage selected." },
    { title: "Family Floater", description: "Health insurance structured to provide coverage for eligible family members under a shared sum insured, subject to the policy terms." },
    { title: "Senior Citizen", description: "Health insurance options designed for senior citizens, with coverage depending on the selected policy and applicable terms." },
    { title: "Critical Illness", description: "Coverage focused on specified critical illnesses, with benefits payable according to the conditions and terms of the selected policy." },
    { title: "Top-up / Super Top-up", description: "Additional health protection that can provide coverage above a specified deductible, depending on the selected plan and policy terms." },
] as const;

const generalCategories = [
    { title: "Car", description: "Motor insurance solutions for cars, with available coverage depending on the type of policy and protection selected." },
    { title: "Two-Wheeler", description: "Insurance solutions for two-wheelers, with coverage based on the selected policy and applicable terms." },
    { title: "Commercial Vehicle", description: "Insurance solutions for vehicles used for commercial purposes, based on the vehicle and protection required." },
    { title: "Fire", description: "Insurance protection for eligible property and assets against specified fire-related risks, subject to policy terms." },
    { title: "WC", description: "Workers’ Compensation insurance solutions for applicable employee-related risks, based on the selected coverage and policy terms." },
    { title: "Shop / Business", description: "Insurance solutions for shops and businesses covering applicable risks based on the nature of the business and selected protection." },
    { title: "Property", description: "Insurance solutions for eligible property-related risks, with coverage depending on the selected policy and applicable terms." },
] as const;

function CategoryList({
    items,
    dark = false,
}: {
    items: readonly { title: string; description: string }[];
    dark?: boolean;
}) {
    const [openItem, setOpenItem] = useState<string | null>(null);

    return (
        <div className="mt-8 space-y-3">
            {items.map((item, index) => {
                const isOpen = openItem === item.title;

                return (
                    <div
                        key={item.title}
                        className={
                            dark
                                ? "overflow-hidden border border-white/15 bg-white/[0.04]"
                                : "overflow-hidden border border-dark-blue/10 bg-white"
                        }
                    >
                        <button
                            type="button"
                            onClick={() =>
                                setOpenItem(isOpen ? null : item.title)
                            }
                            aria-expanded={isOpen}
                            className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left transition-colors duration-300 hover:bg-[#eef5fb] md:px-6"
                        >
                            <div className="flex items-center gap-5">
                                <span
                                    className={
                                        dark
                                            ? "text-[10px] uppercase tracking-[0.16em] text-yellow"
                                            : "text-[10px] uppercase tracking-[0.16em] text-[#0054a6]"
                                    }
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <span
                                    className={
                                        dark
                                            ? "font-serif text-lg text-white md:text-xl"
                                            : "font-serif text-lg text-dark-blue md:text-xl"
                                    }
                                >
                                    {item.title}
                                </span>
                            </div>

                            <ChevronDown
                                className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                    } ${dark
                                        ? "text-yellow"
                                        : "text-[#0054a6]"
                                    }`}
                                strokeWidth={1.5}
                            />
                        </button>

                        <motion.div
                            initial={false}
                            animate={{
                                height: isOpen ? "auto" : 0,
                                opacity: isOpen ? 1 : 0,
                            }}
                            transition={{
                                duration: 0.3,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="overflow-hidden"
                        >
                            <div
                                className={
                                    dark
                                        ? "border-t border-white/10 px-5 py-5 md:px-6"
                                        : "border-t border-dark-blue/10 bg-[#eef5fb] px-5 py-5 md:px-6"
                                }
                            >
                                <p
                                    className={
                                        dark
                                            ? "text-sm leading-7 text-white/50"
                                            : "text-sm leading-7 text-dark-blue/50"
                                    }
                                >
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                );
            })}
        </div>
    );
}

function InfoAccordion({
    index,
    title,
    description,
}: {
    index: number;
    title: string;
    description: string;
}) {
    const [open, setOpen] = useState(false);

    return (
        <FadeIn delay={index * 0.07}>
            <div className="overflow-hidden border border-dark-blue/10 bg-white">
                <button
                    type="button"
                    onClick={() => setOpen((value) => !value)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left transition-colors duration-300 md:px-6"
                >
                    <div className="flex items-center gap-5">
                        <span className="text-[10px] uppercase tracking-[0.16em] text-[#0054a6]">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-serif text-lg text-dark-blue md:text-xl">
                            {title}
                        </span>
                    </div>

                    <ChevronDown
                        className={`h-5 w-5 shrink-0 text-[#0054a6] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                        strokeWidth={1.5}
                    />
                </button>

                <motion.div
                    initial={false}
                    animate={{
                        height: open ? "auto" : 0,
                        opacity: open ? 1 : 0,
                    }}
                    transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="overflow-hidden"
                >
                    <div className="border-t border-dark-blue/10 bg-[#eef5fb] px-5 py-5 md:px-6">
                        <p className="text-sm leading-7 text-dark-blue/70">
                            {description}
                        </p>
                    </div>
                </motion.div>
            </div>
        </FadeIn>
    );
}

export default function InsurancePage() {
    return (
        <main className="bg-white">
            {/* ------------------------------------------------------------------ */}
            {/* PAGE INTRO                                                          */}
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

                <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
                    <FadeIn>
                        <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                            INSURANCE PAGE — MAIN HUB
                        </span>

                        <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[1.02] text-dark-blue md:text-6xl lg:text-7xl">
                            Life Insurance • Health Insurance • General Insurance
                        </h1>
                    </FadeIn>
                </div>
            </section>

            {/* ------------------------------------------------------------------ */}
            {/* MAIN CATEGORY TABS                                                  */}
            {/* ------------------------------------------------------------------ */}

            <section className="bg-white py-24 md:py-32">
                <div className="mx-auto max-w-7xl px-6">
                    <FadeIn>
                        <div className="text-center">
                            <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                                MAIN CATEGORY TABS
                            </span>
                        </div>
                    </FadeIn>

                    <div className="mt-12 grid gap-5 md:grid-cols-3">
                        {categories.map((category, index) => {
                            const Icon = category.icon;

                            return (
                                <FadeIn
                                    key={category.title}
                                    delay={index * 0.08}
                                >
                                    <a
                                        href={category.href}
                                        className="group block h-full border border-dark-blue/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-yellow hover:shadow-[0_18px_40px_rgba(0,59,115,0.08)] md:p-9"
                                    >
                                        <Icon
                                            className="h-8 w-8 text-[#0054a6]"
                                            strokeWidth={1.35}
                                        />

                                        <h2 className="mt-7 font-serif text-2xl text-dark-blue">
                                            {category.title}
                                        </h2>

                                        <div className="mt-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-dark-blue/60">
                                            {category.cta}

                                            <ArrowRight
                                                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                                                strokeWidth={1.5}
                                            />
                                        </div>
                                    </a>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ------------------------------------------------------------------ */}
            {/* LIFE INSURANCE                                                      */}
            {/* ------------------------------------------------------------------ */}

            <section className="bg-slate-50 py-24 md:py-28">
                <div className="mx-auto max-w-7xl px-6">
                    <FadeIn>
                        <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                            LIFE INSURANCE
                        </span>

                        <h2 className="mt-4 font-serif text-4xl text-dark-blue md:text-5xl">
                            Life Insurance
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.08}>
                        <CategoryList items={lifeCategories} />
                    </FadeIn>
                </div>
            </section>

            {/* ------------------------------------------------------------------ */}
            {/* HEALTH INSURANCE                                                    */}
            {/* ------------------------------------------------------------------ */}

            <section className="bg-white py-24 md:py-28">
                <div className="mx-auto max-w-7xl px-6">
                    <FadeIn>
                        <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                            HEALTH INSURANCE
                        </span>

                        <h2 className="mt-4 font-serif text-4xl text-dark-blue md:text-5xl">
                            Health Insurance
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.08}>
                        <CategoryList items={healthCategories} />
                    </FadeIn>

                    <FadeIn delay={0.15}>
                        <a
                            href="#contact"
                            className="group mt-10 inline-flex min-h-14 items-center gap-3 bg-[#0054a6] px-7 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-dark-blue"
                        >
                            Get a Health Insurance Quote

                            <ArrowRight
                                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                                strokeWidth={1.5}
                            />
                        </a>
                    </FadeIn>
                </div>
            </section>

            {/* ------------------------------------------------------------------ */}
            {/* GENERAL INSURANCE                                                   */}
            {/* ------------------------------------------------------------------ */}

            <section className="bg-dark-blue py-24 md:py-28">
                <div className="mx-auto max-w-7xl px-6">
                    <FadeIn>
                        <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                            GENERAL INSURANCE
                        </span>

                        <h2 className="mt-4 font-serif text-4xl text-white md:text-5xl">
                            General Insurance
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.08}>
                        <CategoryList
                            items={generalCategories}
                            dark
                        />
                    </FadeIn>

                    <FadeIn delay={0.15}>
                        <a
                            href="#contact"
                            className="group mt-10 inline-flex min-h-14 items-center gap-3 bg-yellow px-7 text-xs font-semibold uppercase tracking-[0.12em] text-dark-blue transition-colors hover:bg-white"
                        >
                            Get a General Insurance Quote

                            <ArrowRight
                                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                                strokeWidth={1.5}
                            />
                        </a>
                    </FadeIn>
                </div>
            </section>

            {/* ------------------------------------------------------------------ */}
            {/* GENERAL INFORMATION                                                 */}
            {/* ------------------------------------------------------------------ */}

            <section className="bg-[#eef5fb] py-24 md:py-28">
                <div className="mx-auto max-w-5xl px-6">
                    <FadeIn>
                        <div className="text-center">
                            <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                                GENERAL INFORMATION
                            </span>

                            <h2 className="mt-4 font-serif text-4xl text-dark-blue md:text-5xl">
                                Insurance
                            </h2>
                        </div>
                    </FadeIn>

                    <div className="mt-12 space-y-3">
                        {[
                            {
                                title: "What is Insurance?",
                                description:
                                    "Insurance is a financial arrangement that helps protect you against specified risks by providing coverage according to the terms and conditions of the selected policy.",
                            },
                            {
                                title: "Why is Insurance Important?",
                                description:
                                    "Insurance can help reduce the financial impact of unexpected events and support you, your family, or your business when covered risks arise.",
                            },
                            {
                                title: "How to choose appropriate cover?",
                                description:
                                    "The appropriate cover depends on your needs, financial situation, existing protection, and the risks you want to address. A review of these factors can help you understand suitable options.",
                            },
                        ].map((item, index) => (
                            <InfoAccordion
                                key={item.title}
                                index={index}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </div>
                </div>
            </section >

            {/* ------------------------------------------------------------------ */}
            {/* COMPLIANCE / DISCLAIMER                                             */}
            {/* ------------------------------------------------------------------ */}

            <section className="bg-white py-16">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-dark-blue/40">
                        COMPLIANCE / DISCLAIMER
                    </span>

                    <p className="mt-4 text-sm leading-7 text-dark-blue/50">
                        This website is for general information and guidance only.
                        Insurance products, coverage, benefits, terms and conditions
                        are subject to the respective insurer’s policy documents and
                        applicable regulations. Please review the official policy
                        wording before making any decision.
                    </p>
                </div>
            </section>
        </main >
    );
}