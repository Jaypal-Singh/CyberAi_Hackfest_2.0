import React from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
    return (
        <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-wider font-[oswald] uppercase text-center lg:text-center">
                GET IN <span className="text-purple-500">TOUCH</span>
            </h2>

            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 md:p-8">
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                            placeholder="How can we help you?"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center gap-2"
                    >
                        <span>Send Message</span>
                        <Send className="h-4 w-4" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
