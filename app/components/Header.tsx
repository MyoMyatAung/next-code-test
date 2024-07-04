"use client"
import Link from 'next/link'
import React from 'react'
import { TfiWorld } from "react-icons/tfi";
import { MdElectricBolt } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
    const searchParams = useSearchParams();
    const genre = searchParams.get("genre");

    let genreSelected = false;
    if (!!genre && genre !== "all") {
        genreSelected = true;
    }

    return (
        <header>
            <nav className={`flex ${genreSelected && 'bg-background-selected'} justify-between items-center text-sm text-gray-400 py-2 px-8`}>
                <div className={`flex justify-evenly items-center gap-5 ${genreSelected && 'text-white'}`}>
                    <Image src="https://beatpulse.co/wp-content/uploads/2022/10/Beatpulse-horizon-white-1.svg" alt='Logo' width={160} height={62} />
                    <Link href="/" className='font-semibold'>Beats</Link>
                    <Link href="/licensing">Licensing</Link>
                </div>
                <div className="flex justify-evenly items-center gap-6 text-gray-400">
                    <div className='flex items-center gap-2'>
                        <TfiWorld />
                        <span className={genreSelected ? "text-white" : 'text-gray-400'}>EN</span>
                    </div>
                    <div className='flex items-center justify-evenly gap-3'>
                        <Link href="/login">Login</Link>
                        <div className="bg-gray-400 h-4 w-[1px]" />
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