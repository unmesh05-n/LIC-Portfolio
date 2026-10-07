"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    Building2,
    Car,
    Flame,
    Plane,
    ShieldCheck,
    Store,
    Truck,
    Umbrella,
    X,
} from "lucide-react";

function FadeIn({
    children,
    delay = 0,
}: {
    children: React.ReactNode;
    delay?: number;
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
        >
            {children}
        </motion.div>
    );
}

const categories = [
    {
        title: "Car Insurance",
        icon: Car,
    },
    {
        title: "Two-Wheeler Insurance",
        icon: Truck,
    },
    {
        title: "Commercial Vehicle Insurance",
        icon: Truck,
    },
    {
        title: "Fire Insurance",
        icon: Flame,
    },
    {
        title: "Workers’ Compensation (WC)",
        icon: ShieldCheck,
    },
    {
        title: "Shop / Business Insurance",
        icon: Store,
    },
    {
        title: "Property Insurance",
        icon: Building2,
    },
    {
        title: "Travel Insurance",
        icon: Plane,
    },
    {
        title: "Marine Insurance",
        icon: Umbrella,
    },
    {
        title: "Other",
        icon: ShieldCheck,
    },
] as const;

type GeneralProduct = {
    whatIsIt: string;
    whoMayNeedIt: string;
    coverage: string[];
    conditions: string[];
    documents: string[];
};

