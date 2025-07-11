import HeroSection from "@/components/HeroSection";
import QuemSomos from "@/components/QuemSomos";
import Problema from "@/components/Problema";
import Solucao from "@/components/Solucao";
import Contato from "@/components/Contato";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <QuemSomos />
      <Problema />
      <Solucao />
      <Contato />
    </main>
  );
}
