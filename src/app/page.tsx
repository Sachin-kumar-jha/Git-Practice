import Nav from "./components/navbar"
import Cards from "./components/cards"
import ImageSection from "./components/images"
export default function Home() {
  return (

    <main className="main min-h-screen w-full flex-col items-center justify-between px-8 py-6 bg-[#fcfb00]">
     
       <Nav/>
       <Cards/>
       <ImageSection/>
</main>
    
  );
}
