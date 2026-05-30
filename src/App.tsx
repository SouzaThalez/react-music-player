import AllSongs from "./components/AllSongs";
import MusicPlayer from "./components/MusicPLayer";
import { BrowserRouter, Routes, Route } from "react-router";
import PlayList from "./components/PlayList";

function App() {
return (
    <BrowserRouter>
        <div className="app">
          <main className="app-main">
            <div className="player-section">
              <MusicPlayer/>
            </div>
            <div className="content-section">
              <Routes>
                <Route path="/" element={<AllSongs/>}></Route>
                <Route path="/playlist" element={<PlayList/>}></Route>
              </Routes>
            </div> 
          </main>
        </div>
    </BrowserRouter>
)
}

export default App
