"use client";

import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
    ArrowRight,
    Check,
    FileText,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";

import { siteData } from "@/lib/data";

type FormStatus = "idle" | "submitting" | "success" | "error";

/* ========================================================================== */
/* FORMS                                                                      */
/* ========================================================================== */

export function FormsSection() {
    const formsIntro = siteData.formsIntro;
    const forms = siteData.forms;

    return (
        <section
            id="forms"
            className="relative overflow-hidden bg-[#f7fafc] py-20 md:py-28"
        >
            <div
                className="pointer-events-none absolute inset-0"
                aria-hidden="true"
            >
                <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-[#0054a6]/5 blur-3xl" />
                <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#f4c300]/10 blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                {/* Section heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <div className="flex items-center justify-center gap-3">
                        <span className="h-[2px] w-8 bg-[#f4c300]" />

                        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0054a6]">
                            {formsIntro.eyebrow}
                        </span>

                        <span className="h-[2px] w-8 bg-[#f4c300]" />
                    </div>

                    <h2 className="mt-5 font-serif text-4xl leading-tight text-[#003b73] md:text-5xl">
                        {formsIntro.title}
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
                        {formsIntro.description}
                    </p>
                </div>

                {/* Forms grid */}
                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {forms.map((form) => (
                        <article
                            key={form.file}
                            className="group flex flex-col border border-[#003b73]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0054a6]/25 hover:shadow-lg"
                        >
                            <div className="flex h-11 w-11 items-center justify-center bg-[#eef5fb] text-[#0054a6]">
                                <FileText
                                    className="h-5 w-5"
                                    strokeWidth={1.5}
                                />
                            </div>

                            <h3 className="mt-5 font-serif text-xl leading-tight text-[#003b73]">
                                {form.title}
                            </h3>

                            <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">
                                {form.description}
                            </p>

                            <a
                                href={form.file}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 bg-[#0054a6] px-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#003b73]"
                            >
                                {form.fileLabel}

                                <ArrowRight
                                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                                    strokeWidth={1.5}
                                />
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ========================================================================== */
/* ENQUIRY / CONTACT                                                          */
/* ========================================================================== */

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
                },
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
            className="relative overflow-hidden bg-[#003b73] py-24 md:py-32"
        >
            {/* ============================================================ */}
            {/* BACKGROUND                                                     */}
            {/* ============================================================ */}

            <div
                className="pointer-events-none absolute inset-0 overflow-hidden"
                aria-hidden="true"
            >
                <div className="absolute -right-32 top-[-10%] h-[420px] w-[420px] rounded-full bg-[#0054a6]/40 blur-[120px]" />

                <div className="absolute -bottom-40 -left-24 h-[400px] w-[400px] rounded-full bg-[#f4c300]/10 blur-[120px]" />

                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                        backgroundSize: "72px 72px",
                    }}
                />
            </div>

            <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-[0.85fr_1.15fr] md:gap-20 lg:gap-28">
                {/* ======================================================== */}
                {/* CONTACT INTRO                                             */}
                {/* ======================================================== */}

                <motion.div
                    initial={
                        reducedMotion
                            ? { opacity: 1, x: 0 }
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
                    <div className="flex items-center gap-3">
                        <span className="h-[2px] w-8 bg-[#f4c300]" />

                        <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f4c300]">
                            {contact.eyebrow}
                        </span>
                    </div>

                    <h2 className="mt-5 max-w-xl font-serif text-4xl leading-[1.08] text-white md:text-5xl lg:text-6xl">
                        {contact.headline}
                    </h2>

                    <p className="mt-7 max-w-lg text-base leading-7 text-white/70">
                        {contact.description}
                    </p>

                    {/* Contact details */}
                    <div className="mt-10 space-y-5">
                        <a
                            href={`tel:${cleanPhone}`}
                            className="group flex items-start gap-4"
                            aria-label={`Call ${contact.phone}`}
                        >
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 bg-white/[0.06] text-[#f4c300] transition-all duration-300 group-hover:border-[#f4c300]/50 group-hover:bg-[#f4c300]/10">
                                <Phone
                                    className="h-4 w-4"
                                    strokeWidth={1.5}
                                />
                            </span>

                            <span className="pt-1">
                                <span className="block text-[10px] font-medium uppercase tracking-[0.16em] text-white/45">
                                    Phone
                                </span>

                                <span className="mt-1 block text-sm text-white transition-colors duration-300 group-hover:text-[#f4c300]">
                                    {contact.phone}
                                </span>
                            </span>
                        </a>

                        <a
                            href={`mailto:${contact.email}`}
                            className="group flex items-start gap-4"
                            aria-label={`Email ${contact.email}`}
                        >
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 bg-white/[0.06] text-[#f4c300] transition-all duration-300 group-hover:border-[#f4c300]/50 group-hover:bg-[#f4c300]/10">
                                <Mail
                                    className="h-4 w-4"
                                    strokeWidth={1.5}
                                />
                            </span>

                            <span className="pt-1">
                                <span className="block text-[10px] font-medium uppercase tracking-[0.16em] text-white/45">
                                    Email
                                </span>

                                <span className="mt-1 block break-all text-sm text-white transition-colors duration-300 group-hover:text-[#f4c300]">
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
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 bg-white/[0.06] text-[#f4c300] transition-all duration-300 group-hover:border-[#f4c300]/50 group-hover:bg-[#f4c300]/10">
                                <MapPin
                                    className="h-4 w-4"
                                    strokeWidth={1.5}
                                />
                            </span>

                            <span className="pt-1">
                                <span className="block text-[10px] font-medium uppercase tracking-[0.16em] text-white/45">
                                    Location
                                </span>

                                <span className="mt-1 block text-sm leading-6 text-white transition-colors duration-300 group-hover:text-[#f4c300]">
                                    {contact.location}
                                </span>
                            </span>
                        </a>
                    </div>

                    {/* Direct actions */}
                    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                        <a
                            href={`tel:${cleanPhone}`}
                            className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/20 px-5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:border-[#f4c300] hover:bg-[#f4c300] hover:text-[#003b73]"
                        >
                            Call Now

                            <Phone
                                className="h-3.5 w-3.5"
                                strokeWidth={1.5}
                            />
                        </a>

                        <a
                            href={`https://wa.me/${cleanWhatsApp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/20 px-5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:border-[#f4c300] hover:bg-[#f4c300] hover:text-[#003b73]"
                        >
                            WhatsApp

                            <ArrowRight
                                className="h-3.5 w-3.5"
                                strokeWidth={1.5}
                            />
                        </a>
                    </div>
                </motion.div>

                {/* ======================================================== */}
                {/* ENQUIRY FORM                                              */}
                {/* ======================================================== */}

                <motion.div
                    initial={
                        reducedMotion
                            ? { opacity: 1, x: 0 }
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
                    className="overflow-hidden border border-[#0054a6]/15 bg-white shadow-[0_25px_70px_rgba(0,0,0,0.15)]"
                >
                    {status === "success" ? (
                        <div className="flex min-h-[560px] flex-col items-center justify-center px-7 py-12 text-center md:px-12">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#eef5fb] text-[#0054a6]">
                                <Check
                                    className="h-7 w-7"
                                    strokeWidth={1.5}
                                />
                            </div>

                            <h3 className="mt-7 font-serif text-3xl text-[#003b73]">
                                Thank you.
                            </h3>

                            <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
                                Your enquiry has been submitted successfully.
                                Darshanee will get back to you shortly.
                            </p>

                            <button
                                type="button"
                                onClick={handleReset}
                                className="mt-8 border-b border-[#0054a6]/30 pb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0054a6] transition-colors hover:border-[#0054a6] hover:text-[#003b73]"
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
                                <div className="flex items-center gap-3">
                                    <span className="h-[2px] w-7 bg-[#f4c300]" />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0054a6]">
                                        {contact.form.eyebrow}
                                    </span>
                                </div>

                                <h3 className="mt-4 font-serif text-2xl text-[#003b73] md:text-3xl">
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
                                                className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#003b73]/65"
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
                                                    className="w-full resize-none border border-[#003b73]/12 bg-[#f7fafc] px-4 py-3.5 text-sm text-[#003b73] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#0054a6] focus:bg-white focus:ring-2 focus:ring-[#0054a6]/10"
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
                                                            : field.name ===
                                                                "phone"
                                                                ? "tel"
                                                                : field.name ===
                                                                    "email"
                                                                    ? "email"
                                                                    : undefined
                                                    }
                                                    className="w-full border border-[#003b73]/12 bg-[#f7fafc] px-4 py-3.5 text-sm text-[#003b73] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#0054a6] focus:bg-white focus:ring-2 focus:ring-[#0054a6]/10"
                                                />
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            {status === "error" && (
                                <p
                                    role="alert"
                                    className="mt-5 border border-red-200 bg-red-50 px-4 py-3 text-xs leading-5 text-red-700"
                                >
                                    Something went wrong while submitting your
                                    enquiry. Please try again or contact us
                                    directly.
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="group mt-8 flex min-h-14 w-full items-center justify-center gap-3 bg-[#0054a6] px-6 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#003b73] disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {status === "submitting"
                                    ? "Submitting..."
                                    : contact.form.submitLabel}

                                {status !== "submitting" && (
                                    <ArrowRight
                                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                        strokeWidth={1.5}
                                    />
                                )}
                            </button>

                            <p className="mt-5 text-center text-[10px] leading-5 text-slate-400">
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

/* ========================================================================== */
/* FOOTER                                                                     */
/* ========================================================================== */

export function Footer() {
    const navigationLinks = siteData.navigation.links;

    return (
        <footer className="border-t border-[#003b73]/10 bg-white">
            <div className="mx-auto max-w-7xl px-6 py-12 md:py-14">
                <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
                    {/* Brand */}
                    <div className="max-w-sm">
                        <a
                            href="#home"
                            className="font-serif text-xl font-semibold text-[#003b73] transition-colors hover:text-[#0054a6]"
                        >
                            {siteData.global.name}
                        </a>

                        <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0054a6]/70">
                            {siteData.global.designation}
                        </p>

                        <p className="mt-5 text-sm leading-6 text-slate-500">
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
                                className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#003b73]/55 transition-colors duration-300 hover:text-[#0054a6]"
                            >
                                {link.label}
                            </a>
                        ))}

                        <a
                            href="#contact"
                            className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0054a6] transition-colors duration-300 hover:text-[#003b73]"
                        >
                            Contact
                        </a>
                    </nav>
                </div>

                {/* Footer bottom */}
                <div className="mt-10 border-t border-[#003b73]/10 pt-6">
                    <div className="flex flex-col gap-3 text-[10px] leading-5 text-slate-400 md:flex-row md:items-center md:justify-between">
                        <span>
                            © {new Date().getFullYear()}{" "}
                            {siteData.global.name}. All rights reserved.
                        </span>

                        <span className="text-left md:max-w-xl md:text-right">
                            {siteData.footer.disclaimer}
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}