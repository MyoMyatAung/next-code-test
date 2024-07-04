"use client"
import React from 'react'
import { genres } from '../libs/genres'
import Chip from './shared/Chip'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const GenreList = () => {
    const searchParams = useSearchParams();
    const genre = searchParams.get("genre");

    let genreSelected = false;
    if (!!genre && genre !== "all") {
        genreSelected = true;
    }
    return (
        <div className="flex justify-start items-center gap-2">
            {
                genres.map((genre) => {
                    const query = { genre: genre.query }
                    const queryString = new URLSearchParams(query).toString();

                    return <Link key={genre.query} href={`?${queryString}`} className='min-w-fit'>
                        <Chip bg={genreSelected ? 'bg-background-lightselected' : 'bg-background-light'}>
                            <span className="text-xs">{genre.label}</span>
                        </Chip>
                    </Link>
                })
            }
        </div>)
}

export default GenreList