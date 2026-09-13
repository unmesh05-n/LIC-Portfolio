"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowDown,
    ArrowRight,
    Award,
    BriefcaseBusiness,
    Check,
    ChevronLeft,
    ChevronRight,
    Clock3,
    ExternalLink,
    Shield,
    TrendingUp,
    Users,
    X,
} from "lucide-react";

import { siteData } from "@/lib/data";
import {
    ImageReveal,
    SpatialSection,
    SpotlightCard,
} from "./Animations";

type FadeInProps = {
    children: React.ReactNode;
    delay?: number;
    className?: string;
};

const FadeIn = ({
    children,
    delay = 0,
    className = "",
}: FadeInProps) => (
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.18 }}
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

const serviceIcons = [
    Shield,
    TrendingUp,
    Award,
    Users,
    BriefcaseBusiness,
    Check,
];

function SectionIntro({
    eyebrow,
    title,
    description,
    align = "left",
}: {
    eyebrow: string;
    title: string;
    description?: string;
    align?: "left" | "center";
}) {
    return (
        <FadeIn>
            <div
                className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""
                    }`}
            >
                <span className="text-[11px] uppercase tracking-[0.24em] text-silver">
                    {eyebrow}
                </span>

                <h2 className="mt-4 font-serif text-4xl leading-[1.08] text-off-white md:text-5xl lg:text-6xl">
                    {title}
                </h2>

                {description && (
                    <p className="mt-6 max-w-2xl text-base leading-7 text-light-silver/80 md:text-lg">
                        {description}
                    </p>
                )}
            </div>
        </FadeIn>
    );
}

function ExploreButton({
    label,
    href,
    onClick,
}: {
    label: string;
    href?: string;
    onClick?: () => void;
}) {
    const className =
        "group inline-flex items-center gap-3 border-b border-silver/40 pb-2 text-xs uppercase tracking-[0.18em] text-off-white transition-colors duration-300 hover:border-silver hover:text-silver";

    if (onClick) {
        return (
            <button
                type="button"
                onClick={onClick}
                className={className}
            >
                {label}

                <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={1.5}
                />
            </button>
        );
    }

    return (
        <a href={href ?? "#"} className={className}>
            {label}

            <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
            />
        </a>
    );
}

type EditorialPanelProps = {
    open: boolean;
    onClose: () => void;
    eyebrow: string;
    title: string;
    description?: string;
    children: React.ReactNode;
    width?: "default" | "wide";
};

function EditorialPanel({
    open,
    onClose,
    eyebrow,
    title,
    description,
    children,
    width = "default",
}: EditorialPanelProps) {
    useEffect(() => {
        if (!open) {
            return;
        }

        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [open, onClose]);

    if (!open) {
        return null;
    }

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[40] bg-midnight/75 backdrop-blur-[3px]"
                onClick={onClose}
                aria-hidden="true"
            />

            <motion.div
                initial={{ opacity: 0, y: 28, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 28, scale: 0.985 }}
                transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                }}
                role="dialog"
                aria-modal="true"
                aria-labelledby="editorial-panel-title"
                className={`fixed inset-x-3 bottom-3 top-20 z-[45] overflow-hidden border border-silver/20 bg-secondary-dark shadow-2xl shadow-black/40 sm:inset-x-6 sm:bottom-6 ${width === "wide"
                    ? "md:left-1/2 md:right-auto md:w-[min(1120px,calc(100vw-48px))] md:-translate-x-1/2"
                    : "md:left-1/2 md:right-auto md:w-[min(900px,calc(100vw-48px))] md:-translate-x-1/2"
                    }`}
                onClick={(event) => event.stopPropagation()}
            >
                <div className="flex h-full flex-col">
                    <div className="flex shrink-0 items-start justify-between gap-6 border-b border-silver/10 px-6 py-6 sm:px-8 md:px-10">
                        <div className="min-w-0">
                            <span className="text-[10px] uppercase tracking-[0.24em] text-silver">
                                {eyebrow}
                            </span>

                            <h2
                                id="editorial-panel-title"
                                className="mt-3 max-w-3xl font-serif text-3xl leading-[1.08] text-off-white sm:text-4xl md:text-5xl"
                            >
                                {title}
                            </h2>

                            {description && (
                                <p className="mt-4 max-w-2xl text-sm leading-7 text-light-silver/70 md:text-base">
                                    {description}
                                </p>
                            )}
                        </div>

                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Close details"
                            className="group flex h-10 w-10 shrink-0 items-center justify-center border border-silver/15 text-light-silver transition-colors duration-300 hover:border-silver/40 hover:text-off-white"
                        >
                            <X
                                className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90"
                                strokeWidth={1.4}
                            />
                        </button>
                    </div>

                    <div
                        className={`min-h-0 flex-1 overflow-y-auto px-6 py-8 sm:px-8 md:px-10 md:py-10 ${width === "wide" ? "max-w-none" : ""
                            }`}
                    >
                        {children}
                    </div>
                </div>
            </motion.div>
        </>
    );
}

function DetailParagraphs({
    paragraphs,
}: {
    paragraphs: readonly string[];
}) {
    return (
        <div className="space-y-5">
            {paragraphs.map((paragraph, index) => (
                <p
                    key={`${paragraph.slice(0, 24)}-${index}`}
                    className="text-sm leading-7 text-light-silver/75 md:text-base"
                >
                    {paragraph}
                </p>
            ))}
        </div>
    );
}

function DetailList({
    items,
}: {
    items: readonly string[];
}) {
    return (
        <ul className="space-y-4">
            {items.map((item, index) => (
                <li
                    key={`${item}-${index}`}
                    className="flex items-start gap-4 border-b border-silver/10 pb-4 last:border-b-0"
                >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-silver" />
                    <span className="text-sm leading-7 text-light-silver/80 md:text-base">
                        {item}
                    </span>
                </li>
            ))}
        </ul>
    );
}

function PanelSectionHeading({
    eyebrow,
    title,
}: {
    eyebrow?: string;
    title: string;
}) {
    return (
        <div className="mb-7">
            {eyebrow && (
                <span className="text-[10px] uppercase tracking-[0.22em] text-silver/80">
                    {eyebrow}
                </span>
            )}

            <h3 className="mt-2 font-serif text-2xl text-off-white md:text-3xl">
                {title}
            </h3>
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/* 02 — CREDIBILITY SNAPSHOT                                                  */
/* -------------------------------------------------------------------------- */

export function Stats() {
    return (
        <section
            aria-label="Professional highlights"
            className="border-y border-silver/10 bg-secondary-dark"
        >
            <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x-0 px-6 py-14 md:grid-cols-4 md:divide-x md:py-18">
                {siteData.stats.map((stat, index) => (
                    <FadeIn
                        key={`${stat.label}-${index}`}
                        delay={index * 0.08}
                        className="px-5 py-4 text-center md:px-8"
                    >
                        <div className="font-serif text-4xl leading-none text-off-white md:text-5xl">
                            {stat.value}
                        </div>

                        <div className="mt-3 text-[11px] uppercase tracking-[0.18em] text-silver">
                            {stat.label}
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}

/* -------------------------------------------------------------------------- */
/* 03 — PROFESSIONAL PROFILE                                                   */
/* -------------------------------------------------------------------------- */

export function About() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section
                id="about"
                className="bg-midnight py-28 md:py-36"
            >
                <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-[0.9fr_1.1fr] md:gap-20 lg:gap-28">
                    <FadeIn>
                        <div className="relative mx-auto max-w-xl">
                            <div className="absolute -inset-3 border border-silver/10" />

                            <div className="relative aspect-[4/5] overflow-hidden bg-navy">
                                <ImageReveal
                                    src={siteData.about.image}
                                    alt={siteData.about.imageAlt}
                                    className="h-full w-full"
                                />
                            </div>

                            <div className="absolute -bottom-5 -right-5 hidden h-24 w-24 border-b border-r border-silver/30 md:block" />
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.15}>
                        <div>
                            <span className="text-[11px] uppercase tracking-[0.24em] text-silver">
                                {siteData.about.eyebrow}
                            </span>

                            <h2 className="mt-5 whitespace-pre-line font-serif text-4xl leading-[1.1] text-off-white md:text-5xl lg:text-6xl">
                                {siteData.about.headline}
                            </h2>

                            <p className="mt-7 max-w-2xl text-base leading-7 text-light-silver/85">
                                {siteData.about.introduction}
                            </p>

                            <div className="mt-6 space-y-5 text-[15px] leading-7 text-light-silver/75">
                                {siteData.about.paragraphs.map(
                                    (paragraph, index) => (
                                        <p
                                            key={`${paragraph.slice(
                                                0,
                                                20,
                                            )}-${index}`}
                                        >
                                            {paragraph}
                                        </p>
                                    ),
                                )}
                            </div>

                            <ul className="mt-8 space-y-3 border-t border-silver/10 pt-7">
                                {siteData.about.highlights.map(
                                    (highlight, index) => (
                                        <li
                                            key={`${highlight}-${index}`}
                                            className="flex items-start gap-3 text-sm text-off-white"
                                        >
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-silver" />
                                            <span>{highlight}</span>
                                        </li>
                                    ),
                                )}
                            </ul>

                            <div className="mt-10">
                                <ExploreButton
                                    label="Read the full profile"
                                    onClick={() => setIsOpen(true)}
                                />
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <EditorialPanel
                open={isOpen}
                onClose={() => setIsOpen(false)}
                eyebrow={siteData.about.eyebrow}
                title={siteData.about.readMoreTitle}
                description="A closer look at the professional background and experience behind the practice."
            >
                <div className="mx-auto max-w-3xl">
                    <DetailParagraphs
                        paragraphs={siteData.about.readMoreContent}
                    />

                    <div className="mt-10 border-t border-silver/10 pt-8">
                        <PanelSectionHeading title="Professional highlights" />
                        <DetailList items={siteData.about.highlights} />
                    </div>
                </div>
            </EditorialPanel>
        </>
    );
}

/* -------------------------------------------------------------------------- */
/* 04 — PROFESSIONAL REACH                                                    */
/* -------------------------------------------------------------------------- */

export function Experience() {
    const [isOpen, setIsOpen] = useState(false);

    const reachItems = [
        {
            number: "01",
            title: "Insurance Consultancy",
            description:
                "Professional insurance guidance built around protection requirements and informed decisions.",
        },
        {
            number: "02",
            title: "Financial Guidance",
            description:
                "Financial planning, investment-related guidance and wealth-creation support.",
        },
        {
            number: "03",
            title: "Business Risk",
            description:
                "Insurance and risk-management support relevant to businesses and their people.",
        },
        {
            number: "04",
            title: "Broader Protection",
            description:
                "Health, family and general insurance support across a range of requirements.",
        },
    ];

    return (
        <>
            <section
                id="reach"
                className="relative overflow-hidden bg-secondary-dark py-28 md:py-36"
            >
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                        <SectionIntro
                            eyebrow="PROFESSIONAL REACH"
                            title="A Practice Built Around Real Financial Needs."
                            description="Her work extends across insurance, financial guidance, investment-related consultancy and risk management for individuals, families and businesses."
                        />

                        <FadeIn delay={0.15}>
                            <div className="grid gap-px overflow-hidden border border-silver/10 bg-silver/10 sm:grid-cols-2">
                                {reachItems.map((item) => (
                                    <div
                                        key={item.number}
                                        className="group bg-secondary-dark p-7 transition-colors duration-500 hover:bg-midnight md:p-8"
                                    >
                                        <span className="font-serif text-2xl text-silver/45">
                                            {item.number}
                                        </span>

                                        <h3 className="mt-6 text-lg text-off-white">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-light-silver/70">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>

                    <FadeIn
                        delay={0.2}
                        className="mt-14 flex flex-col items-center gap-7 text-center"
                    >
                        <ExploreButton
                            label="Explore professional reach"
                            onClick={() => setIsOpen(true)}
                        />

                        <a
                            href="#lic"
                            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-silver transition-colors hover:text-off-white"
                        >
                            Continue to LIC association

                            <ArrowDown
                                className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1"
                                strokeWidth={1.5}
                            />
                        </a>
                    </FadeIn>
                </div>
            </section>

            <EditorialPanel
                open={isOpen}
                onClose={() => setIsOpen(false)}
                eyebrow="PROFESSIONAL REACH"
                title="The breadth of the practice"
                description="The practice brings together multiple areas of insurance and financial guidance without reducing the work to a single product or service."
                width="wide"
            >
                <div className="mx-auto max-w-4xl">
                    <div className="grid gap-5 md:grid-cols-2">
                        {siteData.services.map((service, index) => (
                            <article
                                key={`${service.title}-${index}-reach`}
                                className="border border-silver/10 bg-midnight p-7"
                            >
                                <span className="font-serif text-2xl text-silver/45">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <h3 className="mt-5 font-serif text-2xl text-off-white">
                                    {service.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-light-silver/75">
                                    {service.description}
                                </p>

                                <div className="mt-6 border-t border-silver/10 pt-6">
                                    <DetailList items={service.details} />
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </EditorialPanel>
        </>
    );
}

/* -------------------------------------------------------------------------- */
/* 05 — LIC ASSOCIATION                                                        */
/* -------------------------------------------------------------------------- */

export function LicAssociation() {
    const lic = siteData.lic;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section
                id="lic"
                className="relative overflow-hidden bg-navy py-28 md:py-36"
            >
                <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
                    <FadeIn>
                        <div>
                            <span className="text-[11px] uppercase tracking-[0.24em] text-silver">
                                {lic.eyebrow}
                            </span>

                            <h2 className="mt-5 font-serif text-4xl leading-[1.08] text-off-white md:text-5xl lg:text-6xl">
                                {lic.title}
                            </h2>

                            <p className="mt-7 max-w-2xl text-base leading-7 text-light-silver/80">
                                {lic.description}
                            </p>

                            <div className="mt-9 grid gap-4 sm:grid-cols-2">
                                {lic.highlights.map((highlight, index) => (
                                    <div
                                        key={`${highlight}-${index}`}
                                        className="border-l border-silver/20 pl-4"
                                    >
                                        <span className="text-sm leading-6 text-off-white">
                                            {highlight}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10">
                                <ExploreButton
                                    label="Explore the LIC association"
                                    onClick={() => setIsOpen(true)}
                                />
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.15}>
                        <div className="relative">
                            <div className="aspect-[4/5] overflow-hidden border border-silver/10 bg-secondary-dark">
                                <ImageReveal
                                    src={lic.image}
                                    alt={lic.imageAlt}
                                    className="h-full w-full"
                                />
                            </div>

                            <div className="absolute -bottom-4 -left-4 border border-silver/20 bg-midnight/90 px-5 py-4 backdrop-blur-sm">
                                <BriefcaseBusiness
                                    className="mb-2 h-5 w-5 text-silver"
                                    strokeWidth={1.4}
                                />

                                <span className="text-[10px] uppercase tracking-[0.18em] text-light-silver">
                                    {lic.role}
                                </span>

                                <p className="mt-1 text-xs text-silver/70">
                                    Since {lic.associationSince}
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <EditorialPanel
                open={isOpen}
                onClose={() => setIsOpen(false)}
                eyebrow={lic.eyebrow}
                title={lic.title}
                description={lic.description}
            >
                <div className="mx-auto max-w-3xl">
                    <div className="mb-9 grid gap-4 sm:grid-cols-2">
                        {lic.highlights.map((highlight, index) => (
                            <div
                                key={`${highlight}-${index}-panel`}
                                className="border border-silver/10 bg-midnight/50 p-5"
                            >
                                <span className="text-[10px] uppercase tracking-[0.18em] text-silver/60">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <p className="mt-3 text-sm leading-7 text-off-white">
                                    {highlight}
                                </p>
                            </div>
                        ))}
                    </div>

                    {lic.detailedContent?.length > 0 && (
                        <div className="border-t border-silver/10 pt-9">
                            <PanelSectionHeading
                                eyebrow="Professional association"
                                title="The LIC chapter"
                            />

                            <DetailParagraphs
                                paragraphs={lic.detailedContent}
                            />
                        </div>
                    )}

                    {lic.officialLink && (
                        <div className="mt-9 border-t border-silver/10 pt-7">
                            <a
                                href={lic.officialLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-silver transition-colors hover:text-off-white"
                            >
                                Visit official LIC website
                                <ExternalLink
                                    className="h-3.5 w-3.5"
                                    strokeWidth={1.5}
                                />
                            </a>
                        </div>
                    )}
                </div>
            </EditorialPanel>
        </>
    );
}

/* -------------------------------------------------------------------------- */
/* 06 — EXPERTISE & SERVICES                                                  */
/* -------------------------------------------------------------------------- */

export function Services() {
    const [selectedServiceIndex, setSelectedServiceIndex] = useState<
        number | null
    >(null);

    const selectedService =
        selectedServiceIndex !== null
            ? siteData.services[selectedServiceIndex]
            : null;

    return (
        <>
            <section
                id="services"
                className="overflow-hidden bg-midnight py-28 md:py-36"
            >
                <SpatialSection>
                    <div className="mx-auto max-w-7xl px-6">
                        <SectionIntro
                            eyebrow={siteData.servicesIntro.eyebrow}
                            title={siteData.servicesIntro.title}
                            description={siteData.servicesIntro.description}
                        />

                        <div className="mt-16 grid gap-5 md:grid-cols-2">
                            {siteData.services.map((service, index) => {
                                const Icon =
                                    serviceIcons[
                                    index % serviceIcons.length
                                    ];

                                return (
                                    <SpotlightCard
                                        key={`${service.title}-${index}`}
                                        className="group h-full rounded-sm border border-silver/15 bg-secondary-dark p-7 md:p-9"
                                    >
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setSelectedServiceIndex(index)
                                            }
                                            className="flex h-full w-full flex-col text-left"
                                        >
                                            <div className="flex items-start justify-between gap-6">
                                                <div className="flex h-11 w-11 items-center justify-center border border-silver/20 bg-midnight">
                                                    <Icon
                                                        className="h-5 w-5 text-silver"
                                                        strokeWidth={1.4}
                                                    />
                                                </div>

                                                <span className="font-serif text-sm text-silver/60">
                                                    {String(index + 1).padStart(
                                                        2,
                                                        "0",
                                                    )}
                                                </span>
                                            </div>

                                            <h3 className="mt-8 font-serif text-2xl text-off-white">
                                                {service.title}
                                            </h3>

                                            <p className="mt-4 text-sm leading-7 text-light-silver/75">
                                                {service.description}
                                            </p>

                                            {service.benefit && (
                                                <div className="mt-6 border-t border-silver/10 pt-5">
                                                    <div className="flex gap-3 text-sm leading-6 text-off-white">
                                                        <Check
                                                            className="mt-1 h-4 w-4 shrink-0 text-silver"
                                                            strokeWidth={1.5}
                                                        />

                                                        <span>
                                                            {service.benefit}
                                                        </span>
                                                    </div>
                                                </div>
                                            )}

                                            <div className="mt-auto flex items-center gap-2 pt-8 text-[10px] uppercase tracking-[0.18em] text-silver/70 transition-colors duration-300 group-hover:text-silver">
                                                Explore service

                                                <ArrowRight
                                                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                                                    strokeWidth={1.5}
                                                />
                                            </div>
                                        </button>
                                    </SpotlightCard>
                                );
                            })}
                        </div>
                    </div>
                </SpatialSection>
            </section>

            <EditorialPanel
                open={selectedService !== null}
                onClose={() => setSelectedServiceIndex(null)}
                eyebrow="EXPERTISE"
                title={selectedService?.title ?? ""}
                description={selectedService?.description}
            >
                {selectedService && (
                    <div className="mx-auto max-w-3xl">
                        {selectedService.benefit && (
                            <div className="mb-9 border border-silver/15 bg-midnight/60 p-6">
                                <div className="flex gap-4">
                                    <Check
                                        className="mt-1 h-5 w-5 shrink-0 text-silver"
                                        strokeWidth={1.4}
                                    />

                                    <div>
                                        <span className="text-[10px] uppercase tracking-[0.18em] text-silver">
                                            Client outcome
                                        </span>

                                        <p className="mt-2 text-sm leading-7 text-off-white md:text-base">
                                            {selectedService.benefit}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {selectedService.details?.length > 0 && (
                            <div>
                                <PanelSectionHeading
                                    eyebrow="Understanding the service"
                                    title="What this includes"
                                />

                                <DetailList
                                    items={selectedService.details}
                                />
                            </div>
                        )}
                    </div>
                )}
            </EditorialPanel>
        </>
    );
}

/* -------------------------------------------------------------------------- */
/* 07 — RECOGNITION / PROFESSIONAL PROOF                                     */
/* -------------------------------------------------------------------------- */

export function Achievements() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section
                id="achievements"
                className="border-y border-silver/10 bg-secondary-dark py-28 md:py-32"
            >
                <div className="mx-auto max-w-7xl px-6">
                    <SectionIntro
                        eyebrow={siteData.achievementsIntro.eyebrow}
                        title={siteData.achievementsIntro.title}
                        description={siteData.achievementsIntro.description}
                        align="center"
                    />

                    <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {siteData.achievements.map((achievement, index) => (
                            <FadeIn
                                key={`${achievement.category}-${index}`}
                                delay={index * 0.07}
                            >
                                <article className="group h-full border border-silver/10 bg-midnight p-7 transition-colors duration-500 hover:border-silver/25 md:p-8">
                                    <div className="mb-8 flex items-center justify-between">
                                        <Award
                                            className="h-6 w-6 text-silver"
                                            strokeWidth={1.3}
                                        />

                                        <span className="text-[10px] uppercase tracking-[0.18em] text-silver/50">
                                            {String(index + 1).padStart(
                                                2,
                                                "0",
                                            )}
                                        </span>
                                    </div>

                                    <h3 className="text-lg text-off-white">
                                        {achievement.title ||
                                            achievement.category}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-light-silver/70">
                                        {achievement.description}
                                    </p>

                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(true)}
                                        className="mt-7 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-silver/70 transition-colors duration-300 hover:text-silver"
                                    >
                                        View professional proof

                                        <ArrowRight
                                            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                                            strokeWidth={1.5}
                                        />
                                    </button>
                                </article>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            <EditorialPanel
                open={isOpen}
                onClose={() => setIsOpen(false)}
                eyebrow={siteData.achievementsIntro.eyebrow}
                title="Professional proof"
                description={siteData.achievementsIntro.description}
                width="wide"
            >
                <div className="mx-auto max-w-4xl">
                    <div className="grid gap-5 md:grid-cols-2">
                        {siteData.achievements.map((achievement, index) => (
                            <article
                                key={`${achievement.category}-${index}-detail`}
                                className="border border-silver/10 bg-midnight p-6 md:p-7"
                            >
                                <div className="flex items-center justify-between gap-5">
                                    <Award
                                        className="h-5 w-5 text-silver"
                                        strokeWidth={1.3}
                                    />

                                    <span className="text-[10px] uppercase tracking-[0.18em] text-silver/50">
                                        {String(index + 1).padStart(
                                            2,
                                            "0",
                                        )}
                                    </span>
                                </div>

                                <h3 className="mt-6 font-serif text-2xl text-off-white md:text-3xl">
                                    {achievement.title ||
                                        achievement.category}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-light-silver/75">
                                    {achievement.description}
                                </p>

                                {achievement.details?.length > 0 && (
                                    <div className="mt-6 border-t border-silver/10 pt-6">
                                        <DetailList
                                            items={achievement.details}
                                        />
                                    </div>
                                )}
                            </article>
                        ))}
                    </div>
                </div>
            </EditorialPanel>
        </>
    );
}

/* -------------------------------------------------------------------------- */
/* 08 — PROFESSIONAL GALLERY                                                  */
/* -------------------------------------------------------------------------- */

export function Gallery() {
    const [selectedGalleryIndex, setSelectedGalleryIndex] = useState<
        number | null
    >(null);

    const selectedGalleryItem =
        selectedGalleryIndex !== null
            ? siteData.gallery[selectedGalleryIndex]
            : null;

    const goToPrevious = () => {
        if (
            selectedGalleryIndex === null ||
            siteData.gallery.length === 0
        ) {
            return;
        }

        setSelectedGalleryIndex(
            selectedGalleryIndex === 0
                ? siteData.gallery.length - 1
                : selectedGalleryIndex - 1,
        );
    };

    const goToNext = () => {
        if (
            selectedGalleryIndex === null ||
            siteData.gallery.length === 0
        ) {
            return;
        }

        setSelectedGalleryIndex(
            selectedGalleryIndex === siteData.gallery.length - 1
                ? 0
                : selectedGalleryIndex + 1,
        );
    };

    return (
        <>
            <section
                id="gallery"
                className="bg-midnight py-28 md:py-36"
            >
                <div className="mx-auto max-w-7xl px-6">
                    <SectionIntro
                        eyebrow={siteData.galleryIntro.eyebrow}
                        title={siteData.galleryIntro.title}
                        description={siteData.galleryIntro.description}
                        align="center"
                    />

                    <div className="mt-16 grid gap-4 md:grid-cols-12 md:grid-rows-2">
                        {siteData.gallery.map((item, index) => (
                            <FadeIn
                                key={`${item.title}-${index}`}
                                delay={index * 0.07}
                                className={
                                    index === 0
                                        ? "md:col-span-7 md:row-span-2"
                                        : "md:col-span-5"
                                }
                            >
                                <button
                                    type="button"
                                    onClick={() =>
                                        setSelectedGalleryIndex(index)
                                    }
                                    className="group relative block h-full min-h-64 w-full overflow-hidden bg-secondary-dark text-left"
                                    aria-label={`Open ${item.title}`}
                                >
                                    <ImageReveal
                                        src={item.image}
                                        alt={item.alt}
                                        className="h-full min-h-64 w-full"
                                    />

                                    <div className="absolute inset-0 bg-midnight/0 transition-colors duration-500 group-hover:bg-midnight/20" />

                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-midnight/90 via-midnight/30 to-transparent p-6 pt-20">
                                        <span className="text-[10px] uppercase tracking-[0.18em] text-silver">
                                            {item.category}
                                        </span>

                                        <h3 className="mt-2 font-serif text-xl text-off-white">
                                            {item.title}
                                        </h3>

                                        <span className="mt-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-light-silver/70 transition-colors group-hover:text-off-white">
                                            View moment

                                            <ArrowRight
                                                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                                                strokeWidth={1.4}
                                            />
                                        </span>
                                    </div>
                                </button>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            <EditorialPanel
                open={selectedGalleryItem !== null}
                onClose={() => setSelectedGalleryIndex(null)}
                eyebrow={selectedGalleryItem?.category ?? "Gallery"}
                title={selectedGalleryItem?.title ?? ""}
                description={selectedGalleryItem?.description}
                width="wide"
            >
                {selectedGalleryItem &&
                    selectedGalleryIndex !== null && (
                        <div className="mx-auto max-w-5xl">
                            <div className="relative overflow-hidden border border-silver/10 bg-midnight">
                                <div className="aspect-[16/9] w-full">
                                    {selectedGalleryItem.category === "VIDEO" &&
                                        selectedGalleryItem.video ? (
                                        <div className="relative overflow-hidden border border-silver/10 bg-black">
                                            <video
                                                src={selectedGalleryItem.video}
                                                poster={selectedGalleryItem.image}
                                                controls
                                                playsInline
                                                preload="metadata"
                                                className="mx-auto max-h-[70vh] w-full object-contain"
                                            >
                                                Your browser does not support the video element.
                                            </video>
                                        </div>
                                    ) : (
                                        <ImageReveal
                                            src={selectedGalleryItem.image}
                                            alt={selectedGalleryItem.alt}
                                            className="..."
                                        />
                                    )}
                                </div>
                            </div>

                            <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <span className="text-[10px] uppercase tracking-[0.18em] text-silver/60">
                                        {String(
                                            selectedGalleryIndex + 1,
                                        ).padStart(2, "0")}{" "}
                                        /{" "}
                                        {String(
                                            siteData.gallery.length,
                                        ).padStart(2, "0")}
                                    </span>

                                    <p className="mt-2 max-w-2xl text-sm leading-7 text-light-silver/75">
                                        {selectedGalleryItem.description}
                                    </p>
                                </div>

                                {siteData.gallery.length > 1 && (
                                    <div className="flex shrink-0 gap-2">
                                        <button
                                            type="button"
                                            onClick={goToPrevious}
                                            aria-label="Previous gallery item"
                                            className="flex h-10 w-10 items-center justify-center border border-silver/15 text-light-silver transition-colors hover:border-silver/40 hover:text-off-white"
                                        >
                                            <ChevronLeft
                                                className="h-4 w-4"
                                                strokeWidth={1.4}
                                            />
                                        </button>

                                        <button
                                            type="button"
                                            onClick={goToNext}
                                            aria-label="Next gallery item"
                                            className="flex h-10 w-10 items-center justify-center border border-silver/15 text-light-silver transition-colors hover:border-silver/40 hover:text-off-white"
                                        >
                                            <ChevronRight
                                                className="h-4 w-4"
                                                strokeWidth={1.4}
                                            />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
            </EditorialPanel>
        </>
    );
}

/* -------------------------------------------------------------------------- */
/* 09 — PROFESSIONAL APPROACH                                                 */
/* -------------------------------------------------------------------------- */

export function Approach() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section
                id="approach"
                className="bg-navy py-28 md:py-36"
            >
                <div className="mx-auto max-w-7xl px-6">
                    <SectionIntro
                        eyebrow={siteData.approach.eyebrow}
                        title={siteData.approach.title}
                        description={siteData.approach.description}
                        align="center"
                    />

                    <div className="mx-auto mt-16 grid max-w-5xl gap-px overflow-hidden border border-silver/10 bg-silver/10 md:grid-cols-4">
                        {siteData.approach.principles.map(
                            (principle, index) => (
                                <FadeIn
                                    key={`${principle.title}-${index}`}
                                    delay={index * 0.07}
                                    className="h-full bg-navy"
                                >
                                    <div className="h-full p-7 md:p-8">
                                        <span className="font-serif text-2xl text-silver/50">
                                            {String(index + 1).padStart(
                                                2,
                                                "0",
                                            )}
                                        </span>

                                        <h3 className="mt-7 text-lg text-off-white">
                                            {principle.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-light-silver/70">
                                            {principle.description}
                                        </p>
                                    </div>
                                </FadeIn>
                            ),
                        )}
                    </div>

                    <FadeIn
                        delay={0.2}
                        className="mt-12 text-center"
                    >
                        <ExploreButton
                            label="Explore the approach"
                            onClick={() => setIsOpen(true)}
                        />
                    </FadeIn>
                </div>
            </section>

            <EditorialPanel
                open={isOpen}
                onClose={() => setIsOpen(false)}
                eyebrow={siteData.approach.eyebrow}
                title={siteData.approach.title}
                description={siteData.approach.description}
            >
                <div className="mx-auto max-w-4xl">
                    <div className="grid gap-5 md:grid-cols-2">
                        {siteData.approach.principles.map(
                            (principle, index) => (
                                <article
                                    key={`${principle.title}-${index}-panel`}
                                    className="border border-silver/10 bg-midnight p-7 md:p-8"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="font-serif text-2xl text-silver/50">
                                            {String(index + 1).padStart(
                                                2,
                                                "0",
                                            )}
                                        </span>

                                        <Clock3
                                            className="h-5 w-5 text-silver/60"
                                            strokeWidth={1.3}
                                        />
                                    </div>

                                    <h3 className="mt-7 font-serif text-2xl text-off-white">
                                        {principle.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-light-silver/75">
                                        {principle.description}
                                    </p>
                                </article>
                            ),
                        )}
                    </div>
                </div>
            </EditorialPanel>
        </>
    );
}

/* -------------------------------------------------------------------------- */
/* 10 — LIC PAYMENT                                                           */
/* -------------------------------------------------------------------------- */

export function PaymentCTA() {
    const paymentLink = siteData.payment.paymentLink;

    return (
        <section
            id="payment"
            className="border-y border-silver/10 bg-soft-blue/20 py-24 md:py-28"
        >
            <div className="mx-auto max-w-4xl px-6 text-center">
                <FadeIn>
                    <span className="text-[11px] uppercase tracking-[0.24em] text-silver">
                        {siteData.payment.eyebrow}
                    </span>

                    <h2 className="mt-4 font-serif text-3xl text-off-white md:text-5xl">
                        {siteData.payment.title}
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-light-silver/75 md:text-base">
                        {siteData.payment.description}
                    </p>

                    {paymentLink ? (
                        <a
                            href={paymentLink}
                            target={
                                siteData.payment.opensInNewTab
                                    ? "_blank"
                                    : undefined
                            }
                            rel={
                                siteData.payment.opensInNewTab
                                    ? "noopener noreferrer"
                                    : undefined
                            }
                            className="mt-8 inline-flex items-center gap-3 bg-off-white px-7 py-4 text-xs font-medium uppercase tracking-[0.14em] text-navy transition-colors duration-300 hover:bg-silver"
                        >
                            {siteData.payment.buttonLabel}

                            <ExternalLink
                                className="h-4 w-4"
                                strokeWidth={1.5}
                            />
                        </a>
                    ) : (
                        <span className="mt-8 inline-flex cursor-not-allowed items-center gap-3 border border-silver/20 px-7 py-4 text-xs uppercase tracking-[0.14em] text-light-silver/50">
                            Payment link coming soon
                        </span>
                    )}
                </FadeIn>
            </div>
        </section>
    );
}