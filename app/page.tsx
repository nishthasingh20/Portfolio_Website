import Hero from "@/components/Hero";
import { FloatingDock } from "@/components/ui/FloatingDock";
import { title } from "process";
import Grid from "@/components/Grid";
import { FaHome, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { MdEmail } from "react-icons/md";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex-justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingDock items={[
          {title: 'Home', icon: <FaHome />, href: '/'},
          {title: 'Projects', icon: <GrProjects />, href: '/'},
          {title: 'Github', icon: <FaGithubSquare />, href: '/'},
          {title: 'Linkedln', icon: <FaLinkedin />, href: '/'},
          {title: 'Gmail', icon: <MdEmail />, href: '/'}
        ]}/>
        <Hero />
        <Grid />
      </div>
    </main>
    
  );
}
