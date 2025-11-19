import dynamic from 'next/dynamic';
import { FaHome } from 'react-icons/fa';
import { navItems } from "@/data";

// Dynamically import components that might use browser APIs
const Hero = dynamic(() => import("@/components/ui/Hero"), { ssr: true });
const FloatingNav = dynamic(() => import("@/components/ui/FloatingNav").then(mod => ({ default: mod.FloatingNav })), { ssr: true });
const Grid = dynamic(() => import("@/components/ui/Grid"), { ssr: false });
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), { ssr: true });
const Client = dynamic(() => import("@/components/ui/Client"), { ssr: true });
const Footer = dynamic(() => import("@/components/ui/Footer"), { ssr: true });

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
