import { useEffect, useRef } from "react";
import useMusic from "../hooks/useMusic";

function MusicPlayer(){

    const {
        currentTrack,
        formatTime,
        currentTime,
        setCurrentTime,
        duration,
        setDuration,
        nextTrack,
        prevTrack,
        pause,
        play,
        isPlaying,
    } = useMusic();


    const audioRef = useRef<HTMLAudioElement>(null);

    const handleTimeChange = (e: any) =>{
        const audio = audioRef.current;
        if(!audio){
            return
        }
        
        // get the timevalue at the selected position
        const newSelectedTime = e.target.value;
        //Pass the new timw to the audio reference
        audio.currentTime = newSelectedTime;
        //update the progressbar 
        setCurrentTime(newSelectedTime);





    }

    useEffect(()=>{
      
        const audio = audioRef.current;
        if(!audio){
            return
        }

        if (isPlaying) {
            audio.play().catch((err)=> console.error(err));
        }else{
            audio.pause();
        }


    },[isPlaying])//Whenever iSplaying changes value , this useEfect runs

    
    useEffect(()=>{

        const audio = audioRef.current;

        if(!audio){
            return
        }

        //Run logic whenever the metadate for the audio loads
        const handleLoadedMetadata = ()=>{
           setDuration(audio.duration);
        }

        const handleTimeUpdate = ()=>{
            // currentTime here is a property of the audio reference
            setCurrentTime(audio.currentTime);
        }
        const handleEnded = ()=>{
            nextTrack();
        }

        //Subscripitons
        audio.addEventListener('loadedmetadata', handleLoadedMetadata);
        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('ended', handleEnded);

        //clean subscription
        return()=>{
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            audio.removeEventListener('timeupdate', handleLoadedMetadata);
            audio.removeEventListener('ended', handleEnded);
        };


    },[setDuration,setCurrentTime,currentTrack]
    ) // Dependecies goes here, and with the empty array means it only runs once
    // if you have functions in the array, means the useEffect will run every time there is a change
    //in that parameter 


    return (
        <div className="music-player">
            <audio 
                ref={audioRef} 
                src={currentTrack.url} 
                preload="metadata" 
                crossOrigin="anonymous">    
            </audio>

            <div className="track-info">
                <h3>{currentTrack.title}</h3>
                <p>{currentTrack.artist}</p>
            </div>

            <div className="progress-container">
                <span className="time">{formatTime(currentTime)}</span>
                <input 
                    type="range" 
                    min='0' 
                    max={duration || 0} 
                    step='0.1' 
                    value={currentTime || 0 }
                    className="progress-bar"
                    onChange={handleTimeChange}
                    //style={}
                />
                <span className="time">{formatTime(duration)}</span>
            </div>

            <div className="controls">
                <button className="control-btn" onClick={prevTrack}>⏮</button>
                <button className="control-btn play-btn" onClick={()=> isPlaying ? pause() : play()}>
                    {isPlaying ? '⏸' : '▶'}
                </button>
                <button className="control-btn" onClick={nextTrack}>▶⏭</button>
            </div>


        </div>
    )
}

export default MusicPlayer;