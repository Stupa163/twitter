import React from 'react';
import Tweet from "./Tweet";

const TweetsList = (props) => {
    const {tweets} = props;

    return (
        <div>
            {
                tweets.map((tweet) => {
                    return <Tweet pseudo={tweet.pseudo} content={tweet.content} image={tweet.image}/>
                })
            }
        </div>
    )
};

export default TweetsList;
