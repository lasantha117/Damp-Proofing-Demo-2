import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Testimonials } from "./components/Testimonials";
import { MapSection } from "./components/MapSection";
import { Stats } from "./components/Stats";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Gallery />
      <Testimonials />
      <MapSection />
      <Contact />
      <Footer />
    </div>
  );
}
