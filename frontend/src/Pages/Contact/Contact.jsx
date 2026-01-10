import React from 'react';
import { GridBackground } from '../../Components/GridBackground/GridBackground.jsx';
import logo from '../../assets/hakathon_logo/logo.jpeg';
import ContactForm from './ContactForm';
import FAQ from './FAQ';

const Contact = () => {
    return (
        <section className="relative w-full py-20 bg-black" id="contact">
            <GridBackground className="absolute inset-0 z-0 h-full w-full" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Logo */}
                <div className="flex justify-center mb-16">
                    <img
                        src={logo}
                        alt="Ingenium 2026"
                        className="h-24 md:h-32 object-contain rounded-xl p-2"
                    />
                </div>

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
