"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/libs/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.JSX.Element;
  }[];
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={cn(
        `
        fixed inset-x-0 top-0 z-[5000]
        w-full
        border-b border-white/5
        bg-white/[0.02]
        backdrop-blur-2xl
        supports-[backdrop-filter]:bg-white/[0.03]
        transition-all duration-300
        `,
        className
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 text-base font-semibold tracking-tight text-white"
        >
          Shekhar<span className="text-zinc-500">.</span>
        </Link>

        {/* Desktop Nav (Hidden on Mobile) */}
        <nav className="hidden sm:flex ml-6 items-center gap-8">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="whitespace-nowrap text-sm font-medium text-zinc-400 transition-all duration-300 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
          
          <a
            href="/shekhar_chaudhary_resume.pdf"
            download="Shekhar_Chaudhary_Resume.pdf"
            className="whitespace-nowrap text-sm font-medium text-zinc-400 transition-all duration-300 hover:text-white"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Hamburger Toggle (Hidden on Desktop) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="sm:hidden border-t border-white/10 bg-zinc-950/90 backdrop-blur-xl px-4 py-4">
          <nav className="flex flex-col gap-4">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                onClick={() => setIsOpen(false)} // Closes menu when a link is clicked
                className="text-base font-medium text-zinc-400 transition-all duration-300 hover:text-white"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/Shekhar_FullStack-Engineer.pdf"
              download="Shekhar_FullStack-Engineer.pdf"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-zinc-400 transition-all duration-300 hover:text-white"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};