import { FloatingNav } from "@/components/ui/FloatingNav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import Footer from "@/components/Footer";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#060606] text-white antialiased">
      
      <FloatingNav navItems={navItems} />
      <Hero />
      <Experience />
      <RecentProjects />
      <Footer />
      
    </main>
  );
}