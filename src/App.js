import React from 'react';
import './App.css';
import VideoCard from './VideoCard';

function App() {
  return (
    <div className="app">
      <div className="app-top">
        <img className="app-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt="" />
        <h1>Instagram Reels</h1>
      </div>
      <div className="app-videos">
        {/* Scrollable Container */}
        <VideoCard 
          channel = 'Anonmyous'
          avatarSrc = 'https://randomuser.me/api/portraits/men/69.jpg'
          song = 'Jhonny Jhonny Yes Pappa'
          url = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
          likes = {1000}
          shares = {34}
        />
        <VideoCard 
          channel = 'Anonmyous Alfa'
          avatarSrc = 'https://randomuser.me/api/portraits/women/75.jpg'
          song = 'Jhonny Jhonny No Pappa'
          url = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
          likes = {900}
          shares = {40}
        />
        <VideoCard 
          channel = 'Anonmyous Beta'
          avatarSrc = 'https://randomuser.me/api/portraits/men/89.jpg'
          song = 'Jhonny Jhonny !!! Pappa'
          url = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
          likes = {700}
          shares = {14}
        />
      </div>
    </div>
  );
}

export default App;
