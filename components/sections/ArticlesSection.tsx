"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Article {
    category: string;
    date: string;
    title: string;
    excerpt: string;
    image: string;
}

const articles: Article[] = [
    {
        category: "Oral Health Tips",
        date: "December 9, 2025",
        title: "What to Expect During Your First Orthodontic Consultation",
        excerpt:
            "Thinking about straightening your smile? This guide walks you through what to expect at your first orthodontic visit, what to prepare, and how treatment",
        image: "https://images.pexels.com/photos/6627413/pexels-photo-6627413.jpeg",
    },
    {
        category: "Painless",
        date: "December 9, 2025",
        title: '5 Simple Habits for a Healthier, Brighter Smile"',
        excerpt:
            "Your smile starts with daily care. Discover simple, dentist-approved habits you can adopt today to keep your teeth strong, clean, and cavity-free.",
        image: "https://images.pexels.com/photos/12917343/pexels-photo-12917343.jpeg",
    },
];

function ArrowIcon({ className = "" }: { className?: string }) {
    return (
        <svg
            className={className}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 10h10M11 6l4 4-4 4" />
        </svg>
    );
}

const cardVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: (i: number) => ({
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
            delay: 0.2 * i + 0.3,
        },
    }),
};

export default function ArticlesSection() {
    return (
        <section className="section-con padding-x py-20 sm:px-10">
            {/* Header */}
            <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
                <div>
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="inline-block rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-900"
                    >
                        Articles
                    </motion.span>
                    <motion.h2
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
                        viewport={{ once: true }}
                        className="mt-5 max-w-[480px] text-xl font-medium leading-[1.15] text-gray-900 sm:text-4xl"
                    >
                        Stories and Tips from around the world
                    </motion.h2>
                </div>
                <motion.button
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex shrink-0 items-center gap-2.5 rounded-full bg-blue-600 py-3 pl-4 pr-6 text-sm font-semibold text-white transition-colors hover:bg-blue-700 w-max"
                >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-senary">
                        <ArrowIcon className="h-4 w-4" />
                    </span>
                    View All
                </motion.button>
            </div>

            {/* Cards Grid */}
            <div className="grid gap-8 md:grid-cols-2">
                {articles.map((article, i) => (
                    <motion.article
                        key={article.title}
                        custom={i}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="group cursor-pointer"
                    >
                        {/* Image */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="mb-4 aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200"
                        >
                            <motion.div
                                initial={{ scale: 1.1, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 * i + 0.4 }}
                                viewport={{ once: true }}
                                className="w-full h-full"
                            >
                                <Image
                                    width={500}
                                    height={500}
                                    src={article.image}
                                    alt=""
                                    className="w-full h-full object-center object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </motion.div>
                        </motion.div>

                        {/* Meta */}
                        <motion.div
                            initial={{ x: -15, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 * i + 0.55 }}
                            viewport={{ once: true }}
                            className="mb-2 flex items-center gap-2 text-sm text-gray-500"
                        >
                            <span className="font-medium text-gray-900">
                                {article.category}
                            </span>
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                            <span>{article.date}</span>
                        </motion.div>

                        {/* Title */}
                        <motion.h3
                            initial={{ y: 15, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 * i + 0.65 }}
                            viewport={{ once: true }}
                            className="mb-2 text-xl font-semibold leading-snug text-gray-900 sm:text-2xl"
                        >
                            {article.title}
                        </motion.h3>

                        {/* Excerpt */}
                        <motion.p
                            initial={{ y: 15, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 * i + 0.75 }}
                            viewport={{ once: true }}
                            className="mb-4 text-[15px] leading-relaxed text-gray-500"
                        >
                            {article.excerpt}
                        </motion.p>

                        {/* Read More */}
                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 * i + 0.85 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 text-sm font-semibold text-gray-900"
                        >
                            <motion.span
                                whileHover={{ scale: 1.15, rotate: 45 }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 transition-colors group-hover:bg-blue-700"
                            >
                                <ArrowIcon className="h-4 w-4 text-white" />
                            </motion.span>
                            Read More
                        </motion.div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}