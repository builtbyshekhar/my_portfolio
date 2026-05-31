// "use client";
// import React from "react";

// import { AnimatePresence, motion } from "motion/react";
// import  {CanvasRevealEffect}  from "@/components/ui/canvas-reveal-effect";

// const  Approach = () => {
//   return (
//     <section className="w-full py-20">
//       <h1 className="heading">My <span className="text-purple">approach</span></h1>
//       <div className="py-20 flex flex-col lg:flex-row items-center justify-center gap-4">
//         <Card title="Planning & Strategy" icon={<AceternityIcon order="Phase 1" />} description={"We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements."}>
//           <CanvasRevealEffect
//             animationSpeed={5.1}
//             containerClassName="bg-emerald-900"

//           />
//         </Card>
//         <Card title="Development & Progress Update" icon={<AceternityIcon order="Phase 2"/>} description="Once we agree on the plan, I cue my lofi playlist and dive into
//           coding. From initial sketches to polished code, I keep you updated
//           every step of the way.">
//           <CanvasRevealEffect
//             animationSpeed={3}
//             containerClassName="bg-black"
//             colors={[
//               [236, 72, 153],
//               [232, 121, 249],
//             ]}
//             dotSize={2}
            
//           />
//           {/* Radial gradient for the cute fade */}
//           {/* <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" /> */}
//         </Card>
//         <Card title="Development & Launch" icon={<AceternityIcon order="Phase 3" />} description="This is where the magic happens! Based on the approved design, 
//           I'll translate everything into functional code, building your website
//           from the ground up.">
//           <CanvasRevealEffect
//             animationSpeed={3}
//             containerClassName="bg-sky-600"
//             colors={[[125, 211, 252]]}
            
//           />
//         </Card>
//       </div>
//     </section>
//   );
// }

// const Card = ({
//   title,
//   icon,
//   children,
//   description,
// }: {
//   title: string;
//   icon: React.ReactNode;
//   children?: React.ReactNode;
//   description: string;
// }) => {
//   const [hovered, setHovered] = React.useState(false);
//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
//     >
//       <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
//       <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
//       <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
//       <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

//       <AnimatePresence>
//         {hovered && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="h-full w-full absolute inset-0"
//           >
//             {children}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <div className="relative z-20">
//         <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
//           {icon}
//         </div>
//         <h2 className="dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center text-3xl">
//           {title}
//         </h2>
//         <h2 className="text-sm dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center"
//         style={{color: '#e4ecff'}}>
//           {description}
//         </h2>
//       </div>
//     </div>
//   );
// };

// const AceternityIcon = ({order}: {order: string}) => {
//   return (
//     <div>
//       <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
//   <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
//   <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2  font-bold text-white backdrop-blur-3xl text-2xl">
// {order}
//   </span>
// </button>
//     </div>
//   );
// };

// export const Icon = ({ className, ...rest }: any) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth="1.5"
//       stroke="currentColor"
//       className={className}
//       {...rest}
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
//     </svg>
//   );
// };

// export default Approach;
"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

const Approach = () => {
  return (
    <section className="w-full py-24 sm:py-32 bg-white dark:bg-black" id="approach">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Engineering Methodology
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
          How I architect and execute scalable web products.
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4">
        
        {/* Phase 1: Architecture */}
        <Card 
          title="System Architecture & Scope" 
          icon={<PhaseBadge order="Phase 1" />} 
          description="Defining strict data patterns, state management, and component architecture before writing a single line of code. Focus on scalability and security (RBAC, Zod validation)."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-gray-900 dark:bg-gray-900"
            colors={[[16, 24, 39]]} // Deep Slate
          />
        </Card>

        {/* Phase 2: Execution */}
        <Card 
          title="High-Velocity Execution" 
          icon={<PhaseBadge order="Phase 2"/>} 
          description="Building scalable UIs with Next.js 15 and TypeScript. Implementing React Suspense and Streaming to handle heavy payloads and asynchronous LLM workflows without blocking the UI."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-blue-900 dark:bg-blue-900"
            colors={[[30, 58, 138], [37, 99, 235]]} // Professional Blues
            dotSize={2}
          />
        </Card>

        {/* Phase 3: Optimization */}
        <Card 
          title="Optimization & Delivery" 
          icon={<PhaseBadge order="Phase 3" />} 
          description="Relentless focus on performance. Reducing React reconciliation overhead, optimizing Core Web Vitals to sub-100ms LCP, and ensuring stable 60fps across the application."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[[255, 255, 255]]} // Stark Black & White
          />
        </Card>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-gray-200 dark:border-white/10 group/canvas-card flex items-center justify-center bg-gray-50 dark:bg-black max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl transition-colors"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-gray-300 dark:text-gray-600" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-gray-300 dark:text-gray-600" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-gray-300 dark:text-gray-600" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-gray-300 dark:text-gray-600" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0 rounded-3xl overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-6">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center text-2xl">
          {title}
        </h2>
        <p className="text-sm dark:text-gray-300 opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-gray-700 mt-4 font-medium group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

// Replaced the spinning gradient button with a stark, professional pill badge
const PhaseBadge = ({order}: {order: string}) => {
  return (
    <div className="inline-flex h-12 items-center justify-center rounded-full border border-gray-200 dark:border-white/20 bg-white dark:bg-black px-6 py-2 font-bold text-gray-900 dark:text-white shadow-sm transition-colors">
      {order}
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach;