import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import { navItems } from "@/data";
import HoverImageComponent from "@/components/Skills";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex-justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}
        />
        <Hero />
        <Grid />
        <HoverImageComponent />
        <RecentProjects/>
      </div>
    </main>
    
  );
}
