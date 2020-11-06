import React from 'react';
import {TweetContainer, TweetContent, TweetImage, Title} from "../styled";

const Tweet = (props) => {
    const {pseudo, content, image} = props;

    return (
        <TweetContainer>
            <Title>{pseudo}</Title>
            <TweetContent>{content}</TweetContent>
            <TweetImage src={image} alt=""/>
        </TweetContainer>
    )
};

export default Tweet;
