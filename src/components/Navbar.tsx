"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

import { siteData } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /* ---------------------------------------------------------------------- */
  /* Scroll state                                                           */
  /* ---------------------------------------------------------------------- */

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

  /* ---------------------------------------------------------------------- */
  /* Escape key                                                             */
  /* ---------------------------------------------------------------------- */

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

  /* ---------------------------------------------------------------------- */
  /* Lock page scroll while mobile navigation is open                      */
  /* ---------------------------------------------------------------------- */

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

  return (
    <>
      {/* Navigation */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || mobileMenuOpen
            ? "border-b border-silver/10 bg-midnight/85 py-4 backdrop-blur-xl"
            : "bg-transparent py-6"
          }`}
        aria-label="Primary navigation"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          {/* Brand */}
          <a
            href="#home"
            onClick={closeMobileMenu}
            className="group flex min-w-0 flex-col"
            aria-label={`${siteData.global.name} — Home`}
          >
            <span className="truncate font-serif text-lg tracking-wide text-off-white transition-colors duration-300 group-hover:text-silver">
              {siteData.global.name}
            </span>

            <span className="mt-0.5 text-[9px] uppercase tracking-[0.2em] text-silver/70">
              {siteData.global.designation}
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-6 md:flex lg:gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative py-2 text-[10px] uppercase tracking-[0.14em] text-light-silver/75 transition-colors duration-300 hover:text-off-white"
              >
                {link.label}

                <span className="absolute bottom-0 left-0 h-px w-0 bg-silver transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* Main contact CTA */}
            <a
              href="#contact"
              className="group ml-1 inline-flex items-center gap-2 border border-silver/20 bg-soft-blue/30 px-5 py-2.5 text-[10px] uppercase tracking-[0.16em] text-off-white transition-all duration-300 hover:border-silver/40 hover:bg-soft-blue/60"
            >
              {siteData.navigation.ctaLabel}

              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() =>
              setMobileMenuOpen((previous) => !previous)
            }
            className="flex h-10 w-10 items-center justify-center border border-silver/15 text-silver transition-colors duration-300 hover:border-silver/40 hover:text-off-white md:hidden"
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
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
              className="overflow-hidden border-t border-silver/10 bg-midnight/95 backdrop-blur-xl md:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col px-6 py-5">
                {links.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
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
                    className="group flex items-center justify-between border-b border-silver/10 py-4 text-sm uppercase tracking-[0.12em] text-light-silver transition-colors duration-300 hover:text-off-white"
                  >
                    <span>{link.label}</span>

                    <ArrowRight
                      className="h-4 w-4 text-silver/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-silver"
                      strokeWidth={1.3}
                    />
                  </motion.a>
                ))}

                <a
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="mt-5 flex min-h-12 items-center justify-center gap-2 bg-silver px-5 text-xs font-semibold uppercase tracking-[0.14em] text-midnight transition-colors duration-300 hover:bg-off-white"
                >
                  {siteData.navigation.ctaLabel}

                  <ArrowRight
                    className="h-4 w-4"
                    strokeWidth={1.5}
                  />
                </a>
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
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}