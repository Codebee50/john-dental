"use client";

import { Heart, Lightbulb, Fingerprint, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const values = [
    {
        icon: Heart,
        title: "Compassionate & Care",
        description: "Kindness, empathy, and respect—so you always feel safe.",
    },
    {
        icon: Lightbulb,
        title: "Excellence Innovation",
        description: "We invest in cutting-edge tools and ongoing learning.",
    },
    {
        icon: Fingerprint,
        title: "Personalised Dedicated",
        description: "No two smiles are alike—neither are our treatment plans.",
    },
    {
        icon: ShieldCheck,
        title: "Sincerity, Trust & Integrity",
        description: "You'll always know what to expect, and why.",
    },
];

const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: (i: number) => ({
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
            delay: 0.15 * i,
        },
    }),
};

export default function CoreValues() {
    return (
        <section className="min-h-screen bg-white flex items-center py-10">
            <div className=" section-con padding-x w-full max-md:flex max-md:flex-col-reverse md:grid lg:grid-cols-2 gap-16 items-center">
                {/* Left: Value Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {values.map(({ icon: Icon, title, description }, i) => (
                        <motion.div
                            key={title}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{ y: -4, transition: { duration: 0.25 } }}
                            className="group bg-blue-50 hover:bg-blue-100 transition-colors duration-300 rounded-2xl p-6 flex flex-col gap-6 cursor-default"
                        >
                            <motion.div
                                initial={{ scale: 0, rotate: -45 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 15,
                                    delay: 0.15 * i + 0.3,
                                }}
                                viewport={{ once: true }}
                                className="w-12 h-12 rounded-xl bg-transparent flex items-center justify-center"
                            >
                                <Icon
                                    className="text-senary"
                                    size={30}
                                    strokeWidth={1.5}
                                />
                            </motion.div>
                            <div>
                                <h3 className="font-semibold text-[#1A1A2E] text-[16px] leading-snug mb-2">
                                    {title}
                                </h3>
                                <p className="text-[#6B7280] text-sm leading-relaxed">
                                    {description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Right: Heading + Description */}
                <div className="flex flex-col gap-5 lg:pl-8">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="inline-flex self-start items-center px-4 py-1.5 rounded-full border border-[#D1D5DB] text-[13px] text-[#374151] bg-white font-medium tracking-wide"
                    >
                        Core Values
                    </motion.span>

                    <motion.h2
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
                        viewport={{ once: true }}
                        className="text-[#0D0D0D] font-medium leading-[1.1] tracking-tight"
                        style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                    >
                        The Guiding Principles Behind Every Smile We Create
                    </motion.h2>

                    <motion.p
                        initial={{ y: 25, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-[#6B7280] text-base leading-relaxed max-w-md"
                    >
                        Everything we do is guided by principles that reflect our commitment
                        to quality care, trust, and patient well-being.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}