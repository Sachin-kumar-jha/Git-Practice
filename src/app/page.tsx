import Nav from "../components/navbar"
import Hero from "../components/HeroPage"
import Benefits from "../components/BenefitsPage"
import Aboutsection from "../components/aboutSection"
import Contact from "../components/contacPaget"
import Footer from "../components/footer"
export default function Home() {
  return (
    <main className="main min-h-screen w-full flex-col items-center justify-between px-8 py-6 bg-[#fcfb00]">
       <Nav/>
       <Hero/>
       <Benefits/>
       <Aboutsection/>
       <Contact/>
       <Footer/>
</main>
    
  );
}
