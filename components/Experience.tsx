import Image from "next/image";
import { workExperience } from "@/data";

const Experience = () => {
  return (
    <section id="experience" className="relative pt-20 sm:pt-32 pb-10 sm:pb-16"> 
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-500">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Building Products with
            <span className="block text-zinc-400">
              Engineering Precision
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-8 text-zinc-400">
            Crafting scalable applications, modern architectures, and
            AI-native digital experiences.
          </p>
        </div>

        {/* cards */}
        <div className="mx-auto mt-12 sm:mt-20 max-w-5xl space-y-6 sm:space-y-8">
          {workExperience.map((card) => (
            <div
              key={card.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.05]"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-r from-indigo-500/5 via-transparent to-white/5" />

              <div className="relative z-10 flex flex-col gap-4 sm:gap-6 sm:flex-row">
                
                {/* Header Section for Mobile (Icon + Title side by side) */}
                <div className="flex items-start gap-4 sm:contents">
                  {card.thumbnail && (
                    <div className="flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                      <Image
                        src={card.thumbnail}
                        alt={card.title}
                        width={32}
                        height={32}
                        className="h-8 w-8 sm:h-auto sm:w-auto object-contain"
                      />
                    </div>
                  )}

                  <div className="flex flex-col sm:hidden">
                    <h3 className="text-lg font-semibold text-white leading-tight">
                      {card.title}
                    </h3>
                    <span className="text-xs text-zinc-500 mt-1">
                      {card.date}
                    </span>
                  </div>
                </div>

                {/* content */}
                <div className="flex-1">
                  {/* Desktop Title (Hidden on mobile to avoid duplication) */}
                  <div className="hidden sm:flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {card.title}
                    </h3>
                    <span className="text-sm text-zinc-500">
                      {card.date}
                    </span>
                  </div>

                  {/* Bullet Points */}
                  <ul className="mt-2 sm:mt-6 space-y-3 sm:space-y-4 text-sm sm:text-base text-zinc-400">
                    {card.desc.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 leading-relaxed"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;