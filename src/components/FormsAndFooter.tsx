"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteData } from "@/lib/data";
import { Phone, Mail, MapPin } from "lucide-react";

export function EnquiryContact() {
    const [status, setStatus] = useState<"idle" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Developer Note: Connect future API/Backend here
        setStatus("success");
        setTimeout(() => setStatus("idle"), 5000);
    };

    return (
        <section id="contact" className="py-32 bg-midnight">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
                {/* Contact Info */}
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                    <span className="text-xs text-silver tracking-[0.2em] uppercase">Get In Touch</span>
                    <h2 className="text-4xl mt-4 mb-8">Ready to secure your future?</h2>

                    <div className="space-y-6 mt-12">
                        <div className="flex items-center text-silver">
                            <Phone className="w-5 h-5 mr-4 opacity-70" />
                            <span>{siteData.contact.phone}</span>
                        </div>
                        <div className="flex items-center text-silver">
                            <Mail className="w-5 h-5 mr-4 opacity-70" />
                            <span>{siteData.contact.email}</span>
                        </div>
                        <div className="flex items-center text-silver">
                            <MapPin className="w-5 h-5 mr-4 opacity-70" />
                            <span>{siteData.contact.location}</span>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-12">
                        <a href={`tel:${siteData.contact.phone}`} className="px-6 py-3 border border-silver/20 text-off-white text-sm hover:bg-silver/10 transition-colors">Call Now</a>
                        <a href={`https://wa.me/${siteData.contact.whatsapp.replace(/[^0-9]/g, '')}`} className="px-6 py-3 border border-silver/20 text-off-white text-sm hover:bg-silver/10 transition-colors">WhatsApp</a>
                    </div>
                </motion.div>

                {/* Form */}
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-secondary-dark p-8 border border-silver/10">
                    {status === "success" ? (
                        <div className="h-full flex items-center justify-center text-center p-8">
                            <div>
                                <h3 className="text-2xl mb-2 text-off-white">Thank You.</h3>
                                <p className="text-silver text-sm">Your enquiry has been recorded for this demo. We will be in touch shortly.</p>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-xs text-silver mb-2 uppercase tracking-wider">Full Name</label>
                                <input required type="text" className="w-full bg-midnight border border-silver/20 px-4 py-3 text-off-white focus:outline-none focus:border-silver/60 transition-colors" />
                            </div>
                            <div>
                                <label className="block text-xs text-silver mb-2 uppercase tracking-wider">Mobile Number</label>
                                <input required type="tel" className="w-full bg-midnight border border-silver/20 px-4 py-3 text-off-white focus:outline-none focus:border-silver/60 transition-colors" />
                            </div>
                            <div>
                                <label className="block text-xs text-silver mb-2 uppercase tracking-wider">Email Address</label>
                                <input required type="email" className="w-full bg-midnight border border-silver/20 px-4 py-3 text-off-white focus:outline-none focus:border-silver/60 transition-colors" />
                            </div>
                            <div>
                                <label className="block text-xs text-silver mb-2 uppercase tracking-wider">Message</label>
                                <textarea required rows={4} className="w-full bg-midnight border border-silver/20 px-4 py-3 text-off-white focus:outline-none focus:border-silver/60 transition-colors resize-none"></textarea>
                            </div>
                            <button type="submit" className="w-full py-4 bg-off-white text-navy text-sm font-medium hover:bg-silver transition-colors">
                                Send Enquiry
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}

export function Footer() {
    return (
        <footer className="bg-midnight border-t border-silver/10 py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start">
                    <span className="font-serif text-lg text-off-white">{siteData.global.name}</span>
                    <span className="text-xs text-silver">{siteData.global.title}</span>
                </div>
                <div className="text-sm text-silver/60 text-center">
                    &copy; {new Date().getFullYear()} {siteData.global.name}. All rights reserved. <br />
                    <span className="italic">{siteData.global.tagline}</span>
                </div>
            </div>
        </footer>
    );
}