import useMusic from "../hooks/useMusic";

function MusicPlayer(){
    const {currentTrack} = useMusic();
    return (
        <div className="music-player">
            <audio></audio>
            <div className="track-info">
                <h3>{currentTrack.title}</h3>
                <p>{currentTrack.artist}</p>
            </div>
            <div className="progress-container">
                <span className="time"></span>
            </div>
        </div>
    )
}

export default MusicPlayer;