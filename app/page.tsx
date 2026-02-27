import Hero from "@/components/sections/Hero";
import NavBar from "@/components/ui/NavBar";
import Challenges from "@/components/sections/Challenges";
import Solutions from "@/components/sections/Solutions";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Challenges />
      <Solutions />
    </main>
  );
}