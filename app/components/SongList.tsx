import React from 'react'
import { songs } from '../libs/songs'
import Song from './Song'

const SongList = () => {
    return (
        <div className="px-8">
            {
                songs.map((song, index) => {
                    return <Song key={index} title={song.title} artist={song.artist} bpm={song.bpm} duration={song.duration} generes={song.generes} maj={song.maj} isNew={song.isNew} />
                })
            }
        </div>)
}

export default SongList