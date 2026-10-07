"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Download,
    ExternalLink,
    FileText,
    X,
} from "lucide-react";

import { siteData } from "@/lib/data";
import { ImageReveal } from "./Animations";

/* -------------------------------------------------------------------------- */
/* Shared animation                                                           */
/* -------------------------------------------------------------------------- */

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
        viewport={{ once: false, amount: 0.16 }}
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

/* -------------------------------------------------------------------------- */
/* Shared section intro                                                       */
/* -------------------------------------------------------------------------- */

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
                <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                    {eyebrow}
                </span>

                <h2 className="mt-4 whitespace-pre-line font-serif text-4xl leading-[1.08] text-dark-blue md:text-5xl lg:text-6xl">
                    {title}
                </h2>

                {description && (
                    <p className="mt-6 max-w-2xl text-base leading-7 text-dark-blue/70 md:text-lg">
                        {description}
                    </p>
                )}
            </div>
        </FadeIn>
    );
}

/* -------------------------------------------------------------------------- */
/* Shared button                                                              */
/* -------------------------------------------------------------------------- */

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
        "group inline-flex items-center gap-3 border-b border-dark-blue/30 pb-2 text-xs uppercase tracking-[0.18em] text-dark-blue transition-colors duration-300 hover:border-yellow hover:text-dark-blue";

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

/* -------------------------------------------------------------------------- */
/* Editorial panel                                                            */
/* -------------------------------------------------------------------------- */

function EditorialPanel({
    open,
    onClose,
    eyebrow,
    title,
    description,
    children,
    width = "default",
}: {
    open: boolean;
    onClose: () => void;
    eyebrow: string;
    title: string;
    description?: string;
    children: React.ReactNode;
    width?: "default" | "wide";
}) {
    useEffect(() => {
        if (!open) return;

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

    if (!open) return null;

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[40] bg-dark-blue/50 backdrop-blur-[3px]"
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
                className={`fixed inset-x-3 bottom-3 top-20 z-[45] overflow-hidden border border-dark-blue/10 bg-white shadow-2xl sm:inset-x-6 sm:bottom-6 ${width === "wide"
                    ? "md:left-1/2 md:right-auto md:w-[min(1120px,calc(100vw-48px))] md:-translate-x-1/2"
                    : "md:left-1/2 md:right-auto md:w-[min(900px,calc(100vw-48px))] md:-translate-x-1/2"
                    }`}
                onClick={(event) => event.stopPropagation()}
            >
                <div className="flex h-full flex-col">
                    <div className="flex shrink-0 items-start justify-between gap-6 border-b border-dark-blue/10 px-6 py-6 sm:px-8 md:px-10">
                        <div className="min-w-0">
                            <span className="text-[10px] uppercase tracking-[0.24em] text-yellow">
                                {eyebrow}
                            </span>

                            <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-[1.08] text-dark-blue sm:text-4xl md:text-5xl">
                                {title}
                            </h2>

                            {description && (
                                <p className="mt-4 max-w-2xl text-sm leading-7 text-dark-blue/65 md:text-base">
                                    {description}
                                </p>
                            )}
                        </div>

                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Close details"
                            className="group flex h-10 w-10 shrink-0 items-center justify-center border border-dark-blue/15 text-dark-blue transition-colors duration-300 hover:border-dark-blue/40"
                        >
                            <X
                                className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90"
                                strokeWidth={1.4}
                            />
                        </button>
                    </div>

                    <div className="min-h-0 flex-1 overflow-y-auto px-6 py-8 sm:px-8 md:px-10 md:py-10">
                        {children}
                    </div>
                </div>
            </motion.div>
        </>
    );
}

/* -------------------------------------------------------------------------- */
/* Shared list                                                                */
/* -------------------------------------------------------------------------- */

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
                    className="flex items-start gap-4 border-b border-dark-blue/10 pb-4 last:border-b-0"
                >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow" />

                    <span className="text-sm leading-7 text-dark-blue/75 md:text-base">
                        {item}
                    </span>
                </li>
            ))}
        </ul>
    );
}

/* -------------------------------------------------------------------------- */
/* 01 — Stats                                                                 */
/* -------------------------------------------------------------------------- */

export function Stats() {
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

                        <div className="mt-3 text-[10px] uppercase tracking-[0.18em] text-dark-blue/55">
                            {stat.label}
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}

/* -------------------------------------------------------------------------- */
/* 02 — About                                                                 */
/* -------------------------------------------------------------------------- */

