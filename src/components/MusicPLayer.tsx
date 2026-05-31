import useMusic from "../hooks/useMusic";

function MusicPlayer(){
    const {currentTrack, formatTime, currentTime, duration} = useMusic();
    return (
        <div className="music-player">
            <audio></audio>
            <div className="track-info">
                <h3>{currentTrack.title}</h3>
                <p>{currentTrack.artist}</p>
            </div>
            <div className="progress-container">
                <span className="time">{formatTime(currentTime)}</span>
                <input type="range" 
                    min='0' 
                    max={duration || 0} 
                    step='0.1' 
                    value={currentTime || 0 }
                    className="progress-bar"
                    //style={}
                />
                <span className="duration">{formatTime(duration)}</span>
            </div>
        </div>
    )
}

export default MusicPlayer;