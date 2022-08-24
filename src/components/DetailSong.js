import React, { useContext } from 'react'
import { Songs } from '../Context'

const DetailSong = () => {
    const { song, status } = useContext(Songs)

    return (
        <div className="w-[400px] mb-12">
            <h2 className="text-white text-2xl text-center mt-2 h-[60px]">
                {song.name}
            </h2>
            <h2 className="text-cyan-500 font-bold text-center mt-2">
                {status}
            </h2>
            <div className="w-[240px] m-auto mt-10">
                <img
                    src="https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576"
                    alt="avatar"
                />
            </div>
        </div>
    )
}

export default DetailSong