export function About() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section
                id="about"
                className="bg-white py-24 md:py-32"
            >
                <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-[0.9fr_1.1fr] md:gap-20 lg:gap-28">
                    <FadeIn>
                        <div className="relative mx-auto max-w-xl">
                            <div className="absolute -inset-3 border border-dark-blue/10" />

                            <div className="relative aspect-[4/5] overflow-hidden bg-slate-50">
                                <ImageReveal
                                    src={siteData.about.image}
                                    alt={siteData.about.imageAlt}
                                    className="h-full w-full"
                                />
                            </div>

                            <div className="absolute -bottom-5 -right-5 hidden h-24 w-24 border-b border-r border-yellow md:block" />
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.12}>
                        <div>
                            <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                                {siteData.about.eyebrow}
                            </span>

                            <h2 className="mt-5 whitespace-pre-line font-serif text-4xl leading-[1.1] text-dark-blue md:text-5xl lg:text-6xl">
                                {siteData.about.headline}
                            </h2>

                            <p className="mt-7 max-w-2xl text-base leading-7 text-dark-blue/75">
                                {siteData.about.introduction}
                            </p>

                            <div className="mt-6 space-y-5 text-[15px] leading-7 text-dark-blue/65">
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

                            <ul className="mt-8 space-y-3 border-t border-dark-blue/10 pt-7">
                                {siteData.about.highlights.map(
                                    (highlight, index) => (
                                        <li
                                            key={`${highlight}-${index}`}
                                            className="flex items-start gap-3 text-sm text-dark-blue"
                                        >
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow" />
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
                description="Professional profile and background."
            >
                <div className="mx-auto max-w-3xl space-y-10">
                    <div className="space-y-5">
                        {siteData.about.paragraphs.map((paragraph, index) => (
                            <p
                                key={`${paragraph.slice(0, 24)}-${index}`}
                                className="text-sm leading-7 text-dark-blue/70 md:text-base"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div className="border-t border-dark-blue/10 pt-8">
                        <h3 className="mb-6 font-serif text-2xl text-dark-blue">
                            Professional highlights
                        </h3>

                        <DetailList items={siteData.about.highlights} />
                    </div>
                </div>
            </EditorialPanel>
        </>
    );
}

/* -------------------------------------------------------------------------- */
/* 03 — Insurance                                                             */
/* -------------------------------------------------------------------------- */

export function Insurance() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section
                id="insurance"
                className="bg-slate-50 py-24 md:py-32"
            >
                <div className="mx-auto max-w-7xl px-6">
                    <SectionIntro
                        eyebrow={siteData.insurance.eyebrow}
                        title={siteData.insurance.title}
                        description={siteData.insurance.description}
                    />

                    <div className="mt-14 grid gap-5 md:grid-cols-3">
                        {siteData.insurance.categories.map(
                            (category, index) => (
                                <FadeIn
                                    key={category.title}
                                    delay={index * 0.08}
                                >
                                    <a
                                        href={category.href}
                                        className="group block h-full border border-dark-blue/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-yellow md:p-9"
                                    >
                                        <span className="font-serif text-2xl text-yellow/80">
                                            {String(index + 1).padStart(
                                                2,
                                                "0",
                                            )}
                                        </span>

                                        <h3 className="mt-7 font-serif text-2xl text-dark-blue">
                                            {category.title}
                                        </h3>

                                        <p className="mt-4 text-sm leading-7 text-dark-blue/65">
                                            {category.description}
                                        </p>

                                        <span className="mt-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.17em] text-dark-blue/60">
                                            Explore

                                            <ArrowRight
                                                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                                                strokeWidth={1.5}
                                            />
                                        </span>
                                    </a>
                                </FadeIn>
                            ),
                        )}
                    </div>

                    <FadeIn delay={0.2} className="mt-12 text-center">
                        <ExploreButton
                            label="View insurance providers"
                            onClick={() => setIsOpen(true)}
                        />
                    </FadeIn>
                </div>
            </section>

            <EditorialPanel
                open={isOpen}
                onClose={() => setIsOpen(false)}
                eyebrow={siteData.insurers.eyebrow}
                title={siteData.insurers.title}
                description={siteData.insurers.description}
                width="wide"
            >
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {siteData.insurers.items.map((insurer, index) => (
                        <div
                            key={`${insurer.name}-${index}`}
                            className="flex min-h-32 items-center justify-center border border-dark-blue/10 bg-white p-6"
                        >
                            <img
                                src={insurer.logo}
                                alt={insurer.alt}
                                className="max-h-16 max-w-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </EditorialPanel>
        </>
    );
}

/* -------------------------------------------------------------------------- */
/* 04 — Life Insurance                                                        */
/* -------------------------------------------------------------------------- */

export function LifeInsurance() {
    return (
        <section
            id="life-insurance"
            className="bg-white py-24 md:py-32"
        >
            <div className="mx-auto max-w-7xl px-6">
                <SectionIntro
                    eyebrow={siteData.lifeInsurance.eyebrow}
                    title={siteData.lifeInsurance.title}
                    description={siteData.lifeInsurance.description}
                />

                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {siteData.lifeInsurance.services.map((item, index) => (
                        <FadeIn
                            key={item.title}
                            delay={index * 0.07}
                        >
                            <div className="h-full border border-dark-blue/10 bg-white p-7 transition-colors duration-300 hover:border-yellow md:p-8">
                                <span className="font-serif text-2xl text-yellow">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <h3 className="mt-7 font-serif text-xl text-dark-blue">
                                    {item.title}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-dark-blue/65">
                                    {item.description}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* -------------------------------------------------------------------------- */
/* 05 — Health Insurance                                                      */
/* -------------------------------------------------------------------------- */

export function HealthInsurance() {
    return (
        <section
            id="health-insurance"
            className="bg-slate-50 py-24 md:py-32"
        >
            <div className="mx-auto max-w-7xl px-6">
                <SectionIntro
                    eyebrow={siteData.healthInsurance.eyebrow}
                    title={siteData.healthInsurance.title}
                    description={siteData.healthInsurance.description}
                />

                <div className="mt-14 grid gap-5 md:grid-cols-3">
                    {siteData.healthInsurance.services.map((item, index) => (
                        <FadeIn
                            key={item.title}
                            delay={index * 0.08}
                        >
                            <div className="h-full border border-dark-blue/10 bg-white p-8 md:p-10">
                                <span className="font-serif text-3xl text-yellow">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <h3 className="mt-7 font-serif text-2xl text-dark-blue">
                                    {item.title}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-dark-blue/65">
                                    {item.description}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* -------------------------------------------------------------------------- */
/* 06 — General Insurance                                                     */
/* -------------------------------------------------------------------------- */

export function GeneralInsurance() {
    return (
        <section
            id="general-insurance"
            className="bg-dark-blue py-24 md:py-32"
        >
            <div className="mx-auto max-w-7xl px-6">
                <div className="max-w-3xl">
                    <FadeIn>
                        <span className="text-[11px] uppercase tracking-[0.24em] text-yellow">
                            {siteData.generalInsurance.eyebrow}
                        </span>

                        <h2 className="mt-4 font-serif text-4xl leading-[1.08] text-white md:text-5xl lg:text-6xl">
                            {siteData.generalInsurance.title}
                        </h2>

                        <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
                            {siteData.generalInsurance.description}
                        </p>
                    </FadeIn>
                </div>

                <div className="mt-14 grid gap-px overflow-hidden border border-white/15 bg-white/15 sm:grid-cols-2">
                    {siteData.generalInsurance.services.map(
                        (item, index) => (
                            <FadeIn
                                key={item.title}
                                delay={index * 0.07}
                                className="bg-dark-blue"
                            >
                                <div className="h-full p-8 md:p-10">
                                    <span className="font-serif text-2xl text-yellow">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <h3 className="mt-7 font-serif text-2xl text-white">
                                        {item.title}
                                    </h3>

                                </div>
                            </FadeIn>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
}

/* -------------------------------------------------------------------------- */
/* 07 — Gallery                                                               */
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
        if (selectedGalleryIndex === null) return;

        setSelectedGalleryIndex(
            selectedGalleryIndex === 0
                ? siteData.gallery.length - 1
                : selectedGalleryIndex - 1,
        );
    };

    const goToNext = () => {
        if (selectedGalleryIndex === null) return;

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
                className="bg-white py-24 md:py-32"
            >
                <div className="mx-auto max-w-7xl px-6">
                    <SectionIntro
                        eyebrow={siteData.galleryIntro.eyebrow}
                        title={siteData.galleryIntro.title}
                        description={siteData.galleryIntro.description}
                        align="center"
                    />

                    <div className="mt-14 grid gap-4 md:grid-cols-12 md:grid-rows-2">
                        {siteData.gallery.map((item, index) => (
                            <FadeIn
                                key={`${item.title}-${index}`}
                                delay={index * 0.06}
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
                                    className="group relative block h-full min-h-64 w-full overflow-hidden bg-slate-100 text-left"
                                    aria-label={`Open ${item.title}`}
                                >
                                    <ImageReveal
                                        src={item.image}
                                        alt={item.alt}
                                        className="h-full min-h-64 w-full"
                                    />

                                    <div className="absolute inset-0 bg-dark-blue/0 transition-colors duration-500 group-hover:bg-dark-blue/20" />

                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark-blue/90 via-dark-blue/20 to-transparent p-6 pt-20">
                                        <span className="text-[10px] uppercase tracking-[0.18em] text-yellow">
                                            {item.category}
                                        </span>

                                        <h3 className="mt-2 font-serif text-xl text-white">
                                            {item.title}
                                        </h3>

                                        <span className="mt-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-white/75">
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
                            <div className="overflow-hidden border border-dark-blue/10 bg-slate-50">
                                <div className="aspect-[16/9] w-full">
                                    <img
                                        src={selectedGalleryItem.image}
                                        alt={selectedGalleryItem.alt}
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                            </div>

                            <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <span className="text-[10px] uppercase tracking-[0.18em] text-dark-blue/45">
                                        {String(
                                            selectedGalleryIndex + 1,
                                        ).padStart(2, "0")}{" "}
                                        /{" "}
                                        {String(
                                            siteData.gallery.length,
                                        ).padStart(2, "0")}
                                    </span>

                                    <p className="mt-2 max-w-2xl text-sm leading-7 text-dark-blue/65">
                                        {selectedGalleryItem.description}
                                    </p>
                                </div>

                                <div className="flex shrink-0 gap-2">
                                    <button
                                        type="button"
                                        onClick={goToPrevious}
                                        aria-label="Previous gallery item"
                                        className="flex h-10 w-10 items-center justify-center border border-dark-blue/15 text-dark-blue transition-colors hover:border-yellow"
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
                                        className="flex h-10 w-10 items-center justify-center border border-dark-blue/15 text-dark-blue transition-colors hover:border-yellow"
                                    >
                                        <ChevronRight
                                            className="h-4 w-4"
                                            strokeWidth={1.4}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
            </EditorialPanel>
        </>
    );
}

/* -------------------------------------------------------------------------- */
/* Forms — downloadable client resources                                     */
/* -------------------------------------------------------------------------- */

export function Forms() {
    return (
        <section
            id="forms"
            className="bg-slate-50 py-24 md:py-32"
        >
            <div className="mx-auto max-w-7xl px-6">
                <SectionIntro
                    eyebrow={siteData.formsIntro.eyebrow}
                    title={siteData.formsIntro.title}
                    description={siteData.formsIntro.description}
                    align="center"
                />

                <div className="mx-auto mt-14 grid max-w-6xl gap-4 md:grid-cols-2">
                    {siteData.forms.map((form, index) => (
                        <FadeIn
                            key={form.file}
                            delay={index * 0.06}
                        >
                            <article className="flex h-full flex-col border border-dark-blue/10 bg-white p-6 md:p-7">
                                <div className="flex items-start gap-5">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-yellow/40 bg-yellow/10">
                                        <FileText
                                            className="h-5 w-5 text-dark-blue"
                                            strokeWidth={1.4}
                                        />
                                    </div>

                                    <div>
                                        <h3 className="font-serif text-xl text-dark-blue">
                                            {form.title}
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-dark-blue/60">
                                            {form.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-auto pt-7">
                                    <a
                                        href={form.file}
                                        download
                                        aria-label={`Download ${form.title}`}
                                        className="group inline-flex items-center gap-2 border border-dark-blue bg-dark-blue px-5 py-3 text-[10px] uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:border-yellow hover:bg-yellow hover:text-dark-blue"
                                    >
                                        <Download
                                            className="h-4 w-4"
                                            strokeWidth={1.5}
                                        />

                                        {form.fileLabel}
                                    </a>
                                </div>
                            </article>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
/* -------------------------------------------------------------------------- */
/* LIC Payment                                                                */
/* -------------------------------------------------------------------------- */

export function PaymentCTA() {
    const paymentLink = siteData.payment.paymentLink;

    return (
        <section
            id="payment"
            className="border-y border-dark-blue/10 bg-yellow py-20 md:py-24"
        >
            <div className="mx-auto max-w-4xl px-6 text-center">
                <FadeIn>
                    <span className="text-[11px] uppercase tracking-[0.24em] text-dark-blue/65">
                        {siteData.payment.eyebrow}
                    </span>

                    <h2 className="mt-4 font-serif text-3xl text-dark-blue md:text-5xl">
                        {siteData.payment.title}
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-dark-blue/70 md:text-base">
                        {siteData.payment.description}
                    </p>

                    {paymentLink && (
                        <a
                            href={paymentLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex items-center gap-3 bg-dark-blue px-7 py-4 text-xs font-medium uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-dark-blue/90"
                        >
                            {siteData.payment.buttonLabel}

                            <ExternalLink
                                className="h-4 w-4"
                                strokeWidth={1.5}
                            />
                        </a>
                    )}
                </FadeIn>
            </div>
        </section>
    );
}

/* -------------------------------------------------------------------------- */
/* Compatibility exports                                                       */
/* -------------------------------------------------------------------------- */
/*
 * page.tsx will be updated next to use the new section structure.
 *
 * These temporary exports prevent the current page from breaking before
 * that update is made.
 */

export function Experience() {
    return <Insurance />;
}

export function LicAssociation() {
    return <LifeInsurance />;
}

export function Services() {
    return <HealthInsurance />;
}

export function Achievements() {
    return <GeneralInsurance />;
}

export function Approach() {
    return <Forms />;
}