import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-4 border border-neutral-800 rounded-lg overflow-hidden bg-neutral-900/50 backdrop-blur-sm">
      <button
        className="w-full flex items-center justify-between p-4 text-left transition-colors hover:bg-neutral-800/50"
        onClick={onClick}
      >
        <span className="font-semibold text-white">{question}</span>
        {isOpen ? (
          <Minus className="h-5 w-5 text-purple-500" />
        ) : (
          <Plus className="h-5 w-5 text-purple-500" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-4 pt-0 text-neutral-400 text-sm leading-relaxed border-t border-neutral-800/50">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is CyberAi HackFest 2.0?",
      answer:
        "CyberAi HackFest 2.0 is the annual tech festival of SPU, featuring hackathons, coding competitions, robotics, and more. It's a platform for students to showcase their technical skills and innovation.",
    },
    {
      question: "How can I participate?",
      answer:
        "You can register through our official website. Keep an eye on the Timeline section for registration dates. Participation is open to students from all colleges.",
    },
    {
      question: "When is the event?",
      answer:
        "The main event is scheduled for January 17th and 18th, 2026. The 24-hour hackathon begins on the morning of the 17th.",
    },
    {
      question: "Where is the venue?",
      answer:
        "The event will be held at the Sankalchand Patel University (SPU) campus. Specific venues for different tracks will be announced closer to the date.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-wider font-[oswald] uppercase text-center lg:text-center">
        FA<span className="text-purple-500">QS</span>
      </h2>

      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
