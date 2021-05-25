import React, {useEffect} from "react";
import './styles/Feed.css'
import {TweetBox} from "./TweetBox";
import {Post} from "./Post";
import FlipMove from "react-flip-move";
import {useDispatch, useSelector} from "react-redux";
import {thunkTestDispatcher, thunkTestDispatcherDB} from "../../BLL/redux/testReducer";

export const Feed = () => {
    const db = useSelector(state => state.testBR.db);
    const dispatch = useDispatch();
    const sendTweetComponent = (tweetMessage, tweetImage) => {
        dispatch(thunkTestDispatcher(tweetMessage, tweetImage))
    };
    useEffect(() => {
        dispatch(thunkTestDispatcherDB());
    }, []);
    const data = useSelector(state => state.testBR.nameBR);

    return (
        <div className={'feed__home'}>
            {/*Header*/}
            <div className={'feed__header'}>
                <h1>{data}</h1>
            </div>

            {/*TweetBox*/}
            <TweetBox
                sendTweetComponent={sendTweetComponent}

            />
            {/*{.map(value=><Post {...props}/>)}*/}
            <FlipMove>
                {db.map(posts => (
                    <Post
                        key={posts.text}
                        displayName={posts.displayName}
                        userName={posts.userName}
                        verified={posts.verified}
                        text={posts.text}
                        image={posts.image}
                        avatar={posts.avatar}

                    />
                ))}
            </FlipMove>


            {/*Post*/}
            {/*Post*/}
            {/*Post*/}
            {/*Post*/}
        </div>
    )
};
