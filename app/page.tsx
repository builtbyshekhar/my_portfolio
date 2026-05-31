import { FloatingNav } from "@/components/ui/FloatingNav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import Footer from "@/components/Footer";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#060606] text-white">
      <FloatingNav navItems={navItems} />

      <div className="relative z-10 flex flex-col">
        <Hero />

        <section className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <Experience />
        </section>

        <section className="mx-auto mt-32 w-full max-w-7xl px-6 lg:px-10">
          <RecentProjects />
        </section>

        <section className="mx-auto mt-32 w-full max-w-7xl px-6 lg:px-10">
          <Footer />
        </section>
      </div>
    </main>
  );
}