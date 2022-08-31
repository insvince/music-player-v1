import DetailSong from './components/DetailSong'
import Navbar from './components/Navbar'
import ListSong from './components/ListSong'
import { Songs } from './Context'
import DataSongs from './data/songs.json'
import Playing from './components/Playing'
import { useState } from 'react'

function App() {
    const [song, setSong] = useState(DataSongs[0])
    const [status, setStatus] = useState('Select Song')

    const handleSetSong = (idSong) => {
        const song = DataSongs.find((song) => song.id === idSong)
        setSong(song)
    }

    const handleNext = () => {
        handleSetSong(song.id + 1)
    }

    const hanlePrevious = () => {
        handleSetSong(song.id - 1)
    }

    const handleEnd = () => {
        handleNext()
    }
    const handleStatus = (e) => {
        if (e.type === 'play') {
            setStatus('Playing')
        } else if (e.type === 'pause') {
            setStatus('Paused')
        }
    }

    return (
        <div className="flex justify-center items-center h-[100vh] bg-gradient-to-br to-black from-cyan-800 sm:items-start duration-500">
            <div className="flex flex-col justify-center items-center w-4/5 h-[90vh] lg:w-2/5 xl:h-[80vh] sm:w-[420px] sm:h-[85vh] sm:mt-7 ">
                <Songs.Provider
                    value={{
                        DataSongs,
                        song,
                        status,
                        handleSetSong,
                        handleNext,
                        hanlePrevious,
                        handleEnd,
                        handleStatus,
                    }}
                >
                    <Navbar />
                    <div className="flex bg-gradient-to-br to-black from-cyan-800 p-12 shadow-md rounded-xl xl:w-[850px] xl:p-2 lg:flex-col  lg:overflow-hidden lg:w-[600px] lg:p-0 sm:w-[420px] sm:bg-none duration-500">
                        <div className="flex flex-col mr-12 xl:mr-0 ">
                            <DetailSong />
                            <Playing />
                        </div>
                        <ListSong />
                    </div>
                </Songs.Provider>
            </div>
        </div>
    )
}

export default App
