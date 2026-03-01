"use client"

import { appConfig } from '@/lib/constants'
import Image from 'next/image'
import React from 'react'
import Nav from '../Nav'
import { BsAsterisk } from "react-icons/bs";
import { IoIosArrowRoundForward } from 'react-icons/io';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className='text w-full min-h-screen'>
            <div className='w-full h-[90vh] sm:h-screen relative overflow-hidden'>
                <motion.div
                    initial={{ scale: 1.15, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    viewport={{ once: true }}
                    className='w-full h-full'
                >
                    <Image src={"/images/female-hero-smile.jpeg"} height={1000} width={1000} alt={appConfig.APP_DESCRIPTION} className='w-full h-full object-cover object-center animate-breathe' />
                </motion.div>

                <div className='absolute inset-0 bg-black/50 flex flex-col justify-between pb-[70px]'>

                    <div className='flex flex-col h-full justify-between w-full padding-x section-con'>
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <Nav />
                        </motion.div>

                        <div className='flex flex-col gap-5'>
                            <motion.div
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
                                viewport={{ once: true }}
                                className='flex flex-row items-center gap-4 text-[#bebebe] text-xl'
                            >
                                <motion.div
                                    initial={{ rotate: -90, opacity: 0 }}
                                    whileInView={{ rotate: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
                                    viewport={{ once: true }}
                                >
                                    <BsAsterisk className='text-2xl max-sm:text-xl' />
                                </motion.div>
                                <p className='max-w-[300px]'>Take pride in your smile and the beauty of your face.</p>
                            </motion.div>

                            <motion.h1
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.7 }}
                                viewport={{ once: true }}
                                className='text-white text-[35px] sm:text-[40px] md:text-[60px] font-semibold leading-[115%] tracking-[0.02em]'
                            >
                                Smile Brightly <br /> Smile Confidently,
                            </motion.h1>

                            <motion.p
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
                                viewport={{ once: true }}
                                className='max-w-[500px] text-white/80 max-sm:text-sm'
                            >
                                Exceptional dental care from your trusted local dentist — delivering precision, comfort, and genuine compassion for every smile.
                            </motion.p>

                            <motion.button
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, ease: 'easeOut', delay: 1.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className='group w-max bg-senary text-white rounded-full pl-2 pr-5 py-2 flex flex-row items-center gap-2 cursor-pointer active:opacity-80 transition-all duration-200'
                            >
                                <div className='w-[40px] h-[40px] bg-white rounded-full text-senary flex items-center justify-center text-2xl'>
                                    <IoIosArrowRoundForward className='transition-transform duration-300 ease-in-out group-hover:-rotate-45' />
                                </div>
                                Book now
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero