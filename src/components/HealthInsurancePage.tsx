"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    ChevronDown,
    HeartPulse,
    Hospital,
    Plus,
    ShieldCheck,
    Users,
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


const quickServices = [
    {
        icon: <Hospital className="h-5 w-5" />,
        title: "Hospitalisation Cover",
        target: "#categories",
    },
    {
        icon: <Users className="h-5 w-5" />,
        title: "Family Health Cover",
        target: "#categories",
    },
    {
        icon: <HeartPulse className="h-5 w-5" />,
        title: "Critical Illness",
        target: "#categories",
    },
    {
        icon: <Plus className="h-5 w-5" />,
        title: "Super Top-up",
        target: "#categories",
    },
    {
        icon: <ShieldCheck className="h-5 w-5" />,
        title: "Personal Accident",
        target: "#categories",
    },
];

const reasons = [
    {
        icon: "🏥",
        title: "Hospitalisation Expenses",
    },
    {
        icon: "💰",
        title: "Protect Your Savings",
    },
    {
        icon: "👨‍👩‍👧",
        title: "Family Protection",
    },
    {
        icon: "🧠",
        title: "Financial Preparedness",
    },
];

const products = [
    {
        icon: "🏥",
        title: "Individual / Family Health Insurance",
        description: "Individual / Family Health Insurance",
    },
    {
        icon: "👨‍👩‍👧",
        title: "Family Protection",
        description: "Family Floater",
    },
    {
        icon: "👴",
        title: "Senior Citizen",
        description: "Senior-focused health insurance",
    },
    {
        icon: "❤️",
        title: "Critical Illness",
        description: "Specified serious illnesses",
    },
    {
        icon: "➕",
        title: "Super Top-up",
        description: "Additional protection over base cover",
    },
    {
        icon: "🛡️",
        title: "Personal Accident",
        description: "Accidental death / disablement protection",
    },
    {
        icon: "🤰",
        title: "Maternity",
        description: "Applicable maternity solutions",
    },
    {
        icon: "✈️",
        title: "International / Travel",
        description: "Applicable travel health solutions",
    },
];

const addOns = [
    "Care Shield Add-on",
    "Protect Plus",
    "Applicable Health Add-ons",
    "Critical Illness Options",
];

const protectionNeeds = [
    {
        icon: "🏥",
        title: "My Hospitalisation Expenses",
    },
    {
        icon: "👨‍👩‍👧",
        title: "My Family",
    },
    {
        icon: "👴",
        title: "My Parents",
    },
    {
        icon: "❤️",
        title: "Critical Illness Risk",
    },
    {
        icon: "➕",
        title: "My Existing Health Cover",
    },
    {
        icon: "🛡️",
        title: "Accidental Risk",
    },
    {
        icon: "👶",
        title: "My Child's Future",
    },
];

const services = [
    {
        icon: "🔄",
        title: "Policy Renewal",
        description: "Need help with renewal?",
        target: "https://forms.gle/JWVGEmreQPxk6HWn7",
        cta: "Get Assistance",
    },
    {
        icon: "🔍",
        title: "Policy Review",
        description: "Not sure whether your current health cover is adequate?",
        target: "#health-review",
        cta: "Request Review",
    },
    {
        icon: "🔁",
        title: "Portability",
        description: "Thinking about porting your existing health policy?",
        target: "https://forms.gle/JWVGEmreQPxk6HWn7",
        cta: "Talk to Us",
    },
    {
        icon: "🏥",
        title: "Claim Assistance",
        description: "Need guidance regarding a health insurance claim?",
        target: "#claim-assistance",
        cta: "Get Claim Support",
    },
    {
        icon: "📄",
        title: "Policy Documents",
        description: "Need help with policy-related documents?",
        target: "#documents",
        cta: "Request Support",
    },
    {
        icon: "🏥",
        title: "Network Hospital",
        description: "Need help locating a network hospital?",
        target: "https://forms.gle/JWVGEmreQPxk6HWn7",
        cta: "Find Assistance",
    },
    {
        icon: "🧾",
        title: "Premium / Receipt",
        description: "Need help with payment or policy documents?",
        target: "https://forms.gle/JWVGEmreQPxk6HWn7",
        cta: "Request Support",
    },
];

