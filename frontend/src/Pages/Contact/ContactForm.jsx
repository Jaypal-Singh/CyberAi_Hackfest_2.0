import React, { useRef, useState } from 'react';
import { Send, CheckCircle, X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm = () => {
    const form = useRef();
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs
            .sendForm('service_33zkfwp', 'template_cnuui8f', form.current, {
                publicKey: '_ANPKEsn0Ypn2_EFX',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setIsSuccess(true);
                    form.current.reset();
                    setIsLoading(false);
                    setTimeout(() => setIsSuccess(false), 5000); // Auto close after 5s
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert('Failed to send message. Please try again.');
                    setIsLoading(false);
                },
            );
    };

    return (
        <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-wider font-[oswald] uppercase text-center lg:text-center">
                GET IN <span className="text-purple-500">TOUCH</span>
            </h2>

            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 md:p-8">
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            name="user_name"
                            id="name"
                            className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">
                            Your Email
                        </label>
                        <input
                            type="email"
                            name="user_email"
                            id="email"
                            className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2">
                            Your Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows={4}
                            className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                            placeholder="How can we help you?"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <span>Sending...</span>
                        ) : (
                            <>
                                <span>Send Message</span>
                                <Send className="h-4 w-4 cursor-pointer" />
                            </>
                        )}
                    </button>
                </form>
            </div>

            {/* Success Popup */}
            <AnimatePresence>
                {isSuccess && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50 }}
                        className="fixed bottom-10 right-10 z-50 bg-neutral-900 border border-green-500/30 text-white p-6 rounded-2xl shadow-[0_0_30px_rgba(34,197,94,0.3)] flex items-center gap-4 max-w-sm backdrop-blur-xl"
                    >
                        <div className="bg-green-500/20 p-3 rounded-full">
                            <CheckCircle className="h-8 w-8 text-green-500" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-lg font-bold text-green-400">Message Sent!</h4>
                            <p className="text-sm text-neutral-400">We'll get back to you shortly.</p>
                        </div>
                        <button
                            onClick={() => setIsSuccess(false)}
                            className="text-neutral-500 hover:text-white transition-colors"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ContactForm;
