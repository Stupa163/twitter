import styled from 'styled-components'

const Form = styled.form`
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

const SubmitButton = styled.button`
  background-color: #1DA1F2;
  border-radius: 30px;
  padding: 10px 30px;
  border: none;
  float: right;
  margin: 20px 20px 20px;
  color: white;
  
  ${({disabled}) => disabled && `
    opacity: 0.5;
  `}
`;

const BackArrow = styled.svg`
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

const Title = styled.h2`
  margin-left: 5vw;
`;

export {Form, PaddedInput, PaddedTextArea, SubmitButton, BackArrow, TweetButtonsContainer, TweetsContainer, Title};
