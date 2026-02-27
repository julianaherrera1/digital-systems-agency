import Hero from "@/components/sections/Hero";
import NavBar from "@/components/ui/NavBar";
import Challenges from "@/components/sections/Challenges";
import Solutions from "@/components/sections/Solutions";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Challenges />
      <Solutions />
      <Process />
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}