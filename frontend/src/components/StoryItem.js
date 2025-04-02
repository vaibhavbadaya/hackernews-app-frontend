import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StoryItem() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStories = async () => {
      try {        
        const apiUrl = 'http://127.0.0.1:8000';
              
        const response = await axios.get(`${apiUrl}/api/top-stories/`);

        if (response.status !==200) {
            throw new Error('failed to fetch stories')
        }      
        setStories(response.data.stories);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching stories:', err);
        setError('Failed to load stories. Please try again later.');
        setLoading(false);
      }
    };
   
    fetchStories();
  }, []);
  
  if (loading) {
    return <div className="loading">Loading top stories...</div>;
  }
  
  if (error) {
    return <div className="error">{error}</div>;
  }
  
  return (
    <div className="story-list">
      {stories.length === 0 ? (
        <p>No stories available at the moment.</p>
      ) : (
        <ul>
          {stories.map((story, index) => (
            <li key={index} className="story-item">
              <h2>
                <a href={story.url} target="_blank" rel="noopener noreferrer">
                  {story.title}
                </a>
              </h2>
              <div className="story-details">
                <span>Author: {story.author}</span>
                <span>Score: {story.score}</span>
                <span>Posted: {story.time}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StoryItem;