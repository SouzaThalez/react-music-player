import useMusic from "../hooks/useMusic";

function AllSongs(){

    const {allSongs, handlePlaySong, currentTrack, currentIndex} = useMusic();

    return <div className="all-songs">
        <h2> All Songs ({allSongs.length})</h2>
        <div className="songs-grid">
            {allSongs.map((song, key)=>(
                //Here the handlePlaySong fucntion has arguments
                //Therefore it need to be called with arrow function ()=>
                <div key={key} 
                     className={`song-card ${currentIndex === key ? 'active' : ''}`} 
                     onClick={()=> handlePlaySong(song,key)}>
                    <div className="song-info">
                        <h3 className="song-title">{song.title}</h3>
                        <p className="song-artit">{song.artist}</p>
                        <span className="song-duration">{song.duration}</span>
                    </div>
                    <div className="play-button">
                        {currentIndex == key ? '🎵' : '⏵'}
                    </div>
                </div>
            ))}
        </div>
    </div>
}

export default AllSongs;