import React, { useState } from 'react';
import axios from 'axios';
import './CommentForm.css';

function CommentForm({ id, onAddComment }) {
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username.trim() || !comment.trim()) {
            alert('Please fill in all fields.');
            return;
        }

        const newComment = {
            username: username.trim(),
            comment: comment.trim(),
        };

        try {
            const res = await axios.post(`https://64b16b0b062767bc48262d6e.mockapi.io/episodes/${id}/comments`, newComment);
            onAddComment(res.data);
            setUsername('');
            setComment('');
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    return (
        <form className="comment-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <h4 className="leave-comment">Leave a comment!</h4>
            </div>
            <div className="form-group">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Comment"
                    className="form-control"
                ></textarea>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">
                    Add Comment
                </button>
            </div>
        </form>
    );
}

export default CommentForm;
