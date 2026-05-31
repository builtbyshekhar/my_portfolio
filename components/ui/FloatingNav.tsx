import React from "react";
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
        `,
        className
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* logo */}
        <Link
          href="/"
          className="shrink-0 text-base font-semibold tracking-tight text-white"
        >
          Shekhar<span className="text-zinc-500">.</span>
        </Link>

        {/* nav links */}
        <nav className="ml-6 flex items-center gap-5 overflow-x-auto scrollbar-none sm:gap-8">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="
                whitespace-nowrap
                text-sm
                font-medium
                text-zinc-400
                transition-all
                duration-300
                hover:text-white
              "
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};