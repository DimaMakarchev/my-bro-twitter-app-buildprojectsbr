import React, {useEffect, useState} from "react";
import './styles/Feed.css'
import {TweetBox} from "./TweetBox";
import {Post} from "./Post";
import db from "../../firebase";
import FlipMove from "react-flip-move";

export const Feed = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        db.collection('posts').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc=>doc.data()));
        })
    },[]);

    return (
        <div className={'feed__home'}>
            {/*Header*/}
            <div className={'feed__header'}>
                <h1>Home</h1>
            </div>

            {/*TweetBox*/}
            <TweetBox/>
            {/*{.map(value=><Post {...props}/>)}*/}
            <FlipMove>
                {posts.map(posts=>(
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
