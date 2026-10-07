"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EnquiryContact, Footer } from "@/components/FormsAndFooter";
import {
    ArrowRight,
    Baby,
    CheckCircle2,
    ChevronDown,
    FileText,
    GraduationCap,
    HeartHandshake,
    Landmark,
    PiggyBank,
    RefreshCw,
    ShieldCheck,
    UserRound,
    X,
} from "lucide-react";

type Solution = {
    icon: string;
    title: string;
    description: string;
    details: string[];
    cta: string;
};

type ServiceType =
    | "policy-review"
    | "premium"
    | "tax"
    | "claim"
    | null;

const solutions: Solution[] = [
    {
        icon: "🛡️",
        title: "Term Insurance",
        description:
            "High life cover designed primarily for family income protection.",
        details: [
            "What is Term Insurance?",
            "Term insurance is a life insurance solution primarily designed to provide financial protection to the family in the event of the insured person's death, subject to policy terms.",
            "Suitable for:",
            "Working professionals",
            "Parents",
            "Business owners",
            "Individuals with financial dependants",
            "People with loans/liabilities",
            "Consider income, liabilities, family responsibilities, existing cover and future goals.",
        ],
        cta: "Check My Life Cover",
    },
    {
        icon: "💰",
        title: "Savings & Endowment Plans",
        description:
            "Life insurance solutions combining protection with long-term savings-oriented benefits, subject to policy terms.",
        details: [
            "What is an Endowment Plan?",
            "Who may consider it?",
            "Long-term savings",
            "Life protection",
            "Maturity benefits as applicable",
            "Premium payment options",
            "Policy term",
            "Important conditions",
        ],
        cta: "Discuss My Requirement",
    },
    {
        icon: "🔄",
        title: "Money Back Plans",
        description:
            "Life insurance solutions that may provide survival benefits at specified intervals during the policy term, subject to applicable terms.",
        details: [
            "Money Back Plans",
            "Life insurance solutions that may provide survival benefits at specified intervals during the policy term, subject to applicable terms.",
            "Important conditions and applicable policy terms should be understood before choosing a solution.",
        ],
        cta: "Discuss My Requirement",
    },
    {
        icon: "👶",
        title: "Child Education Planning",
        description:
            "Plan today for the education and future aspirations of your child.",
        details: [
            "Education goal",
            "Time horizon",
            "Current age of child",
            "Future education cost",
            "Protection requirement",
            "Savings/investment approach",
            "Periodic review",
        ],
        cta: "Plan My Child's Future",
    },
    {
        icon: "👧",
        title: "Daughter's Future / Kanyadan Planning",
        description:
            "A goal-based financial planning approach for your daughter's education, marriage or other important future milestones.",
        details: [
            "Education",
            "Higher studies",
            "Marriage goal",
            "Long-term savings",
            "Life protection",
            "Time horizon",
        ],
        cta: "Plan for My Daughter's Future",
    },
    {
        icon: "👴",
        title: "Retirement & Pension Planning",
        description:
            "Prepare for financial independence and regular income after retirement.",
        details: [
            "Retirement age",
            "Required retirement corpus",
            "Expected expenses",
            "Inflation",
            "Existing retirement savings",
            "Pension / income requirement",
            "Life insurance-based retirement solutions",
            "SIP/investment-based retirement planning",
        ],
        cta: "Plan My Retirement",
    },
    {
        icon: "👨‍👩‍👧",
        title: "Family Protection Planning",
        description:
            "Protect your family's financial needs against the unexpected.",
        details: [
            "Family income",
            "Existing life cover",
            "Loans",
            "Children's needs",
            "Monthly expenses",
            "Future goals",
            "Emergency requirements",
        ],
        cta: "Check My Family Protection",
    },
    {
        icon: "📈",
        title: "Long-Term Savings & Financial Planning",
        description:
            "Long-term savings and financial planning options based on applicable needs and goals.",
        details: [
            "PPF",
            "Long-term savings",
            "Goal planning",
            "Retirement-oriented savings",
            "Other applicable financial options",
        ],
        cta: "Discuss My Requirement",
    },
];

const planningOptions = [
    {
        icon: <HeartHandshake className="h-6 w-6" />,
        title: "Protect My Family",
    },
    {
        icon: <GraduationCap className="h-6 w-6" />,
        title: "Child's Education",
    },
    {
        icon: <Baby className="h-6 w-6" />,
        title: "Daughter's Future",
    },
    {
        icon: <PiggyBank className="h-6 w-6" />,
        title: "Long-Term Savings",
    },
    {
        icon: <Landmark className="h-6 w-6" />,
        title: "Retirement",
    },
    {
        icon: <FileText className="h-6 w-6" />,
        title: "Review My Existing Policy",
    },
];

