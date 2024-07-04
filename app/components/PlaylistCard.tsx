"use client"
import Image from 'next/image';
import React from 'react'
import { FaPlay } from "react-icons/fa6";
import { Playlist } from '../libs/playlists';
import { useSearchParams } from 'next/navigation';

type Props = {
    isActive: boolean,
    playlist: Playlist
}

const PlaylistCard: React.FC<Props> = ({ isActive, playlist }) => {
    const searchParams = useSearchParams();
    const genre = searchParams.get("genre");

    let genreSelected = false;
    if(!!genre && genre !== "all"){
        genreSelected = true;
    }
    let content;
    if (isActive) {
        content = <div className='relative w-[160px] h-[150px] cursor-pointer'>
            <Image
                src={playlist.img}
                alt="Logo"
                className='rounded-lg'
                fill
            />
            <FaPlay className='absolute top-[36%] left-[36%] w-12 h-12 text-primary-main' />
        </div>
    } else {
        content = <div>
            <div className='relative w-[160px] h-[160px] cursor-pointer'>
                <div className='absolute top-0 left-0 bg-gradient-to-tr w-[150px] h-[150px] from-gray-600 to-gray-400 rounded-lg' />
                <div className={`absolute w-[150px] h-[150px] bg-cover bg-center rounded-lg bottom-0 right-0 cursor-pointer`} style={{ backgroundImage: `url(${playlist.img})` }} />
            </div>
        </div>
    }
    return (
        <div className={`w-[176px] ${isActive && `${genreSelected? 'bg-background-lightselected': 'bg-background-light'} p-2 rounded-lg`}`}>
            {content}
            <h3 className='font-semibold text-sm my-2 line-clamp-1'>{playlist.name}</h3 >
            <div className='text-tiny text-gray-300 my-2'>
                <span>{playlist.slug}</span> . <span>{playlist.trackCount} TRACKS</span>
            </div>
            <p className='text-tiny text-gray-300 line-clamp-2'>{playlist.desc}</p>
        </div >
    )
}

export default PlaylistCard