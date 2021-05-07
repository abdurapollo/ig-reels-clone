import React from 'react'
import './VideoCard.css'

function VideoCard() {
    return (
        <div className="videoCard">
            <video 
              className="videoCard__player"
              src="https://instagram.flhr3-2.fna.
              fbccdn.net/v/t50.2886-16/
              117598442_205338364335864_569508090327
              8566_n.mp4?_nc_ht=instagram.flhr3-2.fna.
              fbcdn.net&_nc_cat=100&
              _nc_ohc=vjDPPklLnOYAX-xOjlv&oe=5F38FACF&
              oh=fbe19a529394ac8cc1a61f1b2b016e54"
              alt="IG Reels Video"
              loop
            />
        </div>
    )
}

export default VideoCard
