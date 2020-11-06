import styled from "styled-components";

const TweetContainer = styled.div`
  border-bottom: 1px solid lightgray;
  padding-bottom: 25px;
`;

const TweetContent = styled.p`
  text-align: justify;
  width: 95vw;
  margin-left: 5vw;
`;

const TweetImage = styled.img`
  margin: auto;
  display: block;
  max-width: 100vw;
`;

export {TweetContainer, TweetContent, TweetImage};
