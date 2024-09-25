import Hero from "@/components/ui/Hero";
import { FaHome } from 'react-icons/fa';
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/ui/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Client from "@/components/ui/Client";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav  navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentProjects/>
        <Client/>
        <Footer/>
     </div>
    </main>
  );
}
