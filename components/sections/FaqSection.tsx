"use client";

import { useState } from "react";

interface FaqItem {
    question: string;
    answer: string;
}

const faqItems: FaqItem[] = [
    {
        question: "How often should I visit the dentist?",
        answer:
            "You should visit the dentist for a check-up and cleaning every six months to maintain healthy teeth and prevent future dental problems.",
    },
    {
        question: "Do you accept insurance or offer payment plans?",
        answer:
            "Yes, we accept most major insurance plans and offer flexible payment options to make dental care accessible for everyone.",
    },
    {
        question: "I'm nervous about dental visits. Can you help?",
        answer:
            "Absolutely. We specialize in gentle, anxiety-free dentistry and offer sedation options to help you feel relaxed and comfortable throughout your visit.",
    },
    {
        question: "What treatments do you offer?",
        answer:
            "We offer a full range of dental services including cleanings, fillings, crowns, implants, orthodontics, cosmetic dentistry, and emergency care.",
    },
    {
        question: "Are you accepting new patients?",
        answer:
            "Yes! We're always welcoming new patients. You can book your first appointment online or give us a call to get started.",
    },
];

export default function FaqSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggle = (i: number) =>
        setActiveIndex((prev) => (prev === i ? null : i));

    return (
        <section className="mx-auto max-w-[900px] px-6 py-10 sm:px-10">
            {/* Header */}
            <div className="mb-10 text-center">
                <span className="inline-block rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-900">
                    Frequently Asked Questions
                </span>
                <h2 className="mx-auto mt-5 max-w-[580px] text-2xl font-medium leading-[1.15] text-gray-900 sm:text-4xl">
                    Got Questions? We&apos;ve Got Answers
                </h2>
            </div>

            {/* FAQ List */}
            <div className="flex flex-col gap-8">
                {faqItems.map((item, i) => {
                    const isActive = activeIndex === i;
                    return (
                        <div
                            key={i}
                            onClick={() => toggle(i)}
                            className={`cursor-pointer border-b border-gray-200 transition-all duration-300 ${isActive
                                ? "my-1 rounded-2xl border-transparent bg-blue-50/90 px-7 py-6"
                                : "px-4 py-6"
                                }`}
                        >
                            {/* Question row */}
                            <div className="flex items-center justify-between gap-4">
                                <h3 className="sm:text-xl font-semibold text-gray-900">
                                    Q: {item.question}
                                </h3>
                                <span className="shrink-0 text-xl text-blue-600">
                                    {isActive ? "−" : "+"}
                                </span>
                            </div>

                            {/* Answer */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${isActive ? "mt-3 max-h-[200px]" : "max-h-0"
                                    }`}
                            >
                                <p className="text-[15px] leading-[1.7] text-gray-500">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}