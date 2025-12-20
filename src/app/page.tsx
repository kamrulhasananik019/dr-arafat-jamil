import Image from "next/image";
import Hero from "./component/hero/hero";
import Header from "./component/header/header";
import Features from "./component/features/features";

export default function Home() {
  return (
  <div>
    <Header/>
    <Hero/>
    <Features/> 
  </div>
  );
}
