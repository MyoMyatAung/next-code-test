import Image from 'next/image'
import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaMusic } from "react-icons/fa6";
import { Artist } from '../libs/artists';

type Props = {
    artist: Artist
}

const ArtistCard: React.FC<Props> = ({ artist }) => {
    return (
        <div className='bg-background-thin flex items-center justify-start gap-3 p-3 rounded-lg cursor-pointer min-w-52'>
            <div className='w-12 h-12 relative rounded-full'>
                <Image src={artist.img} alt="Artist" className='rounded-full' fill quality={100} />
            </div>
            <div>
                <p className='text-tiny text-gray-400'>ARTIST INSPIRED</p>
                <h4 className='text-xs font-semibold mb-1'>{artist.name}</h4>
                <div className="flex justify-start items-center gap-1">
                    <div className='flex items-center rounded-full justify-center p-0.5 gap-0.5 bg-primary-light border border-primary-main text-primary-main text-tiny'>
                        <FaArrowTrendUp />
                        <span>TRENDING</span>
                    </div>
                    <div className='flex items-center rounded-full justify-center p-0.5 bg-background-light border border-gray-500 text-gray-400 gap-0.5 text-tiny'>
                        <FaMusic />
                        <span>{artist.songs}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtistCard