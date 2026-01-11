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
                    title: "AI-Powered Healthcare Diagnostics",
                    description: "Develop a system that uses computer vision and deep learning to analyse medical images (X-rays, MRIs) for early detection of diseases.",
                    outcome: "A web/mobile app providing preliminary diagnostic reports to assist doctors."
                },
                {
                    id: 2,
                    title: "Personalized Learning Assistant",
                    description: "Create an adaptive learning platform that analyzes student performance and recommends personalized study paths and resources.",
                    outcome: "An AI tutor that adapts to the user's learning pace and style."
                },
                {
                    id: 3,
                    title: "Predictive Maintenance for Industry",
                    description: "Build a model to predict equipment failures in manufacturing plants using sensor data to minimize downtime.",
                    outcome: "A dashboard showing health status and failure probability of machinery."
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
                    title: "Phishing Detection System",
                    description: "Develop a browser extension or application that identifies and blocks phishing websites and emails in real-time.",
                    outcome: "A tool that alerts users about potential phishing attempts with high accuracy."
                },
                {
                    id: 2,
                    title: "Blockchain-based Identity Management",
                    description: "Create a decentralized identity management system to give users control over their personal data and prevent identity theft.",
                    outcome: "A secure ID wallet app powered by blockchain."
                },
                {
                    id: 3,
                    title: "Network Intrusion Detection",
                    description: "Build an ML-based system to detect anomalies and potential intrusions in a network traffic log.",
                    outcome: "A monitoring dashboard alerting admins of suspicious activities."
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
                    title: "Smart Waste Management System",
                    description: "Design an IoT-enabled waste management system that optimizes garbage collection routes based on bin fill levels.",
                    outcome: "A system reducing fuel consumption and improving city cleanliness."
                },
                {
                    id: 2,
                    title: "Renewable Energy Monitoring",
                    description: "Create a platform to monitor and optimize the performance of solar panels or wind turbines for residential users.",
                    outcome: "An app tracking energy generation and suggesting efficiency improvements."
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
                    title: "Digital Twin for Assembly Line",
                    description: "Create a digital twin simulation of a manufacturing assembly line to optimize workflow and detect bottlenecks.",
                    outcome: "A visual simulation dashboard for process optimization."
                }
            ]
        },
        'big-data': {
            title: "Big Data",
            description: "Handle widespread data sets to extract meaningful insights.",
            color: "#3b82f6",
            problems: [
                {
                    id: 1,
                    title: "Real-time Traffic Analysis",
                    description: "Analyze real-time traffic data to optimize traffic light timings and reduce congestion in smart cities.",
                    outcome: "A system that adjusts traffic signals dynamically based on flow."
                }
            ]
        },
        'cloud-computing': {
            title: "Cloud Computing",
            description: "Scalable and on-demand computing resources.",
            color: "#0ea5e9",
            problems: [
                {
                    id: 1,
                    title: "Serverless Microservices Orchestrator",
                    description: "Build a tool to visualize and manage serverless function deployments across multiple cloud providers.",
                    outcome: "A dashboard for managing serverless infrastructure cost and performance."
                }
            ]
        },
        'iot': {
            title: "IoT (Internet of Things)",
            description: "Connect physical devices to the internet for smart automation.",
            color: "#22c55e",
            problems: [
                {
                    id: 1,
                    title: "Smart Agriculture System",
                    description: "Develop an IoT system for monitoring soil moisture and automating irrigation for farmers.",
                    outcome: "A mobile app controlling irrigation valves based on sensor data."
                }
            ]
        },
        'blockchain': {
            title: "Blockchain",
            description: "Decentralized and secure transactional systems.",
            color: "#f59e0b",
            problems: [
                {
                    id: 1,
                    title: "Supply Chain Transparency",
                    description: "Implement a blockchain solution to track the journey of products from manufacturer to consumer to ensure authenticity.",
                    outcome: "A dApp allowing consumers to scan QR codes and view product history."
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
