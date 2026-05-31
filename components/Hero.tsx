import { FaArrowRight, FaGithub } from "react-icons/fa6";

const stack = [
  {
    title: "LLM Workflows",
    desc: "Prompt pipelines • RAG • streaming",
    style: "top-8 left-8",
  },
  {
    title: "Next.js 15",
    desc: "Server Actions • App Router • Edge",
    style: "top-40 right-6",
  },
  {
    title: "TypeScript",
    desc: "Type-safe APIs & scalable frontend architecture",
    style: "bottom-24 left-16",
  },
  {
    title: "Python",
    desc: "Data pipelines • AI tooling • backend services",
    style: "bottom-8 right-10",
  },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#060606] text-white">
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(120,119,198,0.18),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.06),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(99,102,241,0.15),transparent_35%)]" />

      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10">
        {/* LEFT */}
        <div>
          {/* status */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm tracking-wide text-zinc-300">
              Available for Full-Stack & AI Engineering Roles
            </span>
          </div>

          {/* heading */}
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl lg:text-8xl leading-[0.95]">
            Building
            <span className="block text-zinc-500">Digital Products</span>
            <span className="block bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
              with Intelligence
            </span>
          </h1>

          {/* copy */}
          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            I’m Shekhar — a full-stack engineer crafting AI-native products with
            <span className="text-zinc-200"> Next.js, TypeScript, Python</span>{" "}
            and modern backend architecture. From polished frontend experiences
            to scalable APIs and intelligent systems.
          </p>

          {/* buttons */}
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 font-medium text-black transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/10"
            >
              View Projects
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="https://github.com/builtbyshekhar"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-7 py-4 font-medium text-white backdrop-blur-xl transition hover:bg-white/[0.05]"
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative hidden h-[560px] lg:block">
          {/* center orb */}
          <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-white/10 to-indigo-500/20 blur-3xl" />

          {/* floating cards */}
          {stack.map((item) => (
            <div
              key={item.title}
              className={`absolute ${item.style} w-64 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl shadow-2xl transition duration-500 hover:-translate-y-2 hover:bg-white/[0.05]`}
            >
              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {item.desc}
              </p>
            </div>
          ))}

          {/* connection lines */}
          <div className="absolute left-1/2 top-1/2 h-[1px] w-[320px] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute left-1/2 top-1/2 h-[320px] w-[1px] -translate-y-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;