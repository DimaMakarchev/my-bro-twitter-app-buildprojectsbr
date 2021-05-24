import React, {forwardRef, useState} from "react";
import './styles/Post.css'
import Avatar from "@material-ui/core/Avatar";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import './styles/Post.css'

export const Post = forwardRef( ({
                         displayName, userName, verified, text, image, avatar
                     },ref) => {
    return (
        <div className={'posts'} ref={ref}>
            <div className="posts__avatar">
                <Avatar src={avatar}/>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {displayName}{" "}
                            <span className={'post__headerSpecial'}>

                                {verified && <VerifiedUserIcon className={'post__badge'}/>}@{userName}
                           </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img alt={'ok'} src={image}/>
                <div className="post__footer">
                    <ChatBubbleOutlineIcon/>
                    <RepeatIcon/>
                    <FavoriteBorderIcon/>
                    <PublishIcon/>
                </div>
            </div>
        </div>
    )
});
