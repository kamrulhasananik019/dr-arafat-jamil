import Image from "next/image";
import Hero from "./component/hero/hero";
import Header from "./component/header/header";
import Features from "./component/features/features";
import About from "./component/about/about";
import Services from "./component/Services/services";

export default function Home() {
  return (
  <div>
    <Header/>
    <Hero/>
    <Features/> 
    <About/>
    <Services/>
  </div>
  );
}
