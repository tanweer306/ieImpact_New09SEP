'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                        >
                            Focus on Appraising.{' '}
                            <span className="text-warning-400">We'll Handle the Data Entry.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed"
                        >
                            24/7 professional data entry services for real estate appraisers. 
                            Boost productivity, reduce costs, and deliver faster results.
                        </motion.p>

                        {/* Key Benefits */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 mb-8"
                        >
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="w-5 h-5 text-success-400" />
                                <span className="text-blue-100">24/7 Availability</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="w-5 h-5 text-success-400" />
                                <span className="text-blue-100">99.9% Accuracy</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="w-5 h-5 text-success-400" />
                                <span className="text-blue-100">50% Cost Savings</span>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <a href="#contact" className="btn-primary group">
                                Get Started Today
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#services" className="btn-secondary">
                                Learn More
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Visual Element */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative"
                    >
                        <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-white font-semibold text-lg">Productivity Boost</h3>
                                    <TrendingUp className="w-6 h-6 text-success-400" />
                                </div>
                                
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-blue-100">Time Saved</span>
                                        <span className="text-warning-400 font-bold">75%</span>
                                    </div>
                                    <div className="w-full bg-white/20 rounded-full h-2">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: '75%' }}
                                            transition={{ duration: 1.5, delay: 1 }}
                                            className="bg-warning-400 h-2 rounded-full"
                                        />
                                    </div>
                                    
                                    <div className="flex justify-between items-center">
                                        <span className="text-blue-100">Cost Reduction</span>
                                        <span className="text-success-400 font-bold">50%</span>
                                    </div>
                                    <div className="w-full bg-white/20 rounded-full h-2">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: '50%' }}
                                            transition={{ duration: 1.5, delay: 1.2 }}
                                            className="bg-success-400 h-2 rounded-full"
                                        />
                                    </div>
                                    
                                    <div className="flex justify-between items-center">
                                        <span className="text-blue-100">Accuracy Rate</span>
                                        <span className="text-blue-300 font-bold">99.9%</span>
                                    </div>
                                    <div className="w-full bg-white/20 rounded-full h-2">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: '99.9%' }}
                                            transition={{ duration: 1.5, delay: 1.4 }}
                                            className="bg-blue-300 h-2 rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1 h-3 bg-white/60 rounded-full mt-2"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}