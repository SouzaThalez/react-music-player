import { useState } from "react";

const songs = [
    {
        id:1,
        title:'Omah Lay - Crazy Love',
        artist:'Omah Lay',
        duration:'2:20'
    },
        {
        id:2,
        title:'Omah Lay - Feelings',
        artist:'Omah Lay',
        duration:'2:20'
    },
        {
        id:3,
        title:'Omah Lay - Off & On',
        artist:'Omah Lay',
        duration:'2:20'
    },
        {
        id:4,
        title:'Omah Lay - Pains',
        artist:'Omah Lay',
        duration:'2:20'
    },
        {
        id:5,
        title:'Omah Lay - Pray',
        artist:'Omah Lay',
        duration:'2:20'
    },
        {
        id:6,
        title:'Omah Lay - Slow Poison',
        artist:'Omah Lay',
        duration:'2:20'
    },
    {
        id:7,
        title:'Omahlay - Body & Vibe',
        artist:'Omah Lay',
        duration:'2:20'
    },
      
]


function useMusic(){

    const[ allSongs, setAllSongs ] = useState(songs);
    const [currentTrack, setCurrentTrack] = useState(songs[0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentTime , setCurrentTime] = useState(0);

    //HandlePLay Function
    const handlePlaySong = (song:any, index: number)=>{
        setCurrentTrack(song);
        setCurrentIndex(index);
        
    }

    const formatTime = (time:any)=>{

        if(isNaN(time) || time === undefined) return '0:00';

        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        //padStart function format de seconds to 2 digits '01' instead of only one
        //Example: 2:01 instead of 2:1
        return `${minutes}:${seconds.toString().padStart(2, '0')}`

    }


    
    return {
        allSongs,
        handlePlaySong,
        currentTrack,
        currentIndex,
        setCurrentIndex,
        currentTime
    };

}    
export default useMusic;