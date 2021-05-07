import React from 'react';
import './App.css';
import VideoCard from './VideoCard';

function App() {
  return (
    <div className="app">
      {/* <h1>Lets build instragram reels clone🚀!</h1> */}

      <div className="app__top">

           {/* image at top - logo */}
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/150px-Instagram_logo_2016.svg.png"
             className="app__logo"
             alt=""
           />
           {/* Reels text */}
           <h1>Reels</h1>

      </div>

      <div className="app_videos">
        {/* container of app__videos  (scrollable container) */}
        {/* Videos */}
        <VideoCard />
        <VideoCard />
        <VideoCard />
        {/* Videos */}
        {/* Videos */}
        {/* Videos */}
      </div>
      
    </div>
  );
}

export default App;
