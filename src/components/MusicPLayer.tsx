import { useEffect, useRef } from "react";
import useMusic from "../hooks/useMusic";

function MusicPlayer(){
    const {currentTrack, formatTime, currentTime, duration} = useMusic();
    const audioRef = useRef(null);
    
    useEffect(()=>{
        const audio = audioRef.current;
        if(!audio){
            return
        }



    },[])


    return (
        <div className="music-player">
            <audio ref={audioRef} preload="metadata" crossOrigin="anonymous"></audio>

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