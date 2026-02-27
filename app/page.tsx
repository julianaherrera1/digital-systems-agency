import Hero from "@/components/sections/Hero";
import NavBar from "@/components/ui/NavBar";
import Challenges from "@/components/sections/Challenges";
import Solutions from "@/components/sections/Solutions";
import Process from "@/components/sections/Process";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Challenges />
      <Solutions />
      <Process />
    </main>
  );
}