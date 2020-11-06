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

const HomeMoto = styled.h1`
  margin-top: 35vh;
  text-align: center;
  font-size: 30px;
  width: 85vw;
  margin-left: 7.5vw;
`;

const HomeButton = styled.button`
  background-color: #1DA1F2;
  width: 85vw;
  margin: 15px 7.5vw 7.5vw;
  border: none;
  padding: 10px;
  border-radius: 50px;
  font-weight: bold;
  font-size: 20px;
  color: white;
`;

const LoginButtonContainer = styled.div`
  background-color: white;
  width: 100vw;
  position: fixed;
  bottom: 0;
  border-top: 1px solid lightgray;
`;

const LoginLabel = styled.label`
  color: gray;
`;

const LoginInput = styled.input`
  border: none;
  border-bottom: 1px solid gray;
  width: 80vw;
  font-size: 20px;
  margin-top: 20px;
  padding: 20px 20px 10px 10px;
  &:focus {
    border-bottom: 2px solid #1DA1F2;    
  }
`;

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

const TweetContainer = styled.div`
  border-bottom: 1px solid lightgray;
  padding-bottom: 25px;
`;

const Title = styled.h2`
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
    HomeMoto,
    HomeButton,
    Form,
    PaddedInput,
    PaddedTextArea,
    SubmitButton,
    BackArrow,
    TweetButtonsContainer,
    TweetsContainer,
    TweetContainer,
    Title,
    TweetContent,
    TweetImage,
    LoginInput,
    LoginLabel,
    LoginButtonContainer
}
