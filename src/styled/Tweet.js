import styled from "styled-components";

const TweetContainer = styled.div`
  border-bottom: 1px solid lightgray;
  padding-bottom: 25px;
`;

const ImageAndTextContainer = styled.div`
  margin-top: 50px;
`;

const TweetTitle = styled.h2`
  float: left;
  margin-top: 0px;
  margin-left: 30px;
`;

const TweetProfilePicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 25px;
  float: left;
`;

const TweetArobased = styled.div`
  color: gray;
  font-size: 15px
`;

const TweetContent = styled.p`
  text-align: justify;
  width: 90vw;
  float: left;
  margin-left: 5vw;
`;

const TweetImage = styled.img`
  margin: auto;
  display: block;
  width: 90vw;
`;

export {
    TweetContainer,
    ImageAndTextContainer,
    TweetTitle,
    TweetProfilePicture,
    TweetContent,
    TweetImage,
    TweetArobased
};