const reviewItems = [
    "Sum Insured",
    "Waiting Period",
    "Room Rent",
    "Co-payment",
    "Network Hospitals",
    "Pre-existing Disease Conditions",
    "Exclusions",
    "Restoration/Reinstatement features",
    "Critical Illness protection",
    "Family coverage",
];

const faqQuestions = [
    "What is a Family Floater?",
    "How much health insurance cover should I consider?",
    "What is a waiting period?",
    "What is a pre-existing disease?",
    "What is a Super Top-up?",
    "What is Critical Illness Cover?",
    "Can I review or port my existing health insurance?",
    "What is the difference between health insurance and personal accident insurance?",
];

const documentGroups = [
    {
        title: "For Quote",
        items: [
            "Basic personal details",
            "Age",
            "Family details",
            "Health information",
            "Existing policy details, if any",
        ],
    },
    {
        title: "For Policy Review",
        items: [
            "Existing policy document",
            "Policy schedule",
            "Renewal notice / premium details",
            "Existing coverage details",
        ],
    },
    {
        title: "For Claim Assistance",
        items: [
            "Policy details",
            "Claim form",
            "Hospital documents",
            "Bills / receipts",
            "Discharge summary",
            "Medical reports",
            "Identity/KYC documents as applicable",
        ],
    },
    {
        title: "For Portability",
        items: [
            "Existing policy details",
            "Renewal information",
            "Current insurer documents",
            "Applicable portability documents",
        ],
    },
];

