import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CommentForm from './CommentForm';
import './EpisodePage.css';

function EpisodePage() {
    const [comments, setComments] = useState([]);
    const [episode, setEpisode] = useState({});

    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(`https://64b16b0b062767bc48262d6e.mockapi.io/episodes/${id}`);
                setComments(res.data.comments);
                setEpisode(res.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getData();
    }, [id]);

    const handleAddComment = (newComment) => {
        setComments((prevComments) => [...prevComments, newComment]);
    };

    const handleDeleteComment = async (commentId) => {
        try {
            await axios.delete(`https://64b16b0b062767bc48262d6e.mockapi.io/episodes/${id}/comments/${commentId}`);
            setComments((prevComments) => prevComments.filter((c) => c.id !== commentId));
        } catch (error) {
            console.error('Error deleting comment:', error);
        }
    };

    const showComments = comments.map((c) => (
        <div key={c.id} className="comment-card">
            <h3 className="comment-username">Username: {c.username}</h3>
            <p className="comment-text">{c.comment}</p>
            <button className="delete-comment-button" onClick={() => handleDeleteComment(c.id)}>Delete</button>
        </div>
    ));


    return (
        <div className="episode-page">
            <div className="episode-container">
                <h2 className="episode-title">{episode.title}</h2>
                <div class="embed-responsive embed-responsive-16by9 video-container">
                    <iframe class="embed-responsive-item" src={episode.embedUrl} allowfullscreen></iframe>
                </div>
                <p className="episode-description">{episode.description}</p>
            </div>
            <div class="comments-container">
                <div class="comments-header">
                    <h4>Comments:</h4>
                </div>
                <div class="comments-list">
                    {showComments}
                </div>
            </div>
            <CommentForm id={id} onAddComment={handleAddComment} />
        </div>
    );
}

export default EpisodePage;

 /* video embed from https://getbootstrap.com/docs/4.5/utilities/embed/#aspect-ratios */
