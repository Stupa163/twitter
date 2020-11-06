import React from 'react';
import {Title} from "../styled";
import {TweetContainer, TweetContent, TweetImage} from "../styled/Tweet";

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
