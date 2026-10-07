"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, FileText, Menu, X } from "lucide-react";

import { siteData } from "@/lib/data";

const pageRoutes: Record<string, string> = {
  Home: "/",
  About: "/about",
  Insurance: "/insurance",
  "Life Insurance": "/life-insurance",
  "Health Insurance": "/health-insurance",
  "General Insurance": "/general-insurance",
  Gallery: "/gallery",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const links = siteData.navigation.links;

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const getRoute = (label: string) => {
    return pageRoutes[label] ?? "/";
  };

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || mobileMenuOpen
          ? "border-b border-dark-blue/10 bg-white/95 py-3 shadow-sm backdrop-blur-xl"
          : "bg-white py-5"
          }`}
        aria-label="Primary navigation"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6">

          {/* Brand */}
          <Link href="/"
            onClick={closeMobileMenu}
            className="group flex min-w-0 flex-col"
            aria-label={`${siteData.global.name} — Home`}
          >
            <span className="truncate font-serif text-lg tracking-wide text-dark-blue transition-colors duration-300 group-hover:text-lic-blue md:text-xl">
              {siteData.global.name}
            </span>

            <span className="mt-0.5 text-[8px] font-medium uppercase tracking-[0.18em] text-dark-blue/55 md:text-[9px]">
              {siteData.global.designation}
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-5 md:flex lg:gap-7">

            {links.map((link) => (
              <a
                key={link.label}
                href={getRoute(link.label)}
                className="group relative py-2 text-[10px] font-medium uppercase tracking-[0.13em] text-dark-blue/70 transition-colors duration-300 hover:text-dark-blue"
              >
                {link.label}

                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-yellow transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* Forms */}
            <Link
              href="/#forms"
              className="group inline-flex items-center gap-2 border border-dark-blue/15 bg-white px-3.5 py-2.5 text-[9px] font-medium uppercase tracking-[0.13em] text-dark-blue transition-all duration-300 hover:border-yellow hover:bg-light-yellow"
            >
              <FileText
                className="h-3.5 w-3.5 text-lic-blue"
                strokeWidth={1.5}
              />

              Forms
            </Link>

            {/* LIC Payment */}
            <a
              href={siteData.payment.paymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-dark-blue px-4 py-2.5 text-[9px] font-medium uppercase tracking-[0.13em] text-white transition-all duration-300 hover:bg-lic-blue"
            >
              LIC Payment

              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </a>

            {/* Main contact CTA */}
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 bg-yellow px-5 py-2.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-dark-blue transition-all duration-300 hover:bg-dark-blue hover:text-white"
            >
              {siteData.navigation.ctaLabel}

              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((previous) => !previous)}
            className="flex h-10 w-10 items-center justify-center border border-dark-blue/15 text-dark-blue transition-colors duration-300 hover:border-yellow hover:bg-light-yellow md:hidden"
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -45,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 45,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <X
                    className="h-5 w-5"
                    strokeWidth={1.4}
                  />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 45,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -45,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <Menu
                    className="h-5 w-5"
                    strokeWidth={1.4}
                  />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden border-t border-dark-blue/10 bg-white md:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col px-6 py-5">

                {links.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={getRoute(link.label)}
                    onClick={closeMobileMenu}
                    initial={{
                      opacity: 0,
                      x: -12,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.045,
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group flex items-center justify-between border-b border-dark-blue/10 py-4 text-sm font-medium uppercase tracking-[0.12em] text-dark-blue/75 transition-colors duration-300 hover:text-dark-blue"
                  >
                    <span>{link.label}</span>

                    <ArrowRight
                      className="h-4 w-4 text-dark-blue/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-dark-blue"
                      strokeWidth={1.3}
                    />
                  </motion.a>
                ))}

                {/* Mobile Forms */}
                <motion.a
                  href="/#forms"
                  onClick={closeMobileMenu}
                  initial={{
                    opacity: 0,
                    x: -12,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: links.length * 0.045,
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex items-center justify-between border-b border-dark-blue/10 py-4 text-sm font-medium uppercase tracking-[0.12em] text-dark-blue/75 transition-colors duration-300 hover:text-dark-blue"
                >
                  <span className="flex items-center gap-3">
                    <FileText
                      className="h-4 w-4 text-lic-blue"
                      strokeWidth={1.4}
                    />

                    Forms
                  </span>

                  <ArrowRight
                    className="h-4 w-4 text-dark-blue/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-dark-blue"
                    strokeWidth={1.3}
                  />
                </motion.a>

                {/* Mobile LIC Payment */}
                <motion.a
                  href={siteData.payment.paymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  initial={{
                    opacity: 0,
                    x: -12,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: (links.length + 1) * 0.045,
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex items-center justify-between border-b border-dark-blue/10 py-4 text-sm font-medium uppercase tracking-[0.12em] text-dark-blue/75 transition-colors duration-300 hover:text-dark-blue"
                >
                  <span>LIC Payment</span>

                  <ArrowRight
                    className="h-4 w-4 text-dark-blue/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-dark-blue"
                    strokeWidth={1.3}
                  />
                </motion.a>

                {/* Mobile Contact */}
                <Link
                  href="/#contact"
                  onClick={closeMobileMenu}
                  className="mt-5 flex min-h-12 items-center justify-center gap-2 bg-yellow px-5 text-xs font-semibold uppercase tracking-[0.14em] text-dark-blue transition-colors duration-300 hover:bg-dark-blue hover:text-white"
                >
                  {siteData.navigation.ctaLabel}

                  <ArrowRight
                    className="h-4 w-4"
                    strokeWidth={1.5}
                  />
                </Link>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.button
            type="button"
            aria-label="Close navigation menu"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={closeMobileMenu}
            className="fixed inset-0 z-40 bg-dark-blue/25 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}