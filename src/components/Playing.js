import React, { useContext } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { Songs } from '../Context'

const Playing = () => {
    const { song, handleEnd, handleNext, hanlePrevious, handleStatus } =
        useContext(Songs)

    return (
        <div className="flex-1">
            <AudioPlayer
                showJumpControls={false}
                showSkipControls
                layout="stacked-reverse"
                src={song.url}
                onClickNext={handleNext}
                onClickPrevious={hanlePrevious}
                onEnded={handleEnd}
                onPause={(e) => handleStatus(e)}
                onPlay={(e) => handleStatus(e)}
                className="bg-transparent shadow-none"
            />
        </div>
    )
}

export default Playing
