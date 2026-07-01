"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#about");

  const handleNavClick = (href: string) => {
    setActiveHref(href);
    setOpen(false);
  };

  return (
    <nav className="bg-background sticky top-0 z-50 w-full border-b-4 border-black shadow-[4px_4px_0px_0px_#000000]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-margin-page">
        <a href="#" className="font-display text-2xl md:text-headline-md uppercase text-on-background">
          HeyRiyan
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative pb-1 font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-primary font-bold"
                    : "text-on-background hover:text-primary"
                }`}
              >
                {link.label}
                {/* Animated underline */}
                <span
                  className="absolute bottom-0 left-0 h-[4px] bg-black transition-all duration-300 ease-in-out"
                  style={{ width: isActive ? "100%" : "0%" }}
                />
              </a>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="neobrutalist-shadow border-4 border-black bg-primary-container px-6 py-2 font-label-bold text-label-bold uppercase text-on-background"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden border-4 border-black bg-primary-container p-2 transition-transform duration-150 active:scale-95"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu — animated slide-down */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 border-t-4 border-black bg-background px-6 py-4">
          {navLinks.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`font-medium transition-colors duration-150 ${
                  isActive ? "text-primary font-bold border-l-4 border-black pl-2" : "text-on-background"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="neobrutalist-shadow border-4 border-black bg-primary-container px-6 py-2 text-center font-label-bold text-label-bold uppercase text-on-background"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
