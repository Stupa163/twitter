import React from 'react';
import {TweetContainer, TweetContent, TweetTitle} from "../styled";

const Tweet = (props) => {
    const {pseudo, content} = props;

    return (
        <TweetContainer>
            <TweetTitle>{pseudo}</TweetTitle>
            <TweetContent>{content}</TweetContent>
        </TweetContainer>
    )
};

export default Tweet;
