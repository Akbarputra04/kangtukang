import About from "@/components/about";
import CTA from "@/components/cta";
import Feature from "@/components/feature";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";
import Service from "@/components/service";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About/>
      <Service/>
      <Feature/>
      <Portfolio/>
      <CTA/>
      <Footer/>
    </>
  )
}
