import React from 'react';
import TMTWPImage from './TMTWP.png';
import './Home.css';
import Theme from './Theme';

function Home() {
  return (
    <div className='home-container'> 
        <div> 
            <Theme />
            <img src={TMTWPImage} alt="The Mithral Tabletop" className="welcome-page" />
        </div>
    </div>
  );
}

export default Home;

