import React from 'react';
import {
    ImageAndTextContainer, TweetArobased,
    TweetContainer,
    TweetContent,
    TweetImage,
    TweetProfilePicture,
    TweetTitle
} from "../styled/Tweet";

const Tweet = (props) => {
    const {pseudo, content, image, profilePicture} = props;

    return (
        <TweetContainer>
            <ImageAndTextContainer>
                <TweetProfilePicture src={profilePicture}/>
                <TweetTitle>
                    {pseudo}
                    <TweetArobased>@{pseudo.toLowerCase()}</TweetArobased>
                </TweetTitle>

            </ImageAndTextContainer>
            <TweetContent>{content}</TweetContent>
            <TweetImage src={image} alt=""/>
        </TweetContainer>
    )
};

export default Tweet;
