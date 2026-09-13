"use client";

import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
    ArrowRight,
    Check,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";

import { siteData } from "@/lib/data";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function EnquiryContact() {
    const [status, setStatus] = useState<FormStatus>("idle");
    const reducedMotion = useReducedMotion();

    const contact = siteData.contact;
    const fields = contact.form.fields;

    const cleanPhone = contact.phone.replace(/[^0-9+]/g, "");
    const cleanWhatsApp = contact.whatsapp.replace(/[^0-9]/g, "");

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setStatus("submitting");

        try {
            const form = event.currentTarget;
            const formData = new FormData(form);

            const response = await fetch(
                "https://formspree.io/f/myeyqplp",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        Accept: "application/json",
                    },
                }
            );

            if (!response.ok) {
                throw new Error("Form submission failed.");
            }

            form.reset();
            setStatus("success");

            window.setTimeout(() => {
                setStatus("idle");
            }, 5000);
        } catch (error) {
            console.error("Enquiry submission error:", error);
            setStatus("error");
        }
    };

    const handleReset = () => {
        setStatus("idle");
    };
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-midnight py-28 md:py-36"
        >
            {/* Subtle background atmosphere */}
            <div
                className="pointer-events-none absolute inset-0"
                aria-hidden="true"
            >
                <div className="absolute right-[-12%] top-[10%] h-[360px] w-[360px] rounded-full bg-silver/[0.025] blur-[120px]" />
                <div className="absolute bottom-[-15%] left-[-10%] h-[320px] w-[320px] rounded-full bg-soft-blue/[0.08] blur-[120px]" />
            </div>

            <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-[0.85fr_1.15fr] md:gap-20 lg:gap-28">
                {/* ------------------------------------------------------------------ */}
                {/* CONTACT INTRO                                                       */}
                {/* ------------------------------------------------------------------ */}

                <motion.div
                    initial={
                        reducedMotion
                            ? { opacity: 1 }
                            : { opacity: 0, x: -24 }
                    }
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{
                        once: false,
                        amount: 0.18,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <span className="text-[11px] uppercase tracking-[0.24em] text-silver">
                        {contact.eyebrow}
                    </span>

                    <h2 className="mt-5 max-w-xl font-serif text-4xl leading-[1.08] text-off-white md:text-5xl lg:text-6xl">
                        {contact.headline}
                    </h2>

                    <p className="mt-7 max-w-lg text-base leading-7 text-light-silver/75">
                        {contact.description}
                    </p>

                    {/* Contact details */}
                    <div className="mt-10 space-y-5">
                        <a
                            href={`tel:${cleanPhone}`}
                            className="group flex items-start gap-4"
                            aria-label={`Call ${contact.phone}`}
                        >
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-silver/15 bg-secondary-dark text-silver transition-colors duration-300 group-hover:border-silver/35">
                                <Phone
                                    className="h-4 w-4"
                                    strokeWidth={1.4}
                                />
                            </span>

                            <span className="pt-1">
                                <span className="block text-[10px] uppercase tracking-[0.16em] text-silver/50">
                                    Phone
                                </span>

                                <span className="mt-1 block text-sm text-off-white transition-colors duration-300 group-hover:text-silver">
                                    {contact.phone}
                                </span>
                            </span>
                        </a>

                        <a
                            href={`mailto:${contact.email}`}
                            className="group flex items-start gap-4"
                            aria-label={`Email ${contact.email}`}
                        >
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-silver/15 bg-secondary-dark text-silver transition-colors duration-300 group-hover:border-silver/35">
                                <Mail
                                    className="h-4 w-4"
                                    strokeWidth={1.4}
                                />
                            </span>

                            <span className="pt-1">
                                <span className="block text-[10px] uppercase tracking-[0.16em] text-silver/50">
                                    Email
                                </span>

                                <span className="mt-1 block break-all text-sm text-off-white transition-colors duration-300 group-hover:text-silver">
                                    {contact.email}
                                </span>
                            </span>
                        </a>

                        <a
                            href={contact.mapsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-start gap-4"
                            aria-label="Open office location in Google Maps"
                        >
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-silver/15 bg-secondary-dark text-silver transition-colors duration-300 group-hover:border-silver/35">
                                <MapPin
                                    className="h-4 w-4"
                                    strokeWidth={1.4}
                                />
                            </span>

                            <span className="pt-1">
                                <span className="block text-[10px] uppercase tracking-[0.16em] text-silver/50">
                                    Location
                                </span>

                                <span className="mt-1 block text-sm leading-6 text-off-white transition-colors duration-300 group-hover:text-silver">
                                    {contact.location}
                                </span>
                            </span>
                        </a>
                    </div>

                    {/* Direct contact actions */}
                    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                        <a
                            href={`tel:${cleanPhone}`}
                            className="inline-flex min-h-12 items-center justify-center gap-2 border border-silver/20 px-5 text-xs uppercase tracking-[0.12em] text-off-white transition-colors duration-300 hover:border-silver/40 hover:bg-silver/[0.06]"
                        >
                            Call Now

                            <Phone
                                className="h-3.5 w-3.5"
                                strokeWidth={1.4}
                            />
                        </a>

                        <a
                            href={`https://wa.me/${cleanWhatsApp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-12 items-center justify-center gap-2 border border-silver/20 px-5 text-xs uppercase tracking-[0.12em] text-off-white transition-colors duration-300 hover:border-silver/40 hover:bg-silver/[0.06]"
                        >
                            WhatsApp

                            <ArrowRight
                                className="h-3.5 w-3.5"
                                strokeWidth={1.4}
                            />
                        </a>
                    </div>
                </motion.div>

                {/* ------------------------------------------------------------------ */}
                {/* ENQUIRY FORM                                                        */}
                {/* ------------------------------------------------------------------ */}

                <motion.div
                    initial={
                        reducedMotion
                            ? { opacity: 1 }
                            : { opacity: 0, x: 24 }
                    }
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{
                        once: false,
                        amount: 0.18,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: reducedMotion ? 0 : 0.1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="border border-silver/10 bg-secondary-dark"
                >
                    {status === "success" ? (
                        <div className="flex min-h-[560px] flex-col items-center justify-center px-7 py-12 text-center md:px-12">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-silver/25 bg-midnight">
                                <Check
                                    className="h-7 w-7 text-silver"
                                    strokeWidth={1.3}
                                />
                            </div>

                            <h3 className="mt-7 font-serif text-3xl text-off-white">
                                Thank you.
                            </h3>

                            <p className="mt-4 max-w-md text-sm leading-7 text-light-silver/70">
                                Your enquiry has been prepared successfully. The
                                website is ready for the final enquiry-delivery
                                service to be connected.
                            </p>

                            <button
                                type="button"
                                onClick={handleReset}
                                className="mt-8 border-b border-silver/30 pb-2 text-[10px] uppercase tracking-[0.18em] text-silver transition-colors hover:border-silver hover:text-off-white"
                            >
                                Send another enquiry
                            </button>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="p-7 md:p-10 lg:p-12"
                        >
                            <div className="mb-9">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-silver/60">
                                    {contact.form.eyebrow}
                                </span>

                                <h3 className="mt-3 font-serif text-2xl text-off-white md:text-3xl">
                                    {contact.form.title}
                                </h3>
                            </div>

                            <div className="space-y-6">
                                {fields.map((field) => {
                                    const fieldId = `contact-${field.name}`;

                                    return (
                                        <div key={field.name}>
                                            <label
                                                htmlFor={fieldId}
                                                className="mb-2 block text-[10px] uppercase tracking-[0.16em] text-silver/75"
                                            >
                                                {field.label}
                                            </label>

                                            {field.type === "textarea" ? (
                                                <textarea
                                                    id={fieldId}
                                                    name={field.name}
                                                    required={field.required}
                                                    rows={5}
                                                    placeholder={field.placeholder}
                                                    className="w-full resize-none border border-silver/15 bg-midnight px-4 py-3.5 text-sm text-off-white outline-none transition-colors duration-300 placeholder:text-light-silver/25 focus:border-silver/50"
                                                />
                                            ) : (
                                                <input
                                                    id={fieldId}
                                                    name={field.name}
                                                    type={field.type}
                                                    required={field.required}
                                                    placeholder={field.placeholder}
                                                    autoComplete={
                                                        field.name === "name"
                                                            ? "name"
                                                            : field.name === "phone"
                                                                ? "tel"
                                                                : field.name === "email"
                                                                    ? "email"
                                                                    : undefined
                                                    }
                                                    className="w-full border border-silver/15 bg-midnight px-4 py-3.5 text-sm text-off-white outline-none transition-colors duration-300 placeholder:text-light-silver/25 focus:border-silver/50"
                                                />
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            <button
                                type="submit"
                                className="group mt-8 flex min-h-14 w-full items-center justify-center gap-3 bg-off-white px-6 text-xs font-semibold uppercase tracking-[0.14em] text-navy transition-colors duration-300 hover:bg-silver"
                            >
                                {contact.form.submitLabel}

                                <ArrowRight
                                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                    strokeWidth={1.5}
                                />
                            </button>

                            <p className="mt-5 text-center text-[10px] leading-5 text-light-silver/40">
                                Your information will only be used to respond
                                to your enquiry.
                            </p>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}

/* -------------------------------------------------------------------------- */
/* FOOTER                                                                     */
/* -------------------------------------------------------------------------- */

export function Footer() {
    const navigationLinks = siteData.navigation.links;

    return (
        <footer className="border-t border-silver/10 bg-midnight">
            <div className="mx-auto max-w-7xl px-6 py-12 md:py-14">
                <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
                    {/* Brand */}
                    <div className="max-w-sm">
                        <a
                            href="#home"
                            className="font-serif text-xl text-off-white transition-colors hover:text-silver"
                        >
                            {siteData.global.name}
                        </a>

                        <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-silver/60">
                            {siteData.global.designation}
                        </p>

                        <p className="mt-5 text-sm leading-6 text-light-silver/55">
                            {siteData.global.tagline}
                        </p>
                    </div>

                    {/* Footer navigation */}
                    <nav
                        aria-label="Footer navigation"
                        className="flex flex-wrap gap-x-6 gap-y-3 md:max-w-md md:justify-end"
                    >
                        {navigationLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-[10px] uppercase tracking-[0.14em] text-light-silver/55 transition-colors duration-300 hover:text-off-white"
                            >
                                {link.label}
                            </a>
                        ))}

                        <a
                            href="#contact"
                            className="text-[10px] uppercase tracking-[0.14em] text-silver transition-colors duration-300 hover:text-off-white"
                        >
                            Contact
                        </a>
                    </nav>
                </div>

                <div className="mt-10 border-t border-silver/10 pt-6">
                    <div className="flex flex-col gap-3 text-[10px] leading-5 text-light-silver/40 md:flex-row md:items-center md:justify-between">
                        <span>
                            © {new Date().getFullYear()}{" "}
                            {siteData.global.name}. All rights reserved.
                        </span>

                        <span className="text-left md:text-right">
                            {siteData.footer.disclaimer}
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}