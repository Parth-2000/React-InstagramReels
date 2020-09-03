import React, { useState, useRef } from 'react'
import VideoHeader from './VideoHeader'
import VideoFooter from './VideoFooter'
import './VideoCard.css'

function VideoCard({ url , likes, shares, channel, avatarSrc, song }) {

    const [isVideoPlaying, setIsVideoPlaying] = useState(false)
    const videoRef = useRef(null)

    const onVideoPress = () => {
        if(isVideoPlaying){
            videoRef.current.pause()
            setIsVideoPlaying(false)
        } else{
            videoRef.current.play()
            setIsVideoPlaying(true)
        }
    }

    return (
        <div className="videoCard">
            <VideoHeader />
            <video 
                ref = { videoRef } 
                onClick={ onVideoPress } 
                className="videoCard-player" 
                src={ url } 
                type="video/mp4" loop >
            </video>
            <VideoFooter 
                channel = { channel }
                likes = { likes }
                shares = { shares }
                avatarSrc = { avatarSrc }
                songs = { song }
            />
        </div>
    )
}

{/* <iframe width="545" height="409" src="https://www.youtube.com/embed/WOC5kHtn_x4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}


export default VideoCard
