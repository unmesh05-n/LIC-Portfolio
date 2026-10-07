"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Images, X } from "lucide-react";

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

type GalleryCategory =
    | "All"
    | "Professional Profile"
    | "Office / Client Meetings"
    | "Awards & Recognition"
    | "Training / Seminars"
    | "Events"
    | "Community / Social Activities";

type GalleryImage = {
    src: string;
    alt: string;
    title: string;
    category: Exclude<GalleryCategory, "All">;
};

const categories: GalleryCategory[] = [
    "All",
    "Professional Profile",
    "Office / Client Meetings",
    "Awards & Recognition",
    "Training / Seminars",
    "Events",
    "Community / Social Activities",
];

/*
 * Supplied client assets mapped only where the photographs
 * clearly support the category.
 *
 * Empty categories are intentionally left without fabricated
 * photographs until additional client assets are supplied.
 */
const galleryImages: GalleryImage[] = [
    {
        src: "https://res.cloudinary.com/djblsvzgm/image/upload/f_auto,q_auto/hero-portrait_cbocoq",
        alt: "Professional profile photograph of Darshanee Pravin Lokhande",
        title: "Professional Profile",
        category: "Professional Profile",
    },
    {
        src: "https://res.cloudinary.com/djblsvzgm/image/upload/f_auto,q_auto/mdrt-2024-trophy.jpg_ysowo5",
        alt: "MDRT 2024 recognition trophy",
        title: "MDRT 2024 Recognition",
        category: "Awards & Recognition",
    },
    {
        src: "https://res.cloudinary.com/djblsvzgm/image/upload/f_auto,q_auto/mdrt-trophy-moment.jpg_aa268q",
        alt: "Professional recognition with PDRT award",
        title: "Professional Recognition",
        category: "Awards & Recognition",
    },
    {
        src: "https://res.cloudinary.com/djblsvzgm/image/upload/f_auto,q_auto/mdrt-pune-stage.jpg_hblmtb",
        alt: "MDRT Pune DO-1 professional event",
        title: "MDRT Pune DO-1",
        category: "Events",
    },
    {
        src: "https://res.cloudinary.com/djblsvzgm/image/upload/f_auto,q_auto/professional-event.jpg_uaxa3l",
        alt: "Professional event with Darshanee and fellow professionals",
        title: "Professional Event",
        category: "Events",
    },
    {
        src: "https://res.cloudinary.com/djblsvzgm/image/upload/f_auto,q_auto/professional-felicitation.jpg_zns4xg",
        alt: "Professional felicitation moment",
        title: "Professional Felicitation",
        category: "Events",
    },
];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] =
        useState<GalleryCategory>("All");

    const [selectedImage, setSelectedImage] =
        useState<GalleryImage | null>(null);

    const filteredImages = useMemo(() => {
        if (activeCategory === "All") {
            return galleryImages;
        }

        return galleryImages.filter(
            (image) => image.category === activeCategory,
        );
    }, [activeCategory]);

    return (
        <main className="bg-white">

            {/* ------------------------------------------------------------------ */}
            {/* HERO                                                               */}
            {/* ------------------------------------------------------------------ */}

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
                            GALLERY
                        </span>

                        <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl">
                            Professional Photos • Awards • Events • Activities
                        </h1>

                        <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
                            A selection of professional moments, recognition,
                            events and activities.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* ------------------------------------------------------------------ */}
            {/* GALLERY                                                             */}
            {/* ------------------------------------------------------------------ */}

            <section
                id="gallery"
                className="bg-white py-24 md:py-32"
            >
                <div className="mx-auto max-w-7xl px-6">

                    {/* Category filters */}
                    <FadeIn>
                        <div className="flex flex-wrap gap-2 border-b border-dark-blue/10 pb-8">
                            {categories.map((category) => {
                                const active =
                                    activeCategory === category;

                                return (
                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() =>
                                            setActiveCategory(category)
                                        }
                                        className={`px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.12em] transition-all duration-300 ${active
                                                ? "bg-dark-blue text-white"
                                                : "border border-dark-blue/10 bg-white text-dark-blue/60 hover:border-yellow hover:text-dark-blue"
                                            }`}
                                    >
                                        {category}
                                    </button>
                                );
                            })}
                        </div>
                    </FadeIn>

                    {/* Images */}
                    {filteredImages.length > 0 ? (
                        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredImages.map((image, index) => (
                                <FadeIn
                                    key={`${image.title}-${index}`}
                                    delay={index * 0.05}
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setSelectedImage(image)
                                        }
                                        className="group block w-full text-left"
                                        aria-label={`View ${image.title}`}
                                    >
                                        <div className="relative aspect-[4/3] overflow-hidden bg-[#eef5fb]">
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                                loading={
                                                    index === 0
                                                        ? "eager"
                                                        : "lazy"
                                                }
                                            />

                                            <div className="absolute inset-0 bg-dark-blue/0 transition-colors duration-500 group-hover:bg-dark-blue/15" />

                                            <div className="absolute inset-x-0 bottom-0 translate-y-full bg-dark-blue/90 px-5 py-4 transition-transform duration-500 group-hover:translate-y-0">
                                                <p className="text-[9px] uppercase tracking-[0.16em] text-yellow">
                                                    {image.category}
                                                </p>

                                                <p className="mt-1 font-serif text-lg text-white">
                                                    {image.title}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <p className="text-[9px] uppercase tracking-[0.16em] text-[#0054a6]">
                                                {image.category}
                                            </p>

                                            <h3 className="mt-1 font-serif text-xl text-dark-blue">
                                                {image.title}
                                            </h3>
                                        </div>
                                    </button>
                                </FadeIn>
                            ))}
                        </div>
                    ) : (
                        <FadeIn>
                            <div className="mt-12 border border-dashed border-dark-blue/15 bg-[#eef5fb] px-6 py-20 text-center">
                                <Images className="mx-auto h-10 w-10 text-[#0054a6]" />

                                <h3 className="mt-6 font-serif text-2xl text-dark-blue">
                                    Photos Coming Soon
                                </h3>

                                <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-dark-blue/55">
                                    Additional photographs for this category
                                    will be added when supplied.
                                </p>
                            </div>
                        </FadeIn>
                    )}

                </div>
            </section>

            {/* ------------------------------------------------------------------ */}
            {/* IMAGE LIGHTBOX                                                     */}
            {/* ------------------------------------------------------------------ */}

            {selectedImage && (
                <div
                    className="fixed inset-0 z-[80] flex items-center justify-center bg-dark-blue/85 p-4 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative max-h-[90vh] max-w-6xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setSelectedImage(null)}
                            aria-label="Close image"
                            className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center bg-white text-dark-blue transition-colors hover:bg-yellow"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-h-[85vh] max-w-full object-contain"
                        />

                        <div className="bg-white px-5 py-4">
                            <p className="text-[9px] uppercase tracking-[0.16em] text-[#0054a6]">
                                {selectedImage.category}
                            </p>

                            <h3 className="mt-1 font-serif text-xl text-dark-blue">
                                {selectedImage.title}
                            </h3>
                        </div>
                    </div>
                </div>
            )}

        </main>
    );
}