import React, { useEffect, useState } from 'react';
import EpisodeCard from './EpisodeCard';



function Episodes({ episodes, choseEpisode }) {

  const showEpisodes = episodes.map(e => 
    <EpisodeCard key={e.id} episode={e} choseEpisode={choseEpisode} />)

  return (
    <div className='container-fluid show-episodes'>
      <div className="row p-3">

      {showEpisodes}
      </div>
    </div>
  )
}

export default Episodes;

// some code used for MockAPI was given to me by my instructor (such as Line 9)

//Changes were made to lines 12-13 with instructor. This will help with making the episode list more dynamic for mobile view or just generally for screen adjustments. 