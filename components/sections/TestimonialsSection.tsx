"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
    name: string;
    avatar: string;
    quote: string;
    hasPhoto: boolean;
    photo?: string;
}

const testimonials: Testimonial[] = [
    {
        name: "Marvin McKinney",
        avatar: "MM",
        quote:
            "I was nervous at first, but Dr. Thompson explained everything clearly and the treatment was completely pain-free.",
        hasPhoto: true,
        photo: "https://images.pexels.com/photos/3402510/pexels-photo-3402510.jpeg",
    },
    {
        name: "Michael H.",
        avatar: "MH",
        quote:
            "After struggling for years with missing teeth, I can finally eat and speak comfortably. The team were so professional.",
        hasPhoto: false,
        photo: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    },
    {
        name: "Esther K.",
        avatar: "EK",
        quote:
            "Absolutely thrilled with my results! Dr. Emma made me feel at ease from the moment I walked in. I finally love my smile in photos!",
        hasPhoto: false,
        photo: "https://images.pexels.com/photos/3756965/pexels-photo-3756965.jpeg",
    },
];

function QuoteIcon({ className = "" }: { className?: string }) {
    return (
        <svg
            className={className}
            width="32"
            height="24"
            viewBox="0 0 32 24"
            fill="currentColor"
        >
            <path d="M0 24V14.4C0 11.7333 0.466667 9.33333 1.4 7.2C2.37778 5.06667 3.68889 3.28889 5.33333 1.86667C7.02222 0.4 8.88889 0 10.9333 0L12.2667 3.73333C10.5778 4.17778 9.15556 5.06667 8 6.4C6.84444 7.68889 6.22222 9.15556 6.13333 10.8H12V24H0ZM20 24V14.4C20 11.7333 20.4667 9.33333 21.4 7.2C22.3778 5.06667 23.6889 3.28889 25.3333 1.86667C27.0222 0.4 28.8889 0 30.9333 0L32.2667 3.73333C30.5778 4.17778 29.1556 5.06667 28 6.4C26.8444 7.68889 26.2222 9.15556 26.1333 10.8H32V24H20Z" />
        </svg>
    );
}

const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
            delay: 0.15 * i + 0.3,
        },
    }),
};

export default function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-blue-50 py-20 w-full">
            <div className="section-con padding-x">
                {/* Header */}
                <div className="mb-12">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="inline-block rounded-full border border-gray-100 bg-white px-5 py-2 text-sm font-medium text-senary"
                    >
                        Testimonials
                    </motion.span>
                    <motion.h2
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
                        viewport={{ once: true }}
                        className="mt-5 text-3xl font-medium leading-[1.15] text-gray-900 sm:text-4xl"
                    >
                        Happy Smiles, Happy Patients
                    </motion.h2>
                </div>

                {/* Cards */}
                <div className="grid gap-6 md:grid-cols-3">
                    {testimonials.map((t, i) => {
                        const isActive = activeIndex === i;
                        return (
                            <motion.div
                                key={t.name}
                                custom={i}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-40px" }}
                                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                                onClick={() => setActiveIndex(i)}
                                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#6B6B80]"
                            >
                                {/* Circle reveal background */}
                                <AnimatePresence>
                                    {!isActive && (
                                        <motion.div
                                            key={`circle-${i}`}
                                            initial={{
                                                clipPath: "circle(0% at 50% 50%)",
                                            }}
                                            animate={{
                                                clipPath: "circle(150% at 50% 50%)",
                                            }}
                                            exit={{
                                                clipPath: "circle(0% at 50% 50%)",
                                            }}
                                            transition={{
                                                duration: 0.6,
                                                ease: [0.25, 0.46, 0.45, 0.94],
                                            }}
                                            className="absolute inset-0 z-[1] bg-white rounded-2xl"
                                        />
                                    )}
                                </AnimatePresence>

                                {/* Photo area / empty space */}
                                <div className="relative h-[280px] sm:h-[400px]">
                                    <AnimatePresence mode="wait">
                                        {isActive && t.photo ? (
                                            <motion.div
                                                key="photo"
                                                initial={{ opacity: 0, scale: 1.05 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.98 }}
                                                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                                                className="h-full w-full"
                                            >
                                                <Image
                                                    width={300}
                                                    height={300}
                                                    src={t.photo}
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </motion.div>
                                        ) : (
                                            <div className="h-full w-full" />
                                        )}
                                    </AnimatePresence>

                                    <div className="inset-0 absolute z-[2] flex flex-col justify-between p-4">
                                        {/* Avatar + Name overlay */}
                                        <motion.div
                                            initial={{ x: -15, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 * i + 0.5 }}
                                            viewport={{ once: true }}
                                            className="left-5 top-5 flex items-center gap-3"
                                        >
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-orange-400 text-xs font-bold text-white  overflow-hidden"
                                            >
                                                <Image
                                                    src={t?.photo || ""}
                                                    width={200}
                                                    height={200}
                                                    className="w-full h-full rounded-full object-cover object-center"
                                                    alt=""
                                                />
                                            </motion.div>
                                            <span
                                                className={`text-base font-semibold transition-colors duration-300 ${isActive ? "text-white" : "text-gray-900"
                                                    }`}
                                            >
                                                {t.name}
                                            </span>
                                        </motion.div>

                                        {/* Quote */}
                                        <motion.div
                                            initial={{ y: 20, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 * i + 0.6 }}
                                            viewport={{ once: true }}
                                            className="flex flex-col gap-3 items-start"
                                        >
                                            <motion.div
                                                initial={{ scale: 0, rotate: -20 }}
                                                whileInView={{ scale: 1, rotate: 0 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 200,
                                                    damping: 12,
                                                    delay: 0.15 * i + 0.7,
                                                }}
                                                viewport={{ once: true }}
                                            >
                                                <QuoteIcon
                                                    className={`h-5 w-auto transition-colors duration-300 ${isActive ? "text-blue-400" : "text-blue-600"
                                                        }`}
                                                />
                                            </motion.div>
                                            <p
                                                className={`text-base leading-[1.7] min-h-[100px] transition-colors duration-300 ${isActive ? "text-white/90" : "text-gray-600"
                                                    }`}
                                            >
                                                {t.quote}
                                            </p>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}