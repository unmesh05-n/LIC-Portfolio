"use client";

import { useState, useEffect } from "react";
import { siteData } from "@/lib/data";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Services", href: "#services" },
        { name: "Gallery", href: "#gallery" },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-midnight/80 backdrop-blur-md border-b border-silver/10 py-4" : "bg-transparent py-6"}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="flex flex-col">
                    <span className="font-serif text-lg font-medium text-off-white tracking-wide">{siteData.global.name}</span>
                    <span className="text-xs text-silver tracking-widest uppercase">{siteData.global.title}</span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {links.map((link) => (
                        <a key={link.name} href={link.href} className="text-sm text-silver hover:text-off-white transition-colors">
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="px-5 py-2 text-sm text-off-white bg-soft-blue/50 border border-silver/20 hover:bg-soft-blue transition-colors rounded-sm">
                        Connect
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-silver" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 w-full bg-secondary-dark border-b border-silver/10 flex flex-col px-6 py-4 space-y-4 md:hidden"
                    >
                        {links.map((link) => (
                            <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-silver hover:text-off-white">
                                {link.name}
                            </a>
                        ))}
                        <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="inline-block text-center py-3 text-off-white bg-soft-blue rounded-sm">
                            Connect
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}