const productDetails: Record<string, GeneralProduct> = {
    "Car Insurance": {
        whatIsIt: "Insurance designed to provide financial protection for a car against covered risks such as accidental damage, theft and specified third-party liabilities, depending on the selected policy.",
        whoMayNeedIt: "Car owners who want to meet applicable motor insurance requirements and protect themselves financially against covered vehicle-related risks.",
        coverage: ["Third-party liability protection subject to applicable requirements.", "Own-damage protection may be available under applicable policies.", "Additional benefits and add-ons depend on the selected insurer and policy."],
        conditions: ["Coverage, deductibles and exclusions vary by policy.", "Vehicle details, policy validity and applicable terms should be checked before purchase or renewal.", "Claims remain subject to the insurer's assessment and policy conditions."],
        documents: ["Vehicle registration details", "Existing policy details, where applicable", "Vehicle and proposer information"],
    },
    "Two-Wheeler Insurance": {
        whatIsIt: "Insurance designed to provide financial protection for a two-wheeler against covered risks and applicable third-party liabilities.",
        whoMayNeedIt: "Two-wheeler owners looking for required motor protection and financial support against covered accident, theft or liability risks.",
        coverage: ["Third-party liability protection subject to applicable requirements.", "Own-damage protection may be available under applicable policies.", "Optional add-ons may be available depending on the insurer."],
        conditions: ["Coverage and exclusions depend on the selected policy.", "Vehicle details, policy period and applicable deductibles should be reviewed.", "Claim settlement is subject to policy terms and insurer assessment."],
        documents: ["Vehicle registration details", "Existing policy details, where applicable", "Vehicle and proposer information"],
    },
    "Commercial Vehicle Insurance": {
        whatIsIt: "Insurance designed for commercial vehicles and their applicable covered risks, including relevant third-party liabilities.",
        whoMayNeedIt: "Owners or operators of eligible commercial vehicles who need protection appropriate to their vehicle and business use.",
        coverage: ["Applicable third-party liability protection.", "Own-damage protection may be available depending on the selected policy.", "Business-use and vehicle-specific conditions apply."],
        conditions: ["Vehicle usage, registration and permit-related conditions may apply.", "Coverage and exclusions vary by insurer and product.", "Policy documents should be reviewed before purchase or renewal."],
        documents: ["Vehicle registration and commercial vehicle details", "Permit / usage information where applicable", "Existing policy details, where applicable"],
    },
    "Fire Insurance": {
        whatIsIt: "Insurance designed to provide protection against specified fire and related risks affecting eligible insured property, subject to the policy.",
        whoMayNeedIt: "Property owners or businesses looking to protect eligible assets and property interests against covered fire-related risks.",
        coverage: ["Coverage depends on the insured property and selected policy.", "Specified fire and allied perils may be covered according to policy terms.", "Sum insured and applicable extensions depend on the selected solution."],
        conditions: ["Declared property, occupancy and risk details are important.", "Exclusions, deductibles and conditions vary by product.", "Risk assessment and insurer acceptance may apply."],
        documents: ["Property and occupancy details", "Asset / value information as applicable", "Existing insurance details where applicable"],
    },
    "Workers’ Compensation (WC)": {
        whatIsIt: "Insurance designed to address applicable employer liabilities arising from covered work-related injury or related events, subject to the policy and applicable requirements.",
        whoMayNeedIt: "Eligible employers and businesses seeking protection against applicable employee-related compensation liabilities.",
        coverage: ["Applicable compensation liabilities may be covered.", "Employee and occupational details form an important part of underwriting.", "Coverage depends on the selected policy and applicable requirements."],
        conditions: ["Employee classification, occupation and workplace details may affect coverage.", "Exclusions and conditions depend on the policy.", "Applicable statutory and regulatory requirements should be considered."],
        documents: ["Employee / workforce details", "Business and occupation information", "Existing policy details, where applicable"],
    },
    "Shop / Business Insurance": {
        whatIsIt: "Insurance solutions designed to protect eligible shop and business-related assets and risks based on the nature of the business.",
        whoMayNeedIt: "Shop owners and businesses looking for protection for eligible property, contents, stock or other applicable business risks.",
        coverage: ["Coverage can be structured around applicable business assets and risks.", "Property, stock and contents protection may be available depending on the policy.", "Optional extensions may vary by product."],
        conditions: ["Business activity, location and asset details affect the applicable solution.", "Coverage, exclusions and deductibles vary by policy.", "Insurer risk assessment may be required."],
        documents: ["Business details and nature of activity", "Property / stock / asset information as applicable", "Existing insurance details, where applicable"],
    },
    "Property Insurance": {
        whatIsIt: "Insurance designed to provide protection for eligible property and associated risks covered under the selected policy.",
        whoMayNeedIt: "Property owners, businesses or other eligible parties seeking protection for covered property-related risks.",
        coverage: ["Property and eligible assets may be covered depending on the policy.", "Specified perils and extensions depend on the selected solution.", "The sum insured should reflect the applicable property and risk."],
        conditions: ["Property type, location, occupancy and construction details may affect underwriting.", "Exclusions and deductibles vary by policy.", "Risk inspection or supporting information may be required."],
        documents: ["Property details", "Occupancy and usage information", "Asset / value details as applicable"],
    },
    "Travel Insurance": {
        whatIsIt: "Insurance designed to provide eligible travel-related protection, including specified medical or travel risks during a covered trip.",
        whoMayNeedIt: "Individuals or families travelling domestically or internationally who want protection against eligible travel-related risks.",
        coverage: ["Eligible emergency medical expenses may be covered depending on the plan.", "Travel-related benefits vary by destination and policy.", "Trip duration and destination can affect applicable coverage."],
        conditions: ["Destination, trip duration and policy dates must be checked.", "Pre-existing conditions and other exclusions may apply.", "Coverage is subject to the selected insurer's policy wording."],
        documents: ["Traveller details", "Travel dates and destination", "Passport / travel information where applicable"],
    },
    "Marine Insurance": {
        whatIsIt: "Insurance designed to provide protection for eligible goods, cargo or related marine transit risks covered under the selected policy.",
        whoMayNeedIt: "Businesses or parties involved in eligible movement of goods who want protection against covered transit-related risks.",
        coverage: ["Eligible cargo or transit risks may be covered.", "Coverage depends on the nature of goods, route and selected policy.", "Applicable extensions depend on the insurance solution."],
        conditions: ["Goods, route, transit mode and declared values are important.", "Exclusions and policy conditions vary by product.", "Supporting commercial and shipment information may be required."],
        documents: ["Goods / cargo details", "Transit and shipment information", "Invoice / value details where applicable"],
    },
    "Other": {
        whatIsIt: "Other general insurance solutions can be considered for requirements that do not fall under the categories listed above.",
        whoMayNeedIt: "Individuals or businesses with a specific general insurance requirement that needs to be assessed separately.",
        coverage: ["Coverage depends on the nature of the requirement.", "The appropriate product and insurer are determined based on the applicable risk.", "Benefits and extensions vary by selected solution."],
        conditions: ["Product availability and eligibility vary by insurer.", "Coverage, exclusions and conditions must be confirmed from the applicable policy.", "Additional risk information may be required."],
        documents: ["Requirement-specific details", "Risk / asset information as applicable", "Existing insurance documents where applicable"],
    },
};

const detailFields = [
    "What is it?",
    "Who may need it?",
    "Coverage / Key Features",
    "Important Conditions / Exclusions",
    "Documents / Information Required",
];

