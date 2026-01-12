import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Target, Lightbulb, Trophy } from 'lucide-react';
import './ProblemStatements.css';

const ProblemStatements = () => {
    const { trackId } = useParams();

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Map track IDs/Slugs to Data
    const tracksData = {
        'ai-ml': {
            title: "Artificial Intelligence & Machine Learning",
            description: "Leverage the power of AI & ML to solve complex real-world problems through automation, prediction, and optimization.",
            color: "#ec4899",
            problems: [
                {
                    id: 1,
                    title: "Intelligent Automation Systems",
                    description: "Develop an AI-driven system to automate repetitive tasks in industries or daily life, improving efficiency and reducing human error.",
                    outcome: "A functional prototype demonstrating automated workflow processing."
                },
                {
                    id: 2,
                    title: "AI for Healthcare, Agriculture, and Education",
                    description: "Create varied AI solutions addressing key challenges: disease diagnosis aid, crop yield prediction, or personalized learning assistants.",
                    outcome: "An impactful AI application tailored for a specific sector (Healthcare, Agri, or Edu)."
                },
                {
                    id: 3,
                    title: "Computer Vision & NLP Applications",
                    description: "Build an application utilizing Computer Vision for object detection or NLP for language processing tasks like translation or sentiment analysis.",
                    outcome: "A real-time vision or language processing application."
                },
                {
                    id: 4,
                    title: "AI-based Predictive Analytics",
                    description: "Design a model that uses historical data to predict future trends, such as stock market movements, weather patterns, or sales forecasting.",
                    outcome: "A predictive dashboard visualizing data trends and future forecasts."
                }
            ]
        },
        'cyber-security': {
            title: "Cyber Security & Digital Forensics",
            description: "Secure the digital world by building robust solutions against cyber threats, vulnerabilities, and digital crimes.",
            color: "#a855f7",
            problems: [
                {
                    id: 1,
                    title: "Secure Authentication Systems",
                    description: "Develop a robust multi-factor authentication system or biometric security solution to prevent unauthorized access.",
                    outcome: "A secure login module with advanced authentication features."
                },
                {
                    id: 2,
                    title: "Threat Detection and Prevention",
                    description: "Create a system that monitors network traffic or system logs to detect and block malicious activities or intrusions in real-time.",
                    outcome: "An intrusion detection system (IDS) dashboard."
                },
                {
                    id: 3,
                    title: "Blockchain and Cryptographic Applications",
                    description: "Implement a decentralized application (DApp) or secure data storage solution using blockchain technology to ensure data integrity.",
                    outcome: "A functional blockchain-based prototype for data security."
                },
                {
                    id: 4,
                    title: "Cybercrime Analysis and Digital Forensics",
                    description: "Build a tool to assist in digital forensic investigations, such as file recovery, metadata analysis, or evidence tracking.",
                    outcome: "A digital forensics toolkit or reporting application."
                }
            ]
        },
        'smart-technologies': {
            title: "Smart & Sustainable Technologies",
            description: "Innovate for a greener future with smart technologies that promote sustainability and energy efficiency.",
            color: "#f97316",
            problems: [
                {
                    id: 1,
                    title: "Smart Cities and IoT Solutions",
                    description: "Design an IoT-based solution for smart city management, such as smart parking, waste management, or intelligent street lighting.",
                    outcome: "A prototype managing a specific smart city component."
                },
                {
                    id: 2,
                    title: "Energy-efficient and Green Technologies",
                    description: "Develop a system to monitor and optimize energy consumption in buildings or industrial processes to reduce carbon footprint.",
                    outcome: "An energy monitoring and optimization dashboard."
                },
                {
                    id: 3,
                    title: "Waste Management and Sustainability Solutions",
                    description: "Create a solution for efficient waste segregation, recycling, or tracking to promote environmental sustainability.",
                    outcome: "A smart waste management system or tracking app."
                }
            ]
        },
        'industry-4-0': {
            title: "Industry 4.0 & Emerging Technologies",
            description: "Revolutionize manufacturing and industrial processes using automation, data exchange, and smart technologies.",
            color: "#8b5cf6",
            problems: [
                {
                    id: 1,
                    title: "Robotics and Automation",
                    description: "Design and simulate a robotic system for industrial automation, performing tasks like assembly, pick-and-place, or quality inspection.",
                    outcome: "A simulation or prototype of an industrial robot automation."
                },
                {
                    id: 2,
                    title: "Cloud, Edge, and Quantum Computing Concepts",
                    description: "Develop a solution leveraging cloud or edge computing for real-time data processing, or explore quantum algorithms.",
                    outcome: "An application demonstrating distributed computing or quantum concepts."
                },
                {
                    id: 3,
                    title: "AIoT and Digital Twins",
                    description: "Combine AI with IoT to create smart connected devices, or build a digital twin for real-time monitoring and simulation of physical assets.",
                    outcome: "An AIoT system or detailed digital twin visualization."
                }
            ]
        }
    };

    const trackData = tracksData[trackId];

    if (!trackData) {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
                <h2 className="text-3xl font-bold mb-4">Track Not Found</h2>
                <Link to="/" className="text-purple-500 hover:text-purple-400 flex items-center">
                    <ArrowLeft className="mr-2" /> Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="problem-statements-container relative text-white pt-24 px-4 md:px-8">
            {/* Background Grid */}
            <div className="absolute inset-0 grid-bg pointer-events-none z-0"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <Link
                    to="/"
                    className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group"
                >
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Tracks
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                        <span className="text-gradient">{trackData.title}</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
                        {trackData.description}
                    </p>
                </motion.div>

                {/* Problem Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {trackData.problems.map((problem, index) => (
                        <motion.div
                            key={problem.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card rounded-2xl p-8 flex flex-col h-full relative overflow-hidden group"
                        >
                            {/* Hover Glow Effect */}
                            <div
                                className="absolute -right-10 -top-10 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                                style={{ backgroundColor: trackData.color }}
                            ></div>

                            <div className="flex items-center mb-6">
                                <div
                                    className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                                    style={{ backgroundColor: `${trackData.color}20`, color: trackData.color }}
                                >
                                    <Target className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white leading-tight">
                                    {problem.title}
                                </h3>
                            </div>

                            <div className="space-y-6 flex-grow">
                                <div>
                                    <h4 className="flex items-center text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                                        <Lightbulb className="w-4 h-4 mr-2" />
                                        Problem Description
                                    </h4>
                                    <p className="text-gray-300 leading-relaxed text-sm">
                                        {problem.description}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-white/10">
                                    <h4 className="flex items-center text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                                        <Trophy className="w-4 h-4 mr-2" />
                                        Expected Outcome
                                    </h4>
                                    <p className="text-gray-300 leading-relaxed text-sm">
                                        {problem.outcome}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProblemStatements;
