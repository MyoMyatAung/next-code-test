import Link from 'next/link'
import React from 'react'
import { TfiWorld } from "react-icons/tfi";
import { MdElectricBolt } from "react-icons/md";
import { IoMdCart } from "react-icons/io";

const Header = () => {
    return (
        <header>
            <nav className='flex justify-between items-center text-sm text-gray-300 py-2 px-4'>
                <div className='flex justify-evenly items-center gap-4'>
                    <Link href="/" className='font-semibold'>Beats</Link>
                    <Link href="/licensing">Licensing</Link>
                </div>
                <div className="flex justify-evenly items-center gap-6 text-gray-400">
                    <div className='flex items-center gap-2'>
                        <TfiWorld />
                        <span>EN</span>
                    </div>
                    <div className='flex items-center justify-evenly gap-3'>
                        <Link href="/login" className=''>Login</Link>
                        <div className="bg-gray-400 h-4 w-[1px]"/>
                        <div className='flex items-center gap-1 text-white'>
                            <MdElectricBolt />
                            <span>Become Membership</span>
                        </div>
                    </div>
                    <button className='flex items-center gap-1 bg-primary-main text-background-main p-2 rounded-md font-semibold'>
                        <span>4</span>
                        <IoMdCart />
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header