function ProductModal({
    title,
    onClose,
}: {
    title: string;
    onClose: () => void;
}) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-dark-blue/65 p-4 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.98 }}
                className="max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-white"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="flex items-start justify-between gap-6 border-b border-dark-blue/10 p-6 md:p-8">
                    <div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-yellow">
                            HEALTH INSURANCE
                        </span>

                        <h3 className="mt-3 font-serif text-3xl text-dark-blue">
                            {title}
                        </h3>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                        className="flex h-10 w-10 shrink-0 items-center justify-center border border-dark-blue/15 text-dark-blue hover:border-yellow"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="space-y-7 p-6 md:p-8">
                    <div>
                        <h4 className="font-serif text-xl text-dark-blue">
                            Who may consider it
                        </h4>
                        <p className="mt-3 text-sm leading-7 text-dark-blue/65">
                            Information should be considered based on your
                            requirements and the applicable product terms.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-serif text-xl text-dark-blue">
                            Key Benefits
                        </h4>
                        <p className="mt-3 text-sm leading-7 text-dark-blue/65">
                            Refer to the applicable insurer&apos;s current
                            product material, brochure and policy terms.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-serif text-xl text-dark-blue">
                            Coverage highlights
                        </h4>
                        <p className="mt-3 text-sm leading-7 text-dark-blue/65">
                            Coverage, waiting periods, exclusions and
                            eligibility vary by product and applicable policy
                            terms.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-serif text-xl text-dark-blue">
                            Brochure & Customer Information Sheet
                        </h4>
                        <p className="mt-3 text-sm leading-7 text-dark-blue/65">
                            Current official product documents should be
                            referred to before choosing a solution.
                        </p>
                    </div>

                    <a
                        href="https://forms.gle/JWVGEmreQPxk6HWn7" target="_blank" rel="noreferrer"
                        onClick={onClose}
                        className="inline-flex min-h-13 items-center gap-3 bg-[#0054a6] px-6 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:bg-dark-blue"
                    >
                        Get Quote
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function HealthInsurancePage() {
    const [selectedProduct, setSelectedProduct] = useState<string | null>(
        null,
    );
    const [documentsOpen, setDocumentsOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <main className="bg-white">
            {/* HERO */}
            <section className="relative overflow-hidden bg-[#eef5fb]">
                <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-white blur-3xl" />

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
                            HEALTH INSURANCE
                        </span>

                        <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[1.02] text-dark-blue md:text-6xl lg:text-7xl">
                            Protect Your Health. Protect Your Savings.
                        </h1>

                        <p className="mt-7 max-w-3xl text-base leading-8 text-dark-blue/65 md:text-lg">
                            A good health insurance plan can help protect your
                            family from the financial impact of unexpected
                            medical expenses.
                        </p>

                        <p className="mt-4 max-w-3xl text-sm leading-7 text-dark-blue/55 md:text-base">
                            Explore Health Insurance, Critical Illness, Super
                            Top-up, Personal Accident and other protection
                            solutions based on your needs.
                        </p>

                        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                            <a
                                href="https://forms.gle/JWVGEmreQPxk6HWn7" target="_blank" rel="noreferrer"
                                className="group inline-flex min-h-14 items-center justify-center gap-3 bg-[#0054a6] px-7 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:bg-dark-blue"
                            >
                                Get a Health Insurance Quote
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>

                            <a
                                href="https://forms.gle/JWVGEmreQPxk6HWn7" target="_blank" rel="noreferrer"
                                className="inline-flex min-h-14 items-center justify-center border border-dark-blue/15 bg-white px-7 text-xs font-semibold uppercase tracking-[0.12em] text-dark-blue hover:border-[#0054a6]"
                            >
                                Talk to an Advisor
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* QUICK SERVICE BAR */}
            <section className="border-b border-dark-blue/10 bg-white">
                <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-5">
                    {quickServices.map((item) => (
                        <a
                            key={item.title}
                            href={item.target}
                            className="flex flex-col items-center gap-3 border-b border-dark-blue/10 px-5 py-6 text-center transition-colors hover:bg-[#eef5fb] md:border-b-0 md:border-r last:border-r-0"
                        >
                            <span className="text-[#0054a6]">{item.icon}</span>
                            <span className="text-[10px] uppercase tracking-[0.12em] text-dark-blue/60">
                                {item.title}
                            </span>
                        </a>
                    ))}
                </div>
            </section>

            {/* WHY HEALTH INSURANCE */}
            <section className="bg-white py-24 md:py-32">
                <div className="mx-auto max-w-7xl px-6">
                    <FadeIn>
                        <div className="max-w-3xl">
                            <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                                WHY HEALTH INSURANCE?
                            </span>

                            <h2 className="mt-4 font-serif text-4xl text-dark-blue md:text-5xl">
                                Why Do You Need Health Insurance?
                            </h2>

                            <p className="mt-7 text-base leading-8 text-dark-blue/70 md:text-lg">
                                Medical treatment costs can affect your
                                savings, income and long-term financial goals.
                                Health insurance can provide financial
                                protection against eligible medical expenses,
                                subject to policy terms and conditions.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {reasons.map((item, index) => (
                            <FadeIn key={item.title} delay={index * 0.06}>
                                <article className="h-full border border-dark-blue/10 p-7 transition-colors hover:border-yellow hover:bg-[#eef5fb]">
                                    <div className="text-3xl">{item.icon}</div>

                                    <h3 className="mt-6 font-serif text-xl text-dark-blue">
                                        {item.title}
                                    </h3>
                                </article>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRODUCT CARDS */}
            <section
                id="products"
                className="bg-slate-50 py-24 md:py-32"
            >
                <div className="mx-auto max-w-7xl px-6">
                    <FadeIn>
                        <div className="text-center">
                            <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                                HEALTH INSURANCE PRODUCTS
                            </span>

                            <h2 className="mt-4 font-serif text-4xl text-dark-blue md:text-5xl">
                                Health Insurance Products
                            </h2>
                        </div>
                    </FadeIn>

                    <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {products.map((product, index) => (
                            <FadeIn
                                key={product.title}
                                delay={index * 0.05}
                            >
                                <article className="group flex h-full flex-col border border-dark-blue/10 bg-white p-7 transition-all hover:-translate-y-1 hover:border-yellow hover:shadow-[0_16px_35px_rgba(0,59,115,0.08)]">
                                    <div className="text-3xl">
                                        {product.icon}
                                    </div>

                                    <h3 className="mt-6 font-serif text-xl text-dark-blue">
                                        {product.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-dark-blue/60">
                                        {product.description}
                                    </p>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setSelectedProduct(product.title)
                                        }
                                        className="mt-auto inline-flex items-center gap-2 pt-7 text-[10px] font-semibold uppercase tracking-[0.16em] text-dark-blue"
                                    >
                                        View Details
                                        <ArrowRight className="h-3.5 w-3.5" />
                                    </button>
                                </article>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CATEGORIES */}
            <section
                id="categories"
                className="bg-white py-24 md:py-28"
            >
                <div className="mx-auto max-w-7xl px-6">
                    <FadeIn>
                        <div className="max-w-3xl">
                            <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                                HEALTH INSURANCE CATEGORIES
                            </span>

                            <h2 className="mt-4 font-serif text-4xl text-dark-blue md:text-5xl">
                                Choose Protection Based on Your Need
                            </h2>
                        </div>
                    </FadeIn>

                    <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {products.map((item, index) => (
                            <FadeIn
                                key={item.title}
                                delay={index * 0.04}
                            >
                                <article className="border border-dark-blue/10 p-6">
                                    <div className="text-2xl">
                                        {item.icon}
                                    </div>

                                    <h3 className="mt-5 font-serif text-lg text-dark-blue">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-dark-blue/55">
                                        {item.description}
                                    </p>
                                </article>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ADD-ONS */}
            <section className="bg-[#eef5fb] py-24 md:py-28">
                <div className="mx-auto max-w-7xl px-6">
                    <FadeIn>
                        <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                            ADD-ON / RIDER SECTION
                        </span>

                        <h2 className="mt-4 font-serif text-4xl text-dark-blue md:text-5xl">
                            Enhance Your Protection With Available Add-ons
                        </h2>
                    </FadeIn>

                    <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {addOns.map((item, index) => (
                            <FadeIn key={item} delay={index * 0.06}>
                                <div className="border border-dark-blue/10 bg-white p-7">
                                    <Plus
                                        className="h-6 w-6 text-[#0054a6]"
                                        strokeWidth={1.5}
                                    />

                                    <h3 className="mt-6 font-serif text-xl text-dark-blue">
                                        {item}
                                    </h3>

                                    <p className="mt-4 text-xs leading-6 text-dark-blue/50">
                                        Available add-ons may vary by product.
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <a
                        href="https://forms.gle/JWVGEmreQPxk6HWn7" target="_blank" rel="noreferrer"
                        className="mt-10 inline-flex min-h-13 items-center gap-3 border border-dark-blue/15 bg-white px-6 text-xs font-semibold uppercase tracking-[0.12em] text-dark-blue hover:border-yellow"
                    >
                        Check Available Add-ons
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </div>
            </section>

            {/* WHAT ARE YOU LOOKING TO PROTECT */}
            <section className="bg-white py-24 md:py-28">
                <div className="mx-auto max-w-7xl px-6">
                    <FadeIn>
                        <div className="text-center">
                            <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                                PERSONALISE YOUR REQUIREMENT
                            </span>

                            <h2 className="mt-4 font-serif text-4xl text-dark-blue md:text-5xl">
                                What Are You Looking to Protect?
                            </h2>
                        </div>
                    </FadeIn>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {protectionNeeds.map((item, index) => (
                            <FadeIn
                                key={item.title}
                                delay={index * 0.04}
                            >
                                <a
                                    href="https://forms.gle/JWVGEmreQPxk6HWn7" target="_blank" rel="noreferrer"
                                    className="flex h-full items-center gap-5 border border-dark-blue/10 bg-white p-6 transition-colors hover:border-yellow hover:bg-[#eef5fb]"
                                >
                                    <span className="text-2xl">
                                        {item.icon}
                                    </span>

                                    <span className="font-serif text-lg text-dark-blue">
                                        {item.title}
                                    </span>
                                </a>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* PERSONALIZED QUOTE */}
            <section className="bg-dark-blue py-24 md:py-28">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <FadeIn>
                        <ShieldCheck
                            className="mx-auto h-10 w-10 text-yellow"
                            strokeWidth={1.3}
                        />

                        <h2 className="mt-6 font-serif text-4xl text-white md:text-5xl">
                            Get a Personalised Health Insurance Quote
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
                            Share a few details and we will help you explore
                            suitable health insurance options based on your
                            requirements.
                        </p>

                        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                            <a
                                href="https://forms.gle/JWVGEmreQPxk6HWn7" target="_blank" rel="noreferrer"
                                className="inline-flex min-h-14 items-center justify-center gap-3 bg-yellow px-7 text-xs font-semibold uppercase tracking-[0.12em] text-dark-blue hover:bg-white"
                            >
                                Get Quote Online
                                <ArrowRight className="h-4 w-4" />
                            </a>

                            <a
                                href="https://wa.me/919921668123"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex min-h-14 items-center justify-center border border-white/25 px-7 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:bg-white/10"
                            >
                                Submit Details on WhatsApp
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* SERVICE SECTION */}
            <section className="bg-dark-blue py-24 md:py-32">
                <div className="mx-auto max-w-7xl px-6">
                    <FadeIn>
                        <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                            HEALTH INSURANCE SUPPORT
                        </span>

                        <h2 className="mt-4 font-serif text-4xl text-white md:text-5xl">
                            Need Help With Your Health Insurance?
                        </h2>
                    </FadeIn>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {services.map((service, index) => (
                            <FadeIn
                                key={service.title}
                                delay={index * 0.04}
                            >
                                <a
                                    href={service.target}
                                    className="flex h-full flex-col border border-white/15 bg-white/[0.04] p-7 transition-colors hover:border-yellow"
                                >
                                    <div className="text-2xl text-yellow">
                                        {service.icon}
                                    </div>

                                    <h3 className="mt-6 font-serif text-xl text-white">
                                        {service.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-6 text-white/60">
                                        {service.description}
                                    </p>

                                    <span className="mt-auto pt-7 text-[10px] font-semibold uppercase tracking-[0.15em] text-yellow">
                                        {service.cta}
                                    </span>
                                </a>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* HEALTH INSURANCE REVIEW */}
            <section
                id="health-review"
                className="bg-white py-24 md:py-32"
            >
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                        <FadeIn>
                            <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                                HEALTH INSURANCE REVIEW
                            </span>

                            <h2 className="mt-4 font-serif text-4xl text-dark-blue md:text-5xl">
                                Already Have Health Insurance? Review It Before
                                You Need It.
                            </h2>

                            <a
                                href="https://forms.gle/JWVGEmreQPxk6HWn7" target="_blank" rel="noreferrer"
                                className="mt-8 inline-flex min-h-13 items-center gap-3 bg-[#0054a6] px-7 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:bg-dark-blue"
                            >
                                Request a Free Health Insurance Review
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="border border-dark-blue/10 bg-[#eef5fb] p-7 md:p-9">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    {reviewItems.map((item) => (
                                        <div
                                            key={item}
                                            className="flex gap-3 text-sm leading-6 text-dark-blue/70"
                                        >
                                            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#0054a6]" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* CLAIM ASSISTANCE */}
            <section
                id="claim-assistance"
                className="bg-[#eef5fb] py-24 md:py-28"
            >
                <div className="mx-auto max-w-6xl px-6">
                    <FadeIn>
                        <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                            CLAIM ASSISTANCE
                        </span>

                        <h2 className="mt-4 font-serif text-4xl text-dark-blue md:text-5xl">
                            Need Help With a Health Insurance Claim?
                        </h2>
                    </FadeIn>

                    <div className="mt-12 grid gap-4 md:grid-cols-5">
                        {[
                            ["01", "Understand the Situation"],
                            ["02", "Check Applicable Policy Terms"],
                            ["03", "Guide You on Required Documents"],
                            ["04", "Help With the Service Process"],
                            ["05", "Follow Up Where Applicable"],
                        ].map(([number, title]) => (
                            <FadeIn key={number}>
                                <div className="border border-dark-blue/10 bg-white p-6">
                                    <span className="text-xs font-semibold tracking-[0.14em] text-[#0054a6]">
                                        {number}
                                    </span>

                                    <h3 className="mt-5 font-serif text-lg text-dark-blue">
                                        {title}
                                    </h3>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <p className="mt-8 max-w-4xl text-sm leading-7 text-dark-blue/60">
                        Claim assistance does not guarantee claim approval.
                        Claims are subject to the insurer&apos;s applicable
                        policy terms, conditions and assessment.
                    </p>
                </div>
            </section>

            {/* DOCUMENT CHECKLIST */}
            <section
                id="documents"
                className="bg-white py-24 md:py-28"
            >
                <div className="mx-auto max-w-5xl px-6">
                    <FadeIn>
                        <button
                            type="button"
                            onClick={() =>
                                setDocumentsOpen((value) => !value)
                            }
                            className="flex w-full items-center justify-between gap-6 border-b border-dark-blue/15 pb-5 text-left"
                        >
                            <div>
                                <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                                    DOCUMENT CHECKLIST
                                </span>

                                <h2 className="mt-4 font-serif text-4xl text-dark-blue md:text-5xl">
                                    What Documents May Be Required?
                                </h2>
                            </div>

                            <ChevronDown
                                className={`h-6 w-6 shrink-0 text-[#0054a6] transition-transform duration-300 ${documentsOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>
                    </FadeIn>

                    <AnimatePresence initial={false}>
                        {documentsOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="grid gap-4 pt-8 md:grid-cols-2">
                                    {documentGroups.map((group) => (
                                        <div
                                            key={group.title}
                                            className="border border-dark-blue/10 bg-[#eef5fb] p-7"
                                        >
                                            <h3 className="font-serif text-xl text-dark-blue">
                                                {group.title}
                                            </h3>

                                            <ul className="mt-5 space-y-3">
                                                {group.items.map((item) => (
                                                    <li
                                                        key={item}
                                                        className="flex gap-3 text-sm leading-6 text-dark-blue/65"
                                                    >
                                                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#0054a6]" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>

                                <p className="pt-8 text-sm leading-7 text-dark-blue/60">
                                    Required documents may vary depending on
                                    the insurer, product, service and individual
                                    case.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* WHY CHOOSE */}
            <section className="bg-dark-blue py-24 md:py-28">
                <div className="mx-auto max-w-6xl px-6">
                    <FadeIn>
                        <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                            WHY CHOOSE HEALTH INSURANCE THROUGH RUSHIRAJ?
                        </span>

                        <h2 className="mt-4 font-serif text-4xl text-white md:text-5xl">
                            We Don&apos;t Just Help You Buy a Policy. We Help
                            You Understand It.
                        </h2>
                    </FadeIn>

                    <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            [
                                "Understand",
                                "We explain important policy features in simple language.",
                            ],
                            [
                                "Compare",
                                "We help you compare relevant options based on your needs.",
                            ],
                            [
                                "Choose",
                                "The final decision remains yours.",
                            ],
                            [
                                "Support",
                                "We remain available for renewals, reviews, service and claim-related assistance.",
                            ],
                        ].map(([title, description], index) => (
                            <FadeIn key={title} delay={index * 0.05}>
                                <article className="border border-white/15 p-7">
                                    <h3 className="font-serif text-2xl text-white">
                                        {title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-white/60">
                                        {description}
                                    </p>
                                </article>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-white py-24 md:py-28">
                <div className="mx-auto max-w-5xl px-6">
                    <FadeIn>
                        <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                            FAQ
                        </span>

                        <h2 className="mt-4 font-serif text-4xl text-dark-blue md:text-5xl">
                            Frequently Asked Questions
                        </h2>
                    </FadeIn>

                    <div className="mt-10 divide-y divide-dark-blue/10 border-y border-dark-blue/10">
                        {faqQuestions.map((question, index) => (
                            <div key={question}>
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenFaq(
                                            openFaq === index ? null : index,
                                        )
                                    }
                                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                                >
                                    <span className="font-serif text-lg text-dark-blue">
                                        {question}
                                    </span>

                                    <ChevronDown
                                        className={`h-5 w-5 shrink-0 text-[#0054a6] transition-transform ${openFaq === index
                                            ? "rotate-180"
                                            : ""
                                            }`}
                                    />
                                </button>

                                <AnimatePresence initial={false}>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <p className="pb-6 text-sm leading-7 text-dark-blue/60">
                                                Please discuss this
                                                requirement with an advisor
                                                based on your circumstances and
                                                the applicable policy terms.
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CARE HEALTH INSURANCE */}
            <section className="bg-[#eef5fb] py-24 md:py-28">
                <div className="mx-auto max-w-6xl px-6">
                    <FadeIn>
                        <div className="text-center">
                            <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                                HEALTH INSURANCE PARTNER
                            </span>

                            <h2 className="mt-4 font-serif text-4xl text-dark-blue md:text-5xl">
                                Care Health Insurance Solutions
                            </h2>

                            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-dark-blue/60">
                                We offer assistance with selected Care Health
                                Insurance solutions, subject to product
                                availability, eligibility and applicable policy
                                terms.
                            </p>

                            <div className="mx-auto mt-8 flex h-20 max-w-xs items-center justify-center bg-white p-4">
                                <img
                                    src="https://res.cloudinary.com/djblsvzgm/image/upload/f_auto,q_auto/Care_Health_on5d4w"
                                    alt="Care Health Insurance"
                                    className="max-h-14 max-w-full object-contain"
                                />
                            </div>
                        </div>
                    </FadeIn>

                    <div className="mt-12 grid gap-4 md:grid-cols-3">
                        {[
                            "Care Supreme",
                            "Ultimate Care",
                            "Care Advantage",
                        ].map((product, index) => (
                            <FadeIn key={product} delay={index * 0.06}>
                                <article className="border border-dark-blue/10 bg-white p-7">
                                    <h3 className="font-serif text-2xl text-dark-blue">
                                        {product}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-dark-blue/60">
                                        Current product information should be
                                        referred to in the applicable official
                                        product material.
                                    </p>
                                </article>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* LATEST UPDATES */}
            <section className="bg-white py-24 md:py-28">
                <div className="mx-auto max-w-6xl px-6">
                    <FadeIn>
                        <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                            LATEST HEALTH INSURANCE UPDATES
                        </span>

                        <h2 className="mt-4 font-serif text-4xl text-dark-blue md:text-5xl">
                            Latest Health Insurance Updates
                        </h2>
                    </FadeIn>

                    <div className="mt-12 grid gap-4 md:grid-cols-3">
                        {[
                            "New Product / Product Update",
                            "Policy / Service Update",
                            "Health Insurance Awareness",
                        ].map((title, index) => (
                            <FadeIn key={title} delay={index * 0.06}>
                                <article className="border border-dark-blue/10 p-7">
                                    <span className="text-[10px] uppercase tracking-[0.15em] text-dark-blue/45">
                                        Date
                                    </span>

                                    <h3 className="mt-5 font-serif text-xl text-dark-blue">
                                        {title}
                                    </h3>

                                    <button
                                        type="button"
                                        className="mt-7 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#0054a6]"
                                    >
                                        Read More
                                    </button>
                                </article>
                            </FadeIn>
                        ))}
                    </div>

                    <p className="mt-8 text-xs leading-6 text-dark-blue/50">
                        Use only official insurer / IRDAI / verified sources
                        for updates.
                    </p>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-dark-blue py-24">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <FadeIn>
                        <ShieldCheck
                            className="mx-auto h-10 w-10 text-yellow"
                            strokeWidth={1.3}
                        />

                        <h2 className="mt-6 font-serif text-4xl text-white md:text-5xl">
                            Not Sure Which Health Insurance You Need?
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
                            Tell us about your family, health protection needs
                            and existing coverage. We&apos;ll help you
                            understand the available options.
                        </p>

                        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                            <a
                                href="https://forms.gle/JWVGEmreQPxk6HWn7" target="_blank" rel="noreferrer"
                                className="inline-flex min-h-14 items-center justify-center gap-3 bg-yellow px-7 text-xs font-semibold uppercase tracking-[0.12em] text-dark-blue hover:bg-white"
                            >
                                Get Health Insurance Quote
                                <ArrowRight className="h-4 w-4" />
                            </a>

                            <a
                                href="https://forms.gle/JWVGEmreQPxk6HWn7" target="_blank" rel="noreferrer"
                                className="inline-flex min-h-14 items-center justify-center border border-white/25 px-7 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:bg-white/10"
                            >
                                Book Free Consultation
                            </a>

                            <a
                                href="https://wa.me/919921668123"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex min-h-14 items-center justify-center border border-white/25 px-7 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:bg-white/10"
                            >
                                WhatsApp Us
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* PRODUCT MODAL */}
            <AnimatePresence>
                {selectedProduct && (
                    <ProductModal
                        title={selectedProduct}
                        onClose={() => setSelectedProduct(null)}
                    />
                )}
            </AnimatePresence>
        </main>
    );
}