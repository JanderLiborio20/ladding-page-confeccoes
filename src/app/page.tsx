import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MyStory from "@/components/MyStory";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <MyStory />
        <Services />
        <Gallery />
        <Testimonials />
        <Location />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
