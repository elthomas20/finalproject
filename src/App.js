import { Routes, Route } from 'react-router-dom'; 
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import NavMenu from './components/NavMenu';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import Episodes from './components/Episodes';
import Footer from './components/Footer';
import EpisodePage from './components/EpisodePage';
import './App.css';


function App() {

  const [episodes, setEpisodes] = useState([]);
  const [episodeInfo, setEpisodeInfo] = useState({});
  
  useEffect(() => {
    const getData = async ()=> {
      let res = await axios.get('https://64b16b0b062767bc48262d6e.mockapi.io/episodes')
      setEpisodes(res.data);
    }
    
    getData();
  },[]);
console.log(episodeInfo);

  return (
    <div className="App-header">
       <div>
        <NavMenu/>
       </div> 
          <Routes>
            <Route path='/' element={<Home/> }/>
            <Route path='/Episodes' element={<Episodes episodes={episodes} choseEpisode={setEpisodeInfo}/>}/>
            <Route path='/ContactUs' element={<ContactUs/> }/>
            <Route path='/EpisodePage/:id' element={<EpisodePage episode={episodeInfo}/>}/>
          </Routes>
       <div>
          <Footer />
        </div>
    </div>
  );
}

export default App;


