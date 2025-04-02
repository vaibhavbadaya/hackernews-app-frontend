import React from 'react';
import StoryItem from './components/StoryItem';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HackerNews Top Stories</h1>        
      </header>
      <main>
        <StoryItem />
      </main>
      <footer>
        <p>
          HackerNews App by Vaibhav Badaya
        </p>
      </footer>
    </div>
  );
}

export default App;
