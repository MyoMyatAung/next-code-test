import React from 'react'
import { genres } from '../libs/genres'
import Chip from './shared/Chip'

const GenreList = () => {
    return (
        <div className="flex justify-start items-center gap-2">
            {
                genres.map((genre) => {
                    return <Chip key={genre.query}>
                        <span className="text-xs">{genre.label}</span>
                    </Chip>
                })
            }
        </div>)
}

export default GenreList