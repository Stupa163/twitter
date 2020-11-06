import React from 'react';
import {TweetContainer, TweetContent, TweetImage, TweetTitle} from "../styled";

const Tweet = (props) => {
    const {pseudo, content, image} = props;

    return (
        <TweetContainer>
            <TweetTitle>{pseudo}</TweetTitle>
            <TweetContent>{content}</TweetContent>
            <TweetImage src={image} alt=""/>
        </TweetContainer>
    )
};

export default Tweet;
