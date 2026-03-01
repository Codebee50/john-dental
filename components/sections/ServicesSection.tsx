"use client";

import { useRef } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";

const services = [
    {
        id: 1,
        title: "Teeth Whitening",
        description:
            "Routine check-ups, cleaning, and preventive care to keep your smile healthy year-round.",
        image:
            "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=220&fit=crop",
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" stroke="currentColor" strokeWidth="1.5">
                <path d="M24 6C18 6 12 10 12 18c0 4 1.5 7 3 10l3 10h12l3-10c1.5-3 3-6 3-10 0-8-6-12-12-12z" strokeLinejoin="round" />
                <path d="M18 18c0-3.3 2.7-6 6-6s6 2.7 6 6" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 2,
        title: "Dental Implants",
        description:
            "Enhance your smile with whitening, veneers, and other cosmetic treatments",
        image:
            "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=220&fit=crop",
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" stroke="currentColor" strokeWidth="1.5">
                <path d="M16 8h16l4 8H12l4-8z" strokeLinejoin="round" />
                <path d="M12 16v4l4 20h16l4-20v-4" strokeLinejoin="round" />
                <path d="M20 20v16M24 20v16M28 20v16" strokeLinecap="round" />
                <circle cx="32" cy="10" r="3" fill="currentColor" stroke="none" />
                <path d="M32 7v-3M35 8l2-2M36 11h3" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 3,
        title: "Smile Makeover",
        description:
            "Straighten your teeth with braces or clear aligners for a confident, beautiful smile",
        image:
            "https://images.pexels.com/photos/3762402/pexels-photo-3762402.jpeg",
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" stroke="currentColor" strokeWidth="1.5">
                <rect x="10" y="14" width="28" height="20" rx="4" strokeLinejoin="round" />
                <path d="M10 22h28" strokeLinecap="round" />
                <circle cx="18" cy="18" r="2" fill="currentColor" stroke="none" />
                <circle cx="30" cy="18" r="2" fill="currentColor" stroke="none" />
                <path d="M16 28c0 4.4 3.6 8 8 8s8-3.6 8-8" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 4,
        title: "Orthodontic Care",
        description:
            "Repair damaged teeth with crowns, fillings, bridges, and implants",
        image:
            "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=220&fit=crop",
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 8h8v6l4 4v16H16V18l4-4V8z" strokeLinejoin="round" />
                <path d="M16 26h16M16 30h16M16 22h16" strokeLinecap="round" />
                <path d="M28 8v4M20 8v4" strokeLinecap="round" />
            </svg>
        ),
    },
];

const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
            delay: 0.12 * i,
        },
    }),
};

export default function ServicesSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const handleContainerScroll = (direction: "left" | "right") => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.scrollLeft -= containerRef.current.scrollWidth / 3;
            } else {
                containerRef.current.scrollLeft += containerRef.current.scrollWidth / 3;
            }
        }
    };

    return (
        <section className="bg-blue-50 min-h-screen py-16 w-full">
            <div className="section-con padding-x">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="mb-2"
                >
                    <span className="inline-block border border-gray-400 rounded-full px-5 py-1.5 text-sm text-gray-700 bg-white">
                        Our Services
                    </span>
                </motion.div>

                {/* Header row */}
                <div className="flex items-end justify-between mb-10">
                    <motion.h2
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-xl md:text-4xl font-medium text-gray-900 leading-tight max-w-xl"
                    >
                        Comprehensive Care for Every Stage of Your Smile
                    </motion.h2>

                    {/* Navigation Arrows */}
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                        viewport={{ once: true }}
                        className="flex gap-3 pb-2 max-sm:hidden"
                    >
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.92 }}
                            onClick={() => handleContainerScroll("left")}
                            className="w-11 h-11 rounded-full flex items-center justify-center transition-all text-senary hover:bg-white hover:border-gray-600 bg-white/60"
                        >
                            <GoArrowLeft />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.92 }}
                            onClick={() => handleContainerScroll("right")}
                            className="w-11 h-11 rounded-full flex items-center justify-center transition-all text-senary hover:bg-white hover:border-gray-600 bg-white/60"
                        >
                            <GoArrowRight />
                        </motion.button>
                    </motion.div>
                </div>

                {/* Cards */}
                <div
                    className="flex flex-col sm:flex-row items-center sm:overflow-x-scroll no-scrollbar scroll-smooth gap-5"
                    ref={containerRef}
                >
                    {services.map((service, i) => (
                        <motion.div
                            key={service.id}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-40px" }}
                            whileHover={{ y: -6, transition: { duration: 0.25 } }}
                            className="bg-white rounded-2xl w-full sm:min-w-[350px] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            {/* Card Top Content */}
                            <div className="p-6 flex flex-col flex-1">
                                {/* Icon */}
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 0.8 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 14,
                                        delay: 0.12 * i + 0.25,
                                    }}
                                    viewport={{ once: true }}
                                    className="text-gray-800 mb-5"
                                >
                                    {service.icon}
                                </motion.div>

                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {service.title}
                                </h3>

                                <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
                                    {service.description}
                                </p>

                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors w-fit"
                                >
                                    <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                                            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    View Details
                                </motion.button>
                            </div>

                            {/* Image */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.12 * i + 0.35 }}
                                viewport={{ once: true }}
                                className="h-44 overflow-hidden"
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}