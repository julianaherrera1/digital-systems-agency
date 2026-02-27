import Hero from "@/components/sections/Hero";
import NavBar from "@/components/ui/NavBar";
import Challenges from "@/components/sections/Challenges";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Challenges />
    </main>
  );
}