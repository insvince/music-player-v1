import React, { useContext } from 'react'
import { Songs } from '../Context'

const DetailSong = () => {
    const { song, status } = useContext(Songs)

    return (
        <div className="w-[400px] mb-12 xl:w-[320px] lg:w-full lg:mb-0 sm:w-full">
            <h2 className="text-white text-2xl text-center mt-2 h-[60px] lg:text-lg lg:mt-1 lg:h-8">
                {song.name}
            </h2>
            <h2 className="text-cyan-500 font-bold text-center mt-2 lg:mt-1">
                {status}
            </h2>
            <div className="w-[240px] m-auto mt-10 xl:w-[180px] lg:w-[80px] lg:mt-3 sm:hidden">
                <img
                    src={
                        song.links?.images?.length > 0 &&
                        song.links.images[0].url
                    }
                    alt="avatar"
                    className="w-60"
                />
            </div>
        </div>
    )
}

export default DetailSong
