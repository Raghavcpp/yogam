import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header";
import About from "./components/About";
import Iyengar from "./components/Iyengar";
import {ClientView,Slider2} from "./components/ClientView.jsx";
import Testimonials from "./components/Testimonials";
import AsanaSection from "./components/AsanaSection";
import PranayamaSection from "./components/PranayamSection";
import Meditation from "./components/Meditation";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import "./index.css";

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
          <Pricing />
          <Slider2 />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
