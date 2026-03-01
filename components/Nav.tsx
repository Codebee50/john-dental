import { appConfig } from '@/lib/constants'
import Image from 'next/image'
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { CgMenu } from "react-icons/cg";


const Nav = () => {

    const navItems = [
        { "label": "Home", "url": "/" },
        { "label": "About", "url": "/about" },
        { "label": "Doctors", "url": "/doctors" },
        { "label": "Services", "url": "/services" },
        { "label": "Pricing", "url": "/pricing" }
    ]
    return (
        <div className='w-full flex flex-row items-center justify-between py-6'>
            <Image src={"/logo-long.svg"} height={150} width={150} alt={appConfig.APP_DESCRIPTION} className='object-cover object-center max-md:w-[90px]' />

            <div className='flex flex-row items-center gap-5 max-md:hidden'>

                {
                    navItems.map((item) => {
                        const active = item.label === "Home" //TODO: CHANGE THIS LATER
                        return <div key={item.label} className={`text-white ${active ? "text-white font-semibold" : "opacity-70 font-light"}`}>{item.label}</div>
                    })
                }

            </div>


            <button className='group bg-senary text-white rounded-full px-5 py-2 flex flex-row items-center gap-2 cursor-pointer active:opacity-80 transition-all duration-200 max-md:hidden'>

                {/* <div className='w-[40px] h-[40px] bg-white rounded-full text-senary flex items-center justify-center text-2xl'>
                    <IoIosArrowRoundForward className='transition-transform duration-300 ease-in-out group-hover:-rotate-45' />
                </div> */}

                Book now
            </button>


            <div className='md:hidden p-4 rounded-md backdrop-blur-lg text-white'>

                <CgMenu size={20} />


            </div>
        </div>
    )
}

export default Nav