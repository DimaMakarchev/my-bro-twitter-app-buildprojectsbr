import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import './styles/TweetBox.css'
import db from "../../firebase";
import {Post} from "./Post";

export const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setImage] = useState('');

    const sendTweet = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'BroCool1234',
            userName: 'eeeee',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://i.pinimg.com/originals/60/04/30/600430c1d22c731b94cf4e7dae6b398a.gif'

        });
        setTweetMessage('');
        setImage('');
    };

    return (
        <div className={'tweetBox'}>
            <form>
                <div className={'tweetBox__input'}>
                    <Avatar/>
                    <input onChange={(e) => setTweetMessage(e.target.value)} value={tweetMessage} type={'text'}
                           placeholder={'WHAT`s up bro'}/>
                </div>
                <input value={tweetImage} onChange={e => setImage(e.target.value)} className={'tweetBox__input_url'}
                       type={'text'} placeholder={'URL'}/>
                <div className={'tweetBox__button_flex'}>
                    <Button onClick={sendTweet} type={'submit'} className={'tweetBox__button'}>Tweet</Button>
                </div>

            </form>
        </div>
    )
};
