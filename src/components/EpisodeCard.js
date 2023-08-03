import React from 'react';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import './EpisodeCard.css';


const EpisodeCard = ({ episode, choseEpisode }) => {

    const navigate = useNavigate();

    const selectEpisode = () => {
        choseEpisode(episode);
        navigate(`/EpisodePage/${episode.id}`);
    }

    return (
        <div className="col-lg-3 col-md-6 col-sm-12 p-2 episode-list">
            <div className='episode-card'>
                <div className='episode-name'>
                    {episode.title}
                </div>
                <img src={episode.imageUrl} className='episode-image' alt={episode.title} />
                <p className='episode-info'>{episode.description}</p>
                <Button onClick={selectEpisode} className="go-to-button"> Go to Episode {episode.id}</Button>
            </div>
        </div>
    )

}

export default EpisodeCard

// Changes were made to line 17 to make the website more dynamic for mobile viewing with instructor guidance