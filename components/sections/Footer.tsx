"use client";

import { appConfig } from "@/lib/constants";
import Image from "next/image";
import { useState } from "react";

interface FooterLink {
    label: string;
    href: string;
}

interface FooterColumn {
    title: string;
    links: FooterLink[];
}

const footerColumns: FooterColumn[] = [
    {
        title: "Navigation",
        links: [
            { label: "Home", href: "#" },
            { label: "Contact", href: "#" },
            { label: "Cases", href: "#" },
            { label: "Blogs", href: "#" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About Us", href: "#" },
            { label: "Services", href: "#" },
            { label: "Pricing", href: "#" },
            { label: "Appointment", href: "#" },
        ],
    },
    {
        title: "Legal",
        links: [
            { label: "Changelog", href: "#" },
            { label: "License", href: "#" },
            { label: "Password Protected", href: "#" },
            { label: "Privacy", href: "#" },
        ],
    },
];

const expertCards = [
    { label: "Your Smile Deserves Expert Care", image: "https://images.pexels.com/photos/4270362/pexels-photo-4270362.jpeg" },
    { label: "Exceptional Dentist for You", image: "https://images.pexels.com/photos/12917374/pexels-photo-12917374.jpeg" },
    { label: "Let's Make It Happen Together", image: "https://images.pexels.com/photos/6627342/pexels-photo-6627342.jpeg" },
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

function MailIcon({ className = "" }: { className?: string }) {
    return (
        <svg
            className={className}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="2" y="4" width="16" height="12" rx="2" />
            <path d="M2 4l8 6 8-6" />
        </svg>
    );
}

function CheckIcon() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="4 8 7 11 12 5" />
        </svg>
    );
}

export default function Footer() {
    const [email, setEmail] = useState("");

    return (
        <div className="bg-blue-50 w-full">
            {/* CTA Section */}
            <section className="px-6 py-20 text-center sm:px-10 w-full bg-blue-50">
                <span className="inline-block rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-900">
                    Expert
                </span>

                {/* Expert Cards */}
                <div className="mx-auto mt-8 flex max-sm:flex-col max-sm:items-center max-w-[720px] justify-center gap-4">
                    {expertCards.map((card) => (
                        <div
                            key={card.label}
                            className="relative aspect-[4/3] sm:w-1/3 overflow-hidden rounded-2xl bg-gradient-to-b from-gray-400 to-gray-600"
                        >

                            <Image src={card.image} width={300} height={300} className="w-full h-full object-cover" alt="" />

                            <div className="absolute   flex flex-col items-center justify-end p-5 gap-2 px-4 bg-linear-to-b from-transparent to-black/80 inset-0">
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600">
                                    <CheckIcon />
                                </span>
                                <span className="text-center text-sm font-medium leading-snug text-white">
                                    {card.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Text */}
                <p className="mx-auto mt-10 max-w-[680px] text-2xl leading-relaxed text-gray-900 sm:text-3xl">
                    Take the First Step Toward a Healthier, Brighter Smile — With Dental
                    Care{" "}
                    <span className="text-gray-400">
                        You Can Trust. Book your visit today
                    </span>
                </p>

                {/* CTA Button */}
                <button className="mx-auto mt-8 flex items-center gap-2.5 rounded-full bg-blue-600 py-3 pl-4 pr-6 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                        <ArrowIcon className="h-4 w-4 text-senary" />
                    </span>
                    Talk to An Expert
                </button>
            </section>

            {/* Dark Footer */}
            <footer className="bg-[#00218f] text-white w-full rounded-t-[50px] sm:rounded-t-[140px]">
                {/* Newsletter */}
                <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-8 border-b border-white/10 px-6 py-14 sm:flex-row sm:items-center sm:px-10">
                    <h3 className="text-3xl font-medium leading-snug sm:text-4xl">
                        Subscribe to Our
                        <br />
                        Newsletter
                    </h3>
                    <div className="flex w-full max-w-[460px] items-center gap-2 rounded-full border border-white/20 bg-white/5 py-2 pl-5 pr-2">
                        <MailIcon className="h-5 w-5 shrink-0 text-gray-400" />
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 bg-transparent text-sm text-white placeholder-gray-400 outline-none"
                        />
                        <button className="shrink-0 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-14 sm:px-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
                    {/* Brand */}
                    <div>
                        <div className="mb-4 flex items-center gap-2">
                            <Image src={"/logo-long.svg"} height={150} width={150} alt={appConfig.APP_DESCRIPTION} className='object-cover object-center max-md:w-[90px]' />

                        </div>
                        <p className="max-w-[320px] text-sm leading-relaxed text-gray-400">
                            Advanced technology, a caring team, and treatments designed to keep
                            your smile healthy for life. Book your consultation today — were
                            ready when you are.
                        </p>
                    </div>

                    {/* Link Columns */}
                    {footerColumns.map((col) => (
                        <div key={col.title}>
                            <h4 className="mb-4 text-sm font-bold">{col.title}</h4>
                            <ul className="flex flex-col gap-3">
                                {col.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-gray-400 transition-colors hover:text-white"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </footer>
        </div>
    );
}