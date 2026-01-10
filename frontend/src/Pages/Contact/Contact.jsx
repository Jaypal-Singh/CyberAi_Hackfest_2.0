import React from "react";
import { GridBackground } from "../../Components/GridBackground/GridBackground.jsx";
import logo from "../../assets/hakathon_logo/logo.jpeg";
import ContactForm from "./ContactForm";
import FAQ from "./FAQ";

const Contact = () => {
  return (
    <section className="relative w-full py-20 bg-black" id="contact">
      <GridBackground className="absolute inset-0 z-0 h-full w-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Logo */}
        <header className="relative z-10 flex flex-col items-center mb-16 space-y-4">
          <div className="flex items-center gap-6">
            <img
              src={logo}
              alt="Ingenium 2026"
              className="h-[190px] object-contain mb-2  rounded-xl p-2"
            />
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Form Section */}
          <ContactForm />

          {/* FAQ Section */}
          <FAQ />
        </div>
      </div>
    </section>
  );
};

export default Contact;
