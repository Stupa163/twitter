import React from 'react';
import Tweet from "./Tweet";

const TweetsList = (props) => {
    const {tweets} = props;

    return (
        <div>
            {
                tweets.map((tweet, key) => {
                    return <Tweet pseudo={tweet.pseudo} content={tweet.content} image={tweet.image} key={key} profilePicture={tweet.userImage}/>
                })
            }
        </div>
    )
};

export default TweetsList;