const services = [
    {
        title: "Premium / Renewal",
        description: "Need help with your upcoming premium?",
        cta: "Request Assistance →",
        icon: <RefreshCw className="h-6 w-6" />,
        modal: "premium" as const,
    },
    {
        title: "Tax Statement",
        description: "Need your policy-related tax statement/document?",
        cta: "Request Document →",
        icon: <FileText className="h-6 w-6" />,
        modal: "tax" as const,
    },
    {
        title: "Policy Review",
        description:
            "Not sure whether your existing policy still fits your needs?",
        cta: "Request Review →",
        icon: <ShieldCheck className="h-6 w-6" />,
        modal: "policy-review" as const,
    },
    {
        title: "Policy Revival",
        description: "Your policy has lapsed?",
        cta: "Get Revival Assistance →",
        icon: <RefreshCw className="h-6 w-6" />,
        modal: null,
    },
    {
        title: "Nomination",
        description: "Need help regarding nomination?",
        cta: "Get Assistance →",
        icon: <UserRound className="h-6 w-6" />,
        modal: null,
    },
    {
        title: "Policy Documents",
        description: "Need help with policy-related documentation?",
        cta: "Request Support →",
        icon: <FileText className="h-6 w-6" />,
        modal: null,
    },
    {
        title: "Claim Assistance",
        description: "Need guidance regarding a claim?",
        cta: "Get Claim Assistance →",
        icon: <HeartHandshake className="h-6 w-6" />,
        modal: "claim" as const,
    },
];

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

function Input({
    label,
    type = "text",
    optional = false,
}: {
    label: string;
    type?: string;
    optional?: boolean;
}) {
    return (
        <label className="block">
            <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-dark-blue/60">
                {label}
                {optional ? " — Optional" : ""}
            </span>

            <input
                type={type}
                className="h-12 w-full border border-dark-blue/15 bg-white px-4 text-sm text-dark-blue outline-none transition-colors focus:border-[#0054a6]"
            />
        </label>
    );
}

function TextArea({ label }: { label: string }) {
    return (
        <label className="block">
            <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-dark-blue/60">
                {label}
            </span>

            <textarea className="min-h-28 w-full resize-none border border-dark-blue/15 bg-white px-4 py-3 text-sm text-dark-blue outline-none transition-colors focus:border-[#0054a6]" />
        </label>
    );
}

function ServiceModal({
    type,
    onClose,
}: {
    type: Exclude<ServiceType, null>;
    onClose: () => void;
}) {
    const config = {
        "policy-review": {
            title: "Request a Policy Review",
            fields: (
                <>
                    <Input label="Name" />
                    <Input label="Mobile Number" type="tel" />
                    <Input label="Policy Type" />
                    <Input label="Policy Number" optional />
                    <Input label="Year of Policy Purchase" />
                    <Input label="Last Policy Review Date" type="date" />
                    <TextArea label="What would you like to review?" />
                    <Input label="Upload Policy Document" type="file" optional />
                </>
            ),
            button: "Submit Request",
        },
        premium: {
            title: "Premium Payment Assistance",
            fields: (
                <>
                    <Input label="Name" />
                    <Input label="Mobile" type="tel" />
                    <Input label="Policy Number" />
                    <Input label="Due Date" type="date" />
                    <TextArea label="Message" />
                </>
            ),
            button: "Submit",
        },
        tax: {
            title: "Tax Statement",
            fields: (
                <>
                    <Input label="Name" />
                    <Input label="Mobile" type="tel" />
                    <Input label="Policy Number" />
                    <Input label="Financial Year" />
                    <Input label="Document Required" />
                </>
            ),
            button: "Submit Request",
        },
        claim: {
            title: "Claim Assistance",
            fields: (
                <>
                    <Input label="Name" />
                    <Input label="Mobile" type="tel" />
                    <Input label="Policy Number" />
                    <Input label="Claim Type" />
                    <Input label="Claimant Name" />
                    <TextArea label="Message" />
                    <Input label="Upload Document" type="file" optional />
                </>
            ),
            button: "Submit Request",
        },
    }[type];

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
                            CUSTOMER SERVICE
                        </span>

                        <h3 className="mt-3 font-serif text-3xl text-dark-blue">
                            {config.title}
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

                <form
                    className="grid gap-5 p-6 md:grid-cols-2 md:p-8"
                    onSubmit={(event) => event.preventDefault()}
                >
                    {config.fields}

                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="inline-flex min-h-13 items-center gap-3 bg-[#0054a6] px-7 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-dark-blue"
                        >
                            {config.button}
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    );
}

