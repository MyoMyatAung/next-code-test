import Image from 'next/image';
import React from 'react'
import { IoMdMore } from "react-icons/io";
import Chip from './shared/Chip';
import { PiMicrophoneStageFill } from "react-icons/pi";
import { Genre } from '../libs/genres';

type Props = {
    title: string;
    artist: string;
    duration: string;
    bpm: number;
    maj: string;
    generes: Genre[];
    isNew?: boolean;
}

const Song: React.FC<Props> = ({ title, artist, duration, bpm, maj, generes, isNew = false }) => {
    return (
        <div className='w-full flex justify-start items-center my-4 cursor-pointer'>
            <div className='flex flex-1 w-1/3 justify-between items-center'>
                <div className="flex justify-center gap-3">
                    <Image src="/assets/images/playlist-1.jpg" alt='Song' width={50} height={50} className='rounded-lg' />
                    <div>
                        <h4 className='text-sm font-semibold line-clamp-1'>{title}</h4>
                        <p className='text-xs text-gray-400'>{artist}</p>
                    </div>
                </div>
                {isNew && <Chip bg='bg-primary-light' border='border border-primary-main' rounded={false}><span className='text-xs text-primary-main'>New</span></Chip>}
            </div>
            <div className='flex flex-1 justify-center items-center gap-2 text-xs text-gray-400'>
                <PiMicrophoneStageFill />
                <span>{duration}</span>
                <span>{bpm} BPM</span>
                <span>{maj} Maj</span>
            </div>
            <div className='flex flex-1 justify-start items-center gap-2'>
                {
                    generes.map((genre, index) => {
                        return <Chip key={index}><span className="text-xs">{genre.label}</span></Chip>

                    })
                }
            </div>
            <button className='flex-none text-2xl'>
                <IoMdMore />
            </button>
        </div>
    )
}

export default Song