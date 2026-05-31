import Image from "next/image";
import { workExperience } from "@/data";

const Experience = () => {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
            Experience
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Building Products with
            <span className="block text-zinc-400">
              Engineering Precision
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Crafting scalable applications, modern architectures, and
            AI-native digital experiences.
          </p>
        </div>

        {/* cards */}
        <div className="mx-auto mt-20 max-w-5xl space-y-8">
          {workExperience.map((card) => (
            <div
              key={card.id}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:bg-white/[0.05]
              "
            >
              {/* glow on hover */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-r from-indigo-500/5 via-transparent to-white/5" />

              <div className="relative z-10 flex flex-col gap-6 sm:flex-row">
                {/* icon */}
                {card.thumbnail && (
                  <div
                    className="
                      flex h-16 w-16 shrink-0 items-center justify-center
                      rounded-2xl
                      border border-white/10
                      bg-white/[0.04]
                    "
                  >
                    <Image
                      src={card.thumbnail}
                      alt={card.title}
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </div>
                )}

                {/* content */}
                <div className="flex-1">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-2xl font-semibold text-white">
                      {card.title}
                    </h3>

                    <span className="text-sm text-zinc-500">
                      {card.date}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-4 text-zinc-400">
                    {card.desc.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 leading-7"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-500" />
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