export default function GeneralInsurancePage() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null,
    );

    const googleFormUrl = "https://forms.gle/HkWkRKPS6c697zvr6";

    return (
        <main className="bg-white">
            {/* HERO */}
            <section className="relative overflow-hidden bg-dark-blue">
                <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#0054a6]/30 blur-3xl" />

                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                    }}
                />

                <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
                    <FadeIn>
                        <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                            GENERAL INSURANCE
                        </span>

                        <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[1.02] text-white md:text-6xl lg:text-7xl">
                            Motor • Fire • WC • Business • Property and Other
                            General Insurance
                        </h1>

                        <div className="mt-8 max-w-3xl border-l border-yellow/60 pl-5">
                            <p className="text-sm uppercase tracking-[0.12em] text-white/50">
                                General Insurance
                            </p>

                            <p className="mt-3 text-sm leading-7 text-white/45">
                                Introduction content to be added from the
                                approved client content.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* CATEGORIES */}
            <section
                id="categories"
                className="bg-white py-24 md:py-32"
            >
                <div className="mx-auto max-w-7xl px-6">
                    <FadeIn>
                        <div className="max-w-3xl">
                            <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                                GENERAL INSURANCE
                            </span>

                            <h2 className="mt-4 font-serif text-4xl text-dark-blue md:text-5xl">
                                Choose Your Insurance Category
                            </h2>
                        </div>
                    </FadeIn>

                    <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {categories.map((category, index) => {
                            const Icon = category.icon;

                            return (
                                <FadeIn
                                    key={category.title}
                                    delay={index * 0.04}
                                >
                                    <article className="group flex h-full flex-col border border-dark-blue/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-yellow hover:shadow-[0_16px_35px_rgba(0,59,115,0.08)]">
                                        <div className="flex items-start justify-between">
                                            <Icon
                                                className="h-7 w-7 text-[#0054a6]"
                                                strokeWidth={1.4}
                                            />

                                            <span className="text-[10px] uppercase tracking-[0.16em] text-dark-blue/35">
                                                {String(index + 1).padStart(
                                                    2,
                                                    "0",
                                                )}
                                            </span>
                                        </div>

                                        <h3 className="mt-7 font-serif text-xl text-dark-blue">
                                            {category.title}
                                        </h3>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setSelectedCategory(
                                                    category.title,
                                                )
                                            }
                                            className="mt-auto inline-flex items-center gap-2 pt-7 text-left text-[10px] uppercase tracking-[0.16em] text-dark-blue transition-colors hover:text-[#0054a6]"
                                        >
                                            Get a Quote
                                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                                        </button>
                                    </article>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* PRODUCT DETAIL TEMPLATE */}
            <section className="bg-slate-50 py-24 md:py-28">
                <div className="mx-auto max-w-7xl px-6">
                    <FadeIn>
                        <div className="text-center">
                            <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                                PRODUCT DETAIL TEMPLATE
                            </span>

                            <h2 className="mt-4 font-serif text-4xl text-dark-blue md:text-5xl">
                                Product / Category Details
                            </h2>

                            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-dark-blue/55">
                                Product-specific information will be added from
                                approved content and applicable insurer
                                material.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="mx-auto mt-12 grid max-w-5xl gap-px overflow-hidden border border-dark-blue/10 bg-dark-blue/10 md:grid-cols-2 lg:grid-cols-3">
                        {detailFields.map((field, index) => (
                            <FadeIn
                                key={field}
                                delay={index * 0.05}
                            >
                                <div className="min-h-40 bg-white p-7">
                                    <span className="text-[10px] uppercase tracking-[0.16em] text-[#0054a6]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <h3 className="mt-4 font-serif text-lg text-dark-blue">
                                        {field}
                                    </h3>

                                    <p className="mt-4 text-xs leading-6 text-dark-blue/55">
                                        {index === 0 && "Understand the purpose and nature of the applicable insurance solution."}
                                        {index === 1 && "Consider the individuals, businesses or assets for which the solution may be relevant."}
                                        {index === 2 && "Coverage and key features depend on the selected product and applicable policy terms."}
                                        {index === 3 && "Conditions, exclusions, deductibles and eligibility must be checked in the applicable policy."}
                                        {index === 4 && "Required documents depend on the insurance category, risk and insurer requirements."}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <a
                            href="https://forms.gle/HkWkRKPS6c697zvr6" target="_blank" rel="noreferrer"
                            className="inline-flex min-h-13 items-center gap-3 bg-[#0054a6] px-7 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:bg-dark-blue"
                        >
                            Get a Quote
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </section>

            {/* GOOGLE FORM QUOTE */}
            <section id="quote-form" className="bg-[#eef5fb] py-24 md:py-32">
                <div className="mx-auto max-w-4xl px-6">
                    <FadeIn>
                        <div className="border border-dark-blue/10 bg-white p-8 text-center md:p-12">
                            <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                                GENERAL INSURANCE QUOTE
                            </span>
                            <h2 className="mt-4 font-serif text-4xl text-dark-blue md:text-5xl">
                                Get a General Insurance Quote
                            </h2>
                            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-dark-blue/60">
                                Prefer to send your details? Fill out our General Insurance Quote Form and we will contact you.
                            </p>
                            <a
                                href={googleFormUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-9 inline-flex min-h-13 items-center gap-3 bg-[#0054a6] px-7 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:bg-dark-blue"
                            >
                                Fill General Insurance Quote Form
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* VISUALS */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-5 md:grid-cols-3">
                        {[
                            {
                                label: "General Insurance",
                                subtitle: "Vehicle • Business • Property",
                                image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
                            },
                            {
                                label: "Motor Insurance",
                                subtitle: "Car • Two-Wheeler • Commercial Vehicle",
                                image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
                            },
                            {
                                label: "Business / Fire / Property",
                                subtitle: "Business • Fire • Property Protection",
                                image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
                            },
                        ].map((item, index) => (
                            <FadeIn key={item.label} delay={index * 0.05}>
                                <div className="group relative aspect-video overflow-hidden bg-[#eef5fb]">
                                    <img src={item.image} alt={item.label} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/80 via-dark-blue/15 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <span className="text-[10px] uppercase tracking-[0.16em] text-yellow">{item.label}</span>
                                        <p className="mt-2 text-sm text-white/80">{item.subtitle}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* DISCLAIMER */}
            <section className="bg-slate-50 py-16">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-dark-blue/40">
                        DISCLAIMER
                    </span>

                    <p className="mt-4 text-sm leading-7 text-dark-blue/60">
                        This website is for general information and guidance only. Insurance products, coverage, benefits, terms, conditions, exclusions and eligibility are subject to the respective insurer&apos;s policy documents and applicable regulations. Please review the official policy wording and applicable product material before making an insurance decision.
                    </p>
                </div>
            </section>

            {/* CATEGORY MODAL */}
            <AnimatePresence>
                {selectedCategory && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[70] flex items-center justify-center bg-dark-blue/65 p-4 backdrop-blur-sm"
                        onClick={() => setSelectedCategory(null)}
                    >
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 24,
                                scale: 0.98,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                y: 24,
                                scale: 0.98,
                            }}
                            className="w-full max-w-xl bg-white"
                            onClick={(event) =>
                                event.stopPropagation()
                            }
                        >
                            <div className="flex items-start justify-between gap-6 border-b border-dark-blue/10 p-6 md:p-8">
                                <div>
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-yellow">
                                        GENERAL INSURANCE
                                    </span>

                                    <h3 className="mt-3 font-serif text-3xl text-dark-blue">
                                        {selectedCategory}
                                    </h3>
                                </div>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setSelectedCategory(null)
                                    }
                                    aria-label="Close"
                                    className="flex h-10 w-10 shrink-0 items-center justify-center border border-dark-blue/15 text-dark-blue hover:border-yellow"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            {selectedCategory && (
                                <div className="max-h-[75vh] overflow-y-auto p-6 md:p-8">
                                    <div className="space-y-7">
                                        <div>
                                            <h4 className="font-serif text-xl text-dark-blue">What is it?</h4>
                                            <p className="mt-3 text-sm leading-7 text-dark-blue/65">{productDetails[selectedCategory].whatIsIt}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-serif text-xl text-dark-blue">Who may need it?</h4>
                                            <p className="mt-3 text-sm leading-7 text-dark-blue/65">{productDetails[selectedCategory].whoMayNeedIt}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-serif text-xl text-dark-blue">Coverage / Key Features</h4>
                                            <ul className="mt-3 space-y-2">
                                                {productDetails[selectedCategory].coverage.map((item) => (
                                                    <li key={item} className="flex gap-3 text-sm leading-6 text-dark-blue/65">
                                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0054a6]" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-serif text-xl text-dark-blue">Important Conditions / Exclusions</h4>
                                            <ul className="mt-3 space-y-2">
                                                {productDetails[selectedCategory].conditions.map((item) => (
                                                    <li key={item} className="flex gap-3 text-sm leading-6 text-dark-blue/65">
                                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-serif text-xl text-dark-blue">Documents / Information Required</h4>
                                            <ul className="mt-3 space-y-2">
                                                {productDetails[selectedCategory].documents.map((item) => (
                                                    <li key={item} className="flex gap-3 text-sm leading-6 text-dark-blue/65">
                                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0054a6]" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <p className="border-t border-dark-blue/10 pt-6 text-xs leading-6 text-dark-blue/45">
                                            Product-specific coverage, conditions, exclusions and eligibility are subject to the applicable insurer&apos;s current policy wording and product material.
                                        </p>
                                        <a href="https://forms.gle/HkWkRKPS6c697zvr6" target="_blank" rel="noreferrer" onClick={() => setSelectedCategory(null)} className="inline-flex min-h-13 items-center gap-3 bg-[#0054a6] px-6 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:bg-dark-blue">
                                            Get a Quote
                                            <ArrowRight className="h-4 w-4" />
                                        </a>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}