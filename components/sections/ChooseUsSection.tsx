"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItemData {
    number: string;
    title: string;
    description: string;
}

const accordionItems: AccordionItemData[] = [
    {
        number: "01/",
        title: "Patient-Centered Care",
        description:
            "We believe every patient is unique. We take the time to listen to your concerns, answer your questions, and develop a treatment plan that's tailored specifically to your needs and goals.",
    },
    {
        number: "02/",
        title: "Advanced Technology & Expertise",
        description:
            "Our clinic is equipped with state-of-the-art technology, and our team stays at the forefront of medical advancements to provide you with the most effective and efficient treatments available.",
    },
    {
        number: "03/",
        title: "Friendly, Welcoming Environment",
        description:
            "From the moment you walk in, you'll feel at home. Our warm, inviting atmosphere and friendly staff are here to ensure your visit is as comfortable and stress-free as possible.",
    },
    {
        number: "04/",
        title: "Compassionate Care",
        description:
            "We treat every patient with empathy and understanding. Your comfort and well-being are our top priorities, and we go above and beyond to make sure you feel cared for at every step.",
    },
    {
        number: "05/",
        title: "Experienced and Caring Team",
        description:
            "Our team brings years of expertise and a genuine passion for helping patients. We combine professional excellence with a caring touch to deliver results you can count on.",
    },
];

function ChevronDown({ className = "" }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="6 9 12 15 18 9" />
        </svg>
    );
}

const accordionVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: (i: number) => ({
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
            delay: 0.08 * i + 0.3,
        },
    }),
};

export default function ChooseUsSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggle = (i: number) =>
        setActiveIndex((prev) => (prev === i ? null : i));

    return (
        <section className="section-con padding-x py-20 sm:px-10 md:pb-24">
            {/* Header */}
            <div className="mb-16 text-center">
                <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="inline-block rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-medium tracking-wide text-gray-900"
                >
                    Choose Us
                </motion.span>
                <motion.h2
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
                    viewport={{ once: true }}
                    className="mx-auto mt-6 mb-5 max-w-[640px] text-2xl font-medium leading-[1.15] text-gray-900 sm:text-5xl lg:text-[46px]"
                >
                    Experience, Compassion, and Results You Can Trust
                </motion.h2>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-[560px] text-base leading-relaxed text-gray-500 max-sm:text-sm"
                >
                    Experience, compassion, and results you can trust — our team is
                    dedicated to delivering high-quality care in a comfortable,
                    patient-first environment.
                </motion.p>
            </div>

            {/* Grid */}
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
                {/* Accordion */}
                <div className="flex flex-col justify-between h-full">
                    {accordionItems.map((item, i) => {
                        const isActive = activeIndex === i;
                        return (
                            <motion.div
                                key={item.number}
                                custom={i}
                                variants={accordionVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-30px" }}
                                onClick={() => toggle(i)}
                                className={`cursor-pointer transition-all duration-300 ${isActive
                                    ? "my-1.5 rounded-xl border border-transparent bg-blue-50/80"
                                    : "border-b border-gray-200"
                                    }`}
                            >
                                <div className="flex items-center gap-3 px-6 py-5">
                                    <span className="min-w-[32px] text-[15px] font-semibold tabular-nums text-blue-600">
                                        {item.number}
                                    </span>
                                    <span className="flex-1 sm:text-xl font-semibold text-gray-900">
                                        {item.title}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: isActive ? 180 : 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <ChevronDown className="h-5 w-5 text-gray-400" />
                                    </motion.div>
                                </div>

                                <AnimatePresence initial={false}>
                                    {isActive && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                                            className="overflow-hidden"
                                        >
                                            <p className="px-6 pb-5 pl-[68px] text-[15px] leading-[1.7] text-gray-500">
                                                {item.description}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Image Card */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative aspect-[4/5] max-h-[560px] overflow-hidden rounded-[20px]"
                >
                    <motion.div
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        viewport={{ once: true }}
                        className="flex h-full w-full items-center justify-center bg-linear-to-br from-blue-100 via-indigo-200 to-indigo-300"
                    >
                        <Image
                            src={"https://images.pexels.com/photos/14052567/pexels-photo-14052567.jpeg"}
                            width={500}
                            height={500}
                            className="w-full h-full object-cover"
                            alt=""
                        />
                    </motion.div>

                    {/* Trust Badge */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                        viewport={{ once: true }}
                        className="absolute bottom-6 left-6 right-6 flex items-center gap-4 rounded-2xl px-6 py-5 text-white backdrop-blur-md"
                    >
                        <div className="flex-1">
                            <div className="text-[13px] opacity-80">Trusted by</div>
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 180,
                                    damping: 14,
                                    delay: 0.8,
                                }}
                                viewport={{ once: true }}
                                className="text-4xl font-bold leading-tight"
                            >
                                20k+
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
                            viewport={{ once: true }}
                            className="flex items-center"
                        >
                            <div className="h-10 w-10 rounded-full border-[2.5px] border-white/30 bg-gradient-to-br from-indigo-400 to-indigo-600 shrink-0" />
                            <div className="-ml-2.5 h-10 w-10 rounded-full border-[2.5px] border-white/30 bg-gradient-to-br from-pink-400 to-pink-600 shrink-0" />
                            <div className="-ml-2.5 flex h-10 w-10 items-center justify-center rounded-full border-[2.5px] border-white/30 bg-senary text-lg font-light shrink-0">
                                +
                            </div>
                            <span className="ml-2.5 text-[13px] font-medium opacity-90">
                                Happy Patients
                            </span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}