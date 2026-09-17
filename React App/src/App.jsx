import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import TrustStrip from './components/TrustStrip.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Fleet from './components/Fleet.jsx';
import WhyUs from './components/WhyUs.jsx';
import Requirements from './components/Requirements.jsx';
import Coverage from './components/Coverage.jsx';
import Testimonials from './components/Testimonials.jsx';
import Faq from './components/Faq.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <HowItWorks />
        <Fleet />
        <WhyUs />
        <Requirements />
        <Coverage />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
