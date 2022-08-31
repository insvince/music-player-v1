import { React, useContext, useState, useEffect } from 'react'
import { Songs } from './../Context'

const ListSong = () => {
    const { DataSongs, handleSetSong, song } = useContext(Songs)
    const [idSong, setidSong] = useState(0)

    const handlePlaySong = (idSong) => {
        setidSong(idSong)
        handleSetSong(idSong)
    }

    useEffect(() => {
        setidSong(song.id)
    }, [song])

    return (
        <div className="listsong h-[500px] flex-1 p-5 overflow-y-scroll cursor-pointer sm:p-0 sm:mt-5 duration-500 ">
            <table className="table-auto">
                <tbody>
                    {DataSongs.map((song, index) => (
                        <tr
                            key={index}
                            className={` h-12 text-white hover:bg-black
                            hover:text-white rounded-md${
                                idSong === song.id && 'text-white bg-black'
                            }`}
                            onClick={() => handlePlaySong(song.id)}
                        >
                            <td className="text-center px-2">{song.id}</td>
                            <td className="xl:w-[396px] lg:w-[481px] sm:w-[340px]">
                                {song.name}
                            </td>
                            <td className="xl:hidden text-center sm:text-right sm:pr-2">
                                {song.author}
                            </td>

                            <td className=" text-center ">
                                <a href={song.url}>
                                    <i className="fa-solid fa-cloud-arrow-down px-2"></i>
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListSong
