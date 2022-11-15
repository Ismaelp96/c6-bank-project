import { Header } from "../components/header";
import { SectionBank } from "../components/home/sectionBank";
import { SectionCards } from "../components/home/sectionCards";
import { SectionHero } from "../components/home/sectionHero";

export default function Home() {
  return (
    <>
      <Header />
      <SectionHero />
      <SectionCards />
      <SectionBank />
    </>
  );
}