export default function LifeInsurancePage() {
    const [selectedSolution, setSelectedSolution] =
        useState<Solution | null>(null);

    const [serviceModal, setServiceModal] =
        useState<ServiceType>(null);

    const [documentsOpen, setDocumentsOpen] = useState(false);

    const [reviewOption, setReviewOption] = useState<string | null>(null);

    return (
        <main className="bg-white">
            {/* HERO */}
            <section className="relative overflow-hidden bg-dark-blue">
                <div className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-[#0054a6]/30 blur-3xl" />

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
                            LIFE INSURANCE
                        </span>

                        <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[1.02] text-white md:text-6xl lg:text-7xl">
                            Protect What Matters Most.
                        </h1>

                        <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
                            Life Insurance solutions designed to protect your family,
                            support your goals and prepare you for the future.
                        </p>

                        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                            <a
                                href="#solutions"
                                className="group inline-flex min-h-14 items-center justify-center gap-3 bg-yellow px-7 text-xs font-semibold uppercase tracking-[0.12em] text-dark-blue hover:bg-white"
                            >
                                Explore Solutions
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>

                            <a
                                href="#contact"
                                className="inline-flex min-h-14 items-center justify-center border border-white/25 px-7 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:bg-white/10"
                            >
                                Free Consultation
                            </a>
                        </div>
                    </FadeIn>

                    <div className="mt-16 grid border border-white/15 sm:grid-cols-5">
                        {[
                            "Family Protection",
                            "Child Planning",
                            "Savings",
                            "Retirement",
                            "Policy Services",
                        ].map((item) => (
                            <a
                                key={item}
                                href="#solutions"
                                className="border-b border-white/15 px-5 py-5 text-center text-[10px] uppercase tracking-[0.13em] text-white/65 last:border-b-0 hover:bg-white/5 sm:border-b-0 sm:border-r sm:last:border-r-0"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY LIFE INSURANCE */}
            <section className="bg-white py-24 md:py-32">
                <div className="mx-auto max-w-5xl px-6">
                    <FadeIn>
                        <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                            WHY LIFE INSURANCE
                        </span>

                        <h2 className="mt-4 font-serif text-4xl text-dark-blue md:text-5xl">
                            Why Life Insurance
                        </h2>

                        <div className="mt-8 space-y-6 text-base leading-8 text-dark-blue/70">
                            <p>
                                Looking for Investing in a Life Insurance product? But not
                                sure exactly how it works?
                            </p>

                            <p>
                                Well this page is aimed to give you a complete
                                understanding on how it works and what you need to
                                understand to choose the products that suits you the
                                best. As at every life stage, everyone has a set of
                                primary needs that requires sufficient funds to fulfill
                                them. This is where life insurance comes into the
                                picture- as it offers tailor made products to cover every
                                aspect at different stages of life.
                            </p>

                            <p>
                                There is no doubt that life insurance is a must have for
                                everyone. Hence its very crucial to have a complete
                                understanding of the value a life insurance policy can
                                bring in to your life and that of your loved ones.
                            </p>

                            <p>
                                A life insurance policy is actually a contract with a
                                insurance company. A lump sum amount is provided, in
                                exchange for premium payments, known as the death
                                benefits, to the nominees or beneficiaries upon the death
                                of the insurer.
                            </p>

                            <p>
                                While choosing a life insurance, the advisor will help you
                                to map it needs & goals. This will help you pick out the
                                options that suits you the best.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* WHAT DOES IT OFFER */}
            <section className="bg-[#eef5fb] py-24 md:py-28">
                <div className="mx-auto max-w-5xl px-6">
                    <FadeIn>
                        <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                            LIFE INSURANCE
                        </span>

                        <h2 className="mt-4 font-serif text-4xl text-dark-blue md:text-5xl">
                            What Does It Offer?
                        </h2>

                        <div className="mt-8 space-y-6 text-base leading-8 text-dark-blue/70">
                            <p>
                                Insurance has lot to offer in terms financial security and
                                peace of mind. It ensures that your family is taken care
                                of in your absence. It not only helps in providing
                                coverage for all sorts of risks, but builds an opportunity
                                to help you grow your investments. Life insurance is a
                                long term investment tool that helps you meet future
                                costs like children&apos;s education expenses, retirement
                                expenses etc.
                            </p>

                            <p>
                                There are plenty of life insurance plans available,
                                depending on an individuals needs, many of these plans
                                can also be customized to meet their likes.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ORIGINAL TYPES OF INSURANCE */}
            <section className="bg-white py-24 md:py-32">
                <div className="mx-auto max-w-7xl px-6">
                    <FadeIn>
                        <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                            TYPES OF INSURANCE
                        </span>

                        <h2 className="mt-4 font-serif text-4xl text-dark-blue md:text-5xl">
                            Types Of Insurance
                        </h2>
                    </FadeIn>

                    <div className="mt-12 grid gap-4 md:grid-cols-2">
                        {[
                            {
                                title: "1. Term Life Insurance",
                                content:
                                    "The most affordable form of life insurance, premiums of plan under this category are cheap compared to other life insurance products. In the event of an unfortunate demise during the policy term, Nominees will receive the ‘Sum Assured’.",
                            },
                            {
                                title: "2. Whole Life Policy",
                                content:
                                    "As in the name, this type of policy covers an individual for his/her entire life. This type of insurance covers insurance and investment components. The insurance part covers the nominee in the event of death of the policyholder and the investment component helps the holder to borrow or withdraw against.",
                            },
                            {
                                title: "3. Endowment Plan",
                                content:
                                    "One main difference that Endowment Plans offer from term plans is the Maturity Benefit. This type of plan pays out sum assured along with profits under both scenarios - death & survival. The profits that are availed in such plans are the result of investment in equities & debt.",
                            },
                            {
                                title: "4. Unit Linked Insurance Plans (ULIPs)",
                                content:
                                    "As the name suggests, this plan is linked to the markets. This type of plan are a variant of traditional endowment plan and pay out a certain sum assured on death or maturity, whichever is earlier.",
                            },
                            {
                                title: "5. Money Back Policy",
                                content:
                                    "This type of policy gives out periodic payments over the policy term. Incase of the death of the policy holder, the beneficiaries get the full sum assured and if the holder survives the policy term, he/she gets the balance amount (sum assured).",
                            },
                        ].map((item, index) => (
                            <FadeIn key={item.title} delay={index * 0.05}>
                                <article className="h-full border border-dark-blue/10 bg-white p-7 md:p-8">
                                    <h3 className="font-serif text-2xl text-dark-blue">
                                        {item.title}
                                    </h3>

                                    <p className="mt-5 text-sm leading-7 text-dark-blue/70 md:text-base">
                                        {item.content}
                                    </p>
                                </article>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* SOLUTIONS */}
            <section
                id="solutions"
                className="bg-slate-50 py-24 md:py-32"
            >
                <div className="mx-auto max-w-7xl px-6">
                    <FadeIn>
                        <div className="text-center">
                            <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                                LIFE INSURANCE SOLUTIONS
                            </span>

                            <h2 className="mt-4 font-serif text-4xl text-dark-blue md:text-5xl">
                                Explore Our Life Insurance Solutions
                            </h2>
                        </div>
                    </FadeIn>

                    <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {solutions.map((solution, index) => (
                            <FadeIn key={solution.title} delay={index * 0.05}>
                                <article className="group h-full border border-dark-blue/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-yellow hover:shadow-[0_16px_35px_rgba(0,59,115,0.08)]">
                                    <div className="text-3xl">
                                        {solution.icon}
                                    </div>

                                    <h3 className="mt-6 font-serif text-xl leading-6 text-dark-blue">
                                        {solution.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-6 text-dark-blue/60">
                                        {solution.description}
                                    </p>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setSelectedSolution(solution)
                                        }
                                        className="mt-7 inline-flex items-center gap-2 border-b border-dark-blue/25 pb-2 text-[10px] uppercase tracking-[0.16em] text-dark-blue hover:border-yellow"
                                    >
                                        Learn More
                                        <ArrowRight className="h-3.5 w-3.5" />
                                    </button>
                                </article>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHAT ARE YOU PLANNING FOR */}
            <section className="bg-white py-24 md:py-28">
                <div className="mx-auto max-w-6xl px-6">
                    <FadeIn>
                        <div className="text-center">
                            <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                                WHICH SOLUTION ARE YOU LOOKING FOR?
                            </span>

                            <h2 className="mt-4 font-serif text-4xl text-dark-blue md:text-5xl">
                                What Are You Planning For?
                            </h2>
                        </div>
                    </FadeIn>

                    <div className="mt-12 grid gap-4 md:grid-cols-3">
                        {planningOptions.map((item, index) => (
                            <FadeIn key={item.title} delay={index * 0.05}>
                                <a
                                    href="#contact"
                                    className="flex items-center gap-5 border border-dark-blue/10 bg-white p-6 transition-colors hover:border-yellow hover:bg-[#eef5fb]"
                                >
                                    <span className="text-[#0054a6]">
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

            {/* CUSTOMER SERVICE */}
            <section className="bg-dark-blue py-24 md:py-32">
                <div className="mx-auto max-w-7xl px-6">
                    <FadeIn>
                        <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                            CUSTOMER SERVICE
                        </span>

                        <h2 className="mt-4 font-serif text-4xl text-white md:text-5xl">
                            Need Help With Your Existing Policy?
                        </h2>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
                            Our relationship doesn&apos;t end after the policy is purchased.
                        </p>
                    </FadeIn>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {services.map((service, index) => (
                            <FadeIn
                                key={service.title}
                                delay={index * 0.05}
                            >
                                <article className="flex h-full flex-col border border-white/15 bg-white/[0.04] p-7">
                                    <div className="text-yellow">
                                        {service.icon}
                                    </div>

                                    <h3 className="mt-6 font-serif text-xl text-white">
                                        {service.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-6 text-white/60">
                                        {service.description}
                                    </p>

                                    {service.modal ? (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setServiceModal(service.modal)
                                            }
                                            className="mt-auto pt-7 text-left text-[10px] font-semibold uppercase tracking-[0.15em] text-yellow"
                                        >
                                            {service.cta}
                                        </button>
                                    ) : (
                                        <a
                                            href="#documents"
                                            className="mt-auto pt-7 text-[10px] font-semibold uppercase tracking-[0.15em] text-yellow"
                                        >
                                            {service.cta}
                                        </a>
                                    )}
                                </article>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* DOCUMENTS */}
            <section
                id="documents"
                className="bg-[#eef5fb] py-24 md:py-28"
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
                                    CUSTOMER SUPPORT
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
                                    {[
                                        {
                                            title: "Policy Review",
                                            items: [
                                                "Existing policy document",
                                                "Premium receipt",
                                                "Existing policy details",
                                                "Nomination details, if relevant",
                                            ],
                                        },
                                        {
                                            title: "Claim Assistance",
                                            items: [
                                                "Policy document",
                                                "Claim-related documents",
                                                "Identity/address documents as applicable",
                                                "Medical/hospital documents where applicable",
                                            ],
                                        },
                                        {
                                            title: "Policy Revival",
                                            items: [
                                                "Policy details",
                                                "Applicable revival requirements",
                                                "Identity/documents as required by insurer",
                                            ],
                                        },
                                        {
                                            title: "Nomination",
                                            items: [
                                                "Policy details",
                                                "Nominee details",
                                                "Applicable KYC/supporting documents",
                                            ],
                                        },
                                    ].map((group) => (
                                        <div
                                            key={group.title}
                                            className="border border-dark-blue/10 bg-white p-7"
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
                                    Document requirements may vary depending on the
                                    service, insurer and case. We will guide you
                                    regarding the applicable documents.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* OLD POLICY REVIEW */}
            <section className="bg-white py-24 md:py-32">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                        <FadeIn>
                            <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                                OLD POLICY REVIEW
                            </span>

                            <h2 className="mt-4 font-serif text-4xl text-dark-blue md:text-5xl">
                                Have an Old Life Insurance Policy?
                            </h2>

                            <p className="mt-6 text-base leading-8 text-dark-blue/70">
                                Your policy may have been purchased years ago. Your
                                income, family responsibilities and financial goals may
                                have changed since then.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="border border-dark-blue/10 bg-[#eef5fb] p-7 md:p-9">
                                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-dark-blue">
                                    When was your policy last reviewed?
                                </p>

                                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                    {[
                                        "Never",
                                        "More than 3 years ago",
                                        "1–3 years ago",
                                        "Within the last year",
                                        "Not Sure",
                                    ].map((option) => (
                                        <button
                                            key={option}
                                            type="button"
                                            onClick={() =>
                                                setReviewOption(option)
                                            }
                                            className={`border px-5 py-4 text-left text-sm transition-colors ${reviewOption === option
                                                ? "border-yellow bg-white text-dark-blue"
                                                : "border-dark-blue/10 bg-white/60 text-dark-blue/65 hover:border-yellow"
                                                }`}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>

                                <a
                                    href="#contact"
                                    className="mt-7 inline-flex min-h-13 items-center gap-3 bg-[#0054a6] px-7 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:bg-dark-blue"
                                >
                                    Get a Free Policy Review
                                    <ArrowRight className="h-4 w-4" />
                                </a>

                                <p className="mt-6 text-sm leading-7 text-dark-blue/60">
                                    Bring your existing policy documents. We will help
                                    you understand your current coverage, benefits,
                                    premium, policy term and whether it still aligns
                                    with your current needs.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* BENEFITS OF INSURANCE */}
            <section className="bg-[#eef5fb] py-24 md:py-28">
                <div className="mx-auto max-w-6xl px-6">
                    <FadeIn>
                        <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                            BENEFITS OF INSURANCE
                        </span>

                        <h2 className="mt-4 font-serif text-4xl text-dark-blue md:text-5xl">
                            Benefits Of Insurance
                        </h2>

                        <div className="mt-8 space-y-6 text-base leading-8 text-dark-blue/70">
                            <p>
                                Most of us are often tend to ignore the importance of
                                sound policy as we think it not required and what could
                                possibly happen to us.
                            </p>

                            <p>
                                This leads us to believe that life insurance is not worth
                                the money for but a sudden mishap/accident leaves us
                                feeling fearful of the future-for us & our family.
                            </p>

                            <p>
                                There is no two way about what an individual wants-
                                financial security & protection; for which life insurance
                                is the best option available. There are multiple
                                advantages to availing a life insurance plan, let us
                                glance at them:
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* SHARED ENQUIRY FORM */}
            <EnquiryContact />

            {/* FINAL CTA */}
            <section className="bg-dark-blue py-24">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <FadeIn>
                        <ShieldCheck
                            className="mx-auto h-10 w-10 text-yellow"
                            strokeWidth={1.3}
                        />

                        <h2 className="mt-6 font-serif text-4xl text-white md:text-5xl">
                            Not Sure Which Life Insurance Solution You Need?
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
                            Tell us about your requirement. We will help you
                            understand your options.
                        </p>

                        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                            <a
                                href="#contact"
                                className="inline-flex min-h-14 items-center justify-center gap-3 bg-yellow px-7 text-xs font-semibold uppercase tracking-[0.12em] text-dark-blue hover:bg-white"
                            >
                                Book a Free Consultation
                                <ArrowRight className="h-4 w-4" />
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

            {/* SOLUTION MODAL */}
            <AnimatePresence>
                {selectedSolution && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-dark-blue/60 p-4 backdrop-blur-sm"
                        onClick={() => setSelectedSolution(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 25, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 25, scale: 0.98 }}
                            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-white"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <div className="flex items-start justify-between gap-6 border-b border-dark-blue/10 p-6 md:p-8">
                                <div>
                                    <div className="text-3xl">
                                        {selectedSolution.icon}
                                    </div>

                                    <h3 className="mt-4 font-serif text-3xl text-dark-blue">
                                        {selectedSolution.title}
                                    </h3>
                                </div>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setSelectedSolution(null)
                                    }
                                    aria-label="Close details"
                                    className="flex h-10 w-10 shrink-0 items-center justify-center border border-dark-blue/15 text-dark-blue hover:border-yellow"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="p-6 md:p-8">
                                <div className="space-y-4">
                                    {selectedSolution.details.map(
                                        (detail, index) => (
                                            <p
                                                key={`${index}-${detail}`}
                                                className={
                                                    index === 0 ||
                                                        detail.endsWith(":")
                                                        ? "font-medium text-dark-blue"
                                                        : "text-sm leading-7 text-dark-blue/70"
                                                }
                                            >
                                                {detail}
                                            </p>
                                        ),
                                    )}
                                </div>

                                <a
                                    href="#contact"
                                    onClick={() =>
                                        setSelectedSolution(null)
                                    }
                                    className="mt-8 inline-flex min-h-13 items-center gap-3 bg-[#0054a6] px-6 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:bg-dark-blue"
                                >
                                    {selectedSolution.cta}
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CUSTOMER SERVICE MODAL */}
            <AnimatePresence>
                {serviceModal && (
                    <ServiceModal
                        type={serviceModal}
                        onClose={() => setServiceModal(null)}
                    />
                )}
            </AnimatePresence>

            <Footer />
        </main>
    );
}