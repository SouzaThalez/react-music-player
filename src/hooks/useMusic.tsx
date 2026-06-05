import { useState } from "react";

const songs = [
    {
        id: 1,
        title: 'Omah Lay - Crazy Love',
        artist: 'Omah Lay',
        url: '/Songs/Omah Lay - Crazy Love.mp3',
        duration: '3:56'
    },
    {
        id: 2,
        title: 'Omah Lay - Feelings',
        artist: 'Omah Lay',
        url: '/Songs/Omah Lay – Feelings.mp3',
        duration: '2:20'
    },
    {
        id: 3,
        title: 'Omah Lay - Off & On',
        artist: 'Omah Lay',
        url: '/Songs/Omah Lay – Off & On.mp3',
        duration: '2:20'
    },
    {
        id: 4,
        title: 'Omah Lay - Pains',
        artist: 'Omah Lay',
        url: '/Songs/Omah Lay – Pains.mp3',
        duration: '2:20'
    },
    {
        id: 5,
        title: 'Omah Lay - Pray',
        artist: 'Omah Lay',
        url: '/Songs/Omah Lay – Pray.mp3',
        duration: '2:20'
    },
    {
        id: 6,
        title: 'Omah Lay - Slow Poison',
        artist: 'Omah Lay',
        url: '/Songs/Omah Lay – Slow Poison.mp3',
        duration: '2:20'
    },
    {
        id: 7,
        title: 'Omah Lay - Body & Vibe',
        artist: 'Omah Lay',
        url: '/Songs/Omahlay - Body & Vibe.mp3',
        duration: '2:20'
    }
      
]


function useMusic(){

    const[ allSongs, setAllSongs ] = useState(songs);
    const [currentTrack, setCurrentTrack] = useState(songs[0]);
    const [currentIndex, setCurrentTrackIndex] = useState(0);
    const [currentTime , setCurrentTime] = useState(0);
    const [duration , setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    //HandlePLay Function
    const handlePlaySong = (song:any, index: number)=>{
        setCurrentTrack(song);
        setCurrentTrackIndex(index);
        
    }

    const nextTrack = () => {
       
        setCurrentTrackIndex((prev) => {
            const nextIndex = (prev + 1) % allSongs.length;
            setCurrentTrack(allSongs[nextIndex]);
            return nextIndex;
        })
        setIsPlaying(false);
    }

    const prevTrack = () => {
        
        setCurrentTrackIndex((prev) => {
            const nextIndex = prev === 0 ? allSongs.length - 1 : prev - 1 ;
            setCurrentTrack(allSongs[nextIndex]);
            return nextIndex;
        })

        setIsPlaying(false);

    }

    const formatTime = (time:any)=>{

        if(isNaN(time) || time === undefined) return '0:00';

        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        //padStart function format de seconds to 2 digits '01' instead of only one
        //Example: 2:01 instead of 2:1
        return `${minutes}:${seconds.toString().padStart(2, '0')}`

    }

    const play = () => setIsPlaying(true);
    const pause = () => setIsPlaying(false);

    
    return {
        allSongs,
        handlePlaySong,
        currentTrack,
        setCurrentTrackIndex,
        currentIndex,
        setCurrentTime,
        currentTime,
        formatTime,
        duration,
        setDuration,
        nextTrack,
        prevTrack,
        play,
        pause,
        isPlaying,
        setIsPlaying
    };

}    
export default useMusic;