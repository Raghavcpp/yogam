import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header";
import About from "./components/About";
import Iyengar from "./components/Iyengar";
import Founder from "./components/Founder";
import Testimonials from "./components/Testimonials";
import AsanaPranayama from "./components/AsanaPranayama";
import Meditation from "./components/Meditation";
import Pricing from "./components/Pricing";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

import "./index.css";

export default function App() {
  // Example images — replace with your own gallery images
  const sampleImages = [
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=60",
    "https://images.unsplash.com/photo-1554299738-1a0a1fb013d2?w=800&q=60",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=60",
    "https://images.unsplash.com/photo-1526403224741-1b1e6f80b19f?w=800&q=60",
  ];

  return (
    <LanguageProvider>
      <div
        className="min-h-screen bg-gray-50 text-gray-900"
        style={{ WebkitFontSmoothing: "antialiased" }}
      >
        <Navbar />
        <main className="pt-2">
          <Header />
          <About />
          <Iyengar />
          <Founder />
          <Testimonials />
          <AsanaPranayama />
          <Meditation />
          <Pricing />
          <Gallery images={sampleImages} />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
