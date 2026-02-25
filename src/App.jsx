import { LanguageProvider } from "./context/LanguageContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Iyengar from "./components/Iyengar.jsx";
import { ClientView, Slider2 } from "./components/ClientView.jsx";
import Testimonials from "./components/Testimonials.jsx";
import AsanaSection from "./components/AsanaSection.jsx";
import PranayamaSection from "./components/PranayamSection.jsx";
import Meditation from "./components/Meditation.jsx";
// import Gallery from "./components/Gallery.jsx";
// import Pricing from "./components/Pricing.jsx"; // commented out — discuss pricing via WhatsApp
import ShortsSlider from "./components/ShortsSlider.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <LanguageProvider>
      <div
        className="min-h-screen bg-gray-50 text-gray-900 overflow-hidden"
        style={{ WebkitFontSmoothing: "antialiased" }}
      >
        <Navbar />
        <main className="pt-2">
          <Header />
          <About />
          <Iyengar />
          <ClientView />
          <Testimonials />
          <AsanaSection />
          <PranayamaSection />
          <Meditation />
          <ShortsSlider />
          {/* <Gallery/> */}
          <Contact/>
          {/* <Pricing /> */}
          <Slider2 />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}