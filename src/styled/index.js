import styled from 'styled-components'

const NavbarUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 15px 0;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    background-color: white;
    border-top: 1px solid lightgray;
    width: 100vw;
`;

const NavbarLi = styled.li`
  float: left;
  padding: 10px;
`;

const TweetForm = styled.form`
  width: 90vw;
  margin-left: 5vw;
  margin-bottom: 150px;
`;

const PaddedInput = styled.input`
  padding: 15px;
  margin-top: 30px;
  width: 80vw;
  border-radius: 15px;
  border: 2px solid #1DA1F2;
`;

const PaddedTextArea = styled.textarea`
  margin-top: 30px;
  padding: 15px;
  width: 80vw;
  height: 50vh;
  border-radius: 15px;
  border: 2px solid #1DA1F2;
`;

const TweetSubmitButton = styled.button`
  background-color: #1DA1F2;
  border-radius: 30px;
  padding: 10px 30px;
  border: none;
  float: right;
  margin: 20px 20px 5px;
  color: white;
  
  ${({disabled}) => disabled && `
    opacity: 0.5;
  `}

`;

const TweetBackArrow = styled.svg`
  width: 10vw;
  margin: 20px 20px 5px;
`;

const TweetButtonsContainer = styled.div`
  border-bottom: 1px solid lightgray;
  width: 100vw;
`;

const TweetsContainer = styled.div`
  width: 100vw;
`;

const TweetContainer = styled.div`
  border-bottom: 1px solid lightgray;
  padding-bottom: 25px;
`;

const TweetTitle = styled.h2`
  margin-left: 5vw;
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

export {
    NavbarUl,
    NavbarLi,
    TweetForm,
    PaddedInput,
    PaddedTextArea,
    TweetSubmitButton,
    TweetBackArrow,
    TweetButtonsContainer,
    TweetsContainer,
    TweetContainer,
    TweetTitle,
    TweetContent,
    TweetImage
}
