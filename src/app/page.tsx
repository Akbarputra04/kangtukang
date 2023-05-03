import About from "@/components/about";
import CTA from "@/components/cta";
import Feature from "@/components/feature";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Service from "@/components/service";

export default function Home() {
  return (
    <>
      <Hero />
      <About/>
      <Service/>
      <Feature/>
      <CTA/>
      <Footer/>
    </>
  )
}
