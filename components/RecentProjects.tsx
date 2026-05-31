import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { projects } from "@/data";

const RecentProjects = () => {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
            Selected Work
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Architecture &
            <span className="block text-zinc-400">Case Studies</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            A collection of products, engineering systems, and AI-powered
            applications built with performance, scale, and thoughtful design.
          </p>
        </div>

        {/* project grid */}
        <div className="mt-24 grid gap-10 lg:grid-cols-2">
          {projects.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:bg-white/[0.04]
              "
            >
              {/* image */}
              <div className="relative aspect-video overflow-hidden">
              <Image
              src={item.img}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>

              {/* content */}
              <div className="p-8">
                {/* icons */}
                <div className="mb-6 flex flex-wrap gap-3">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="
                        flex h-10 w-10 items-center justify-center
                        rounded-full
                        border border-white/10
                        bg-white/[0.04]
                        backdrop-blur-md
                      "
                    >
                    <Image
                      src={icon}
                      alt="tech stack"
                      width={18}
                      height={18}
                      className="h-auto w-auto object-contain"
                    />
                    </div>
                  ))}
                </div>

                {/* title */}
                <h3
                  className="
                    text-2xl
                    font-semibold
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-zinc-200
                  "
                >
                  {item.title}
                </h3>

                {/* description */}
                <p className="mt-4 text-base leading-7 text-zinc-400">
                  {item.des}
                </p>

                {/* CTA */}
                <div
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-3
                    text-sm
                    font-medium
                    text-zinc-300
                    transition-all
                    duration-300
                    group-hover:gap-4
                    group-hover:text-white
                  "
                >
                  View Project
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;