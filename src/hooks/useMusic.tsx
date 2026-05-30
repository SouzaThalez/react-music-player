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

    //HandlePLay Function
    const handlePlaySong = (song:any, index: number)=>{
        setCurrentTrack(song);
        setCurrentIndex(index);
        debugger
    }



    
    return {allSongs, handlePlaySong, currentTrack, currentIndex};

}    
export default useMusic;