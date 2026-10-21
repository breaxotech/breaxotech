"use client";

import React, { useEffect, useState } from "react";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Solutions } from "@/components/sections/Solutions";
import { Approach } from "@/components/sections/Approach";
import { Process } from "@/components/sections/Process";
import { Products } from "@/components/sections/Products";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { ScrollObserver } from "@/components/ui/ScrollObserver";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = ["hero", "services", "solutions", "approach", "process", "products", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ScrollObserver />
      <AmbientBackground />
      <Navbar activeSection={activeSection} />
      
      <main id="mainContent">
        <Hero />
        <Services />
        <Solutions />
        <Approach />
        <Process />
        <Products />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
      <div id="toastContainer" className="toast-container" aria-live="polite" aria-atomic="true"></div>
    </>
  );
}
