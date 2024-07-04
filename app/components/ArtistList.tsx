import React from 'react'
import { artists } from '../libs/artists'
import ArtistCard from './ArtistCard'

const ArtistList = () => {
    return (
        <div className="px-8 flex overflow-x-scroll gap-4 my-4">
            {
                artists.map((artist, index) => {
                    return <ArtistCard key={index} artist={artist} />
                })
            }
        </div>)
}

export default ArtistList