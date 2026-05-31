export const navItems = [
  { name: "Experience", link: "#experience" }, 
  { name: "Architecture", link: "#projects" }, 
  { name: "GitHub", link: "https://github.com/builtbyshekhar" }, 
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Engineering AI-Native Architectures",
    description: "Bridging Python LLM backends with Next.js frontends.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
  },
  {
    id: 2,
    title: "Based in Bengaluru, India",
    description: "Available for global remote collaboration.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  },
  {
    id: 3,
    title: "Core Stack",
    description: "Next.js 15, TypeScript, Python, Vector DBs",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  },
  {
    id: 4,
    title: "Performance First.",
    description: "Obsessed with Sub-100ms LCP and stable 60fps animations.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
  },
];

export const projects = [
  {
    id: 1,
    title: "CareConnect | Clinical Collaboration Platform",
    des: "Engineered a secure full-stack platform using Next.js App Router and MongoDB. Implemented React Suspense for real-time AI/LLM response streaming without UI blocking.",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/mongo.svg",
      "/jest.svg",
      "/playwrite.svg",
      "/gsap.svg",
    ],
    link: "https://care-connect-shekhar.vercel.app",
    img: "/CConnect.png"
  },

  {
    id: 2,
    title: "ShipSpace | B2B Client Portal SaaS",
    des: "Architected a multi-tenant B2B portal with Payload CMS. Engineered strict RBAC and optimized data fetching via React Query and tRPC to isolate agency environments.",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/trpc.svg",
      "/payload.svg",
      "/mongo.svg",
    ],
    link: "https://ship-space-shekhar.vercel.app",
    img: "/SSpace.png"
  },

  {
    id: 3,
    title: "Visual Experience Engine",
    des: "Developed a performance-optimized landing page featuring complex GSAP DOM animations, achieving stable 60fps and reducing React reconciliation overhead by 40%.",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/gsap.svg",
    ],
    link: "https://gta-6-landing.vercel.app",
    img: "/GTA.png"
  },
];

export interface WorkExperienceItem {
  id: number;
  title: string;
  date: string;       
  desc: string[];     
  className?: string; 
  thumbnail?: string;
}

export const workExperience: WorkExperienceItem[] = [
  {
    id: 1,
    title: "Lead Frontend Engineer (Contract) | Shipyard",
    date: "April 2026 - May 2026",
    desc: [
      "Architected AI-Native UI: Led the frontend architecture for an 'anti-vibe-coding' agentic orchestrator, bridging a highly responsive React / Vite / TypeScript client with a Python backend to handle complex, stateful LLM workflows.",
      "Real-Time API Integration: Engineered a custom live chatbox interface, managing complex asynchronous state and API routing between the React frontend and external Python data streams with zero UI blocking.",
      "Technical Leadership: Acted as the sole Tech Lead, collaborating directly with the founder and UI/UX lead to define product scope, while aggressively triaging and managing open-source UI contributions to protect repository integrity."
    ],
    thumbnail: "/exp1.svg", 
  },
  {
    id: 2,
    title: "Independent Product Engineer | CareConnect",
    date: "July 2023 - Present",
    desc: [
      "Engineered a highly secure, full-stack clinical collaboration platform leveraging Next.js App Router and MongoDB to handle complex relational data flows between distinct user roles.",
      "Implemented Next.js Streaming and React Suspense to manage asynchronous data fetching, optimizing the frontend for real-time AI/LLM response streaming and preventing UI blocking during heavy payload resolutions.",
      "Designed a bulletproof data-handling pipeline utilizing strict Zod schema validation and Next.js Server Actions, optimizing database query indexing to significantly reduce read latency under heavy concurrent load."
    ],
    thumbnail: "/exp2.svg", 
  },
  {
    id: 3,
    title: "Independent Product Engineer | ShipSpace",
    date: "July 2023 - Present",
    desc: [
      "Architected a complex multi-tenant B2B client portal utilizing Next.js 15 and Payload CMS, successfully engineering strict RBAC to isolate data environments for distinct agency clients within a single monolithic codebase.",
      "Engineered advanced data flows and optimized dashboard data fetching using React Query and tRPC, heavily reducing server load and ensuring real-time state synchronization across concurrent multi-tenant sessions.",
      "Integrated automated subscription tiering and payment workflows via Stripe webhooks, building secure, resilient monetization pipelines directly into the user interface."
    ],
    thumbnail: "/exp3.svg", 
  },
  {
    id: 4,
    title: "Independent Frontend Engineer | Visual Experience Engine",
    date: "2023 - Present",
    desc: [
      "Developed a performance-optimized, cinematic landing page featuring complex, scroll-triggered DOM animations.",
      "Achieved stable 60fps performance on main-thread animations by leveraging GPU acceleration, reducing React reconciliation overhead by 40%.",
      "Optimized Core Web Vitals (LCP/CLS) to sub-100ms scores, ensuring high-fidelity rendering and zero layout shift on consumer-grade devices."
    ],
    thumbnail: "/exp4.svg", 
  }
];

export const socialMedia = [
  {
    id: 1,
    img: "/github.svg",
    link: "https://github.com/builtbyshekhar"
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/builtbyshekhar"
  },
  {
    id: 3,
    img: "/linkedin.svg",
    link: "https://www.linkedin.com/in/shekhar-anand-chaudhary-76a96b1b1/"
  },
];