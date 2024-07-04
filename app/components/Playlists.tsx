import React from 'react'
import { Playlist } from '../libs/playlists'
import PlaylistCard from './PlaylistCard'

type Props = {
    playlist: Playlist[]
}

const Playlists: React.FC<Props> = ({ playlist }) => {
    return (
        <div className="px-8 flex overflow-x-scroll gap-4">
            {
                playlist.map((play, index) => {
                    return <PlaylistCard isActive={index === 0} playlist={play} key={index} />
                })
            }
        </div>)
}

export default Playlists