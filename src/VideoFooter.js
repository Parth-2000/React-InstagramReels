import React from 'react'
import './VideoFooter.css'
import { Button, Avatar } from '@material-ui/core'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import Ticker from 'react-ticker'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ModeCommentIcon from '@material-ui/icons/ModeComment'
import SendIcon from '@material-ui/icons/Send'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

function VideoFooter({ channel, songs, likes, shares, avatarSrc }) {
    return (
        <div className="videoFooter">
            <div className="videoFooter-text">
                <Avatar src={avatarSrc} />
                <h3>
                    {channel} * <Button>Follow</Button>
                </h3>
            </div>
            <div className="videoFooter-ticker">
                <MusicNoteIcon className="videoFooter_icon" />
                <Ticker mode="smooth">
                    {({index}) => (
                        <>
                            <h1>{songs}</h1>
                        </>
                    )}
                </Ticker>
            </div>
            <div className="videoFooter-actions">
                <div className="videoFooter-actionsLeft">
                    <FavoriteIcon fontSize="medium" />
                    <ModeCommentIcon fontSize="medium" />
                    <SendIcon fontSize="medium" />
                    <MoreHorizIcon fontSize="medium" />
                </div>
                <div className="videoFooter-actionsRight">
                    <div className='videoFooter-stat'>
                        <FavoriteIcon fontSize="small" />
                        <p>{likes}</p>
                    </div>
                    <div className='videoFooter-stat'>
                        <ModeCommentIcon fontSize="small" />
                        <p>{shares}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoFooter
