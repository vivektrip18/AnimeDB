import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Ranking } from './pages/Ranking';
import { About } from './pages/About';
import { NavBar } from './components/NavBar';
import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import { Footer } from './components/Footer';

function App() {

  const [topAnime, setTopAnime] = useState([]);
  const [animeList,setAnimeList] = useState([]);
  const [search,setSearch] = useState("");
  const [blur, setBlur] = useState(false);

  const GetTopAnime = async () => {
  try {

      const response = await axios.get(`https://api.jikan.moe/v4/top/anime`)
      setTopAnime(response.data.data.slice(0, 12));
      
  } catch (e) {
      console.error("Error fetching data");
    }
  }
  useEffect(() => {
    GetTopAnime();
  }, []);

  const HandleSearch = e => {
    FetchAnime(search);
    
  }

  const FetchAnime = async (query) => {
    try{
      const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}`)
      setAnimeList(response.data.data.slice(0,11));
      setBlur(true);
    }catch(e){
      console.error("Error fetching the anime");
    }
  }

  return (
    <div className='App'>
      <BrowserRouter >
        <NavBar setBlur={setBlur}/>
        <div className={blur ? "blur-background" : ""} />
        <Routes>
          <Route path='/' element={<HomePage search={search} 
                                             setSearch={setSearch}
                                             HandleSearch={HandleSearch}
                                             animeList = {animeList}
                                             setBlur={setBlur}/>} />
          <Route path='/ranking' element={<Ranking topAnime={topAnime} 
                                                    setBlur={setBlur}/>} />
          <Route path='/about' element={<About setBlur={setBlur} />} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>

  )
}

export default App
