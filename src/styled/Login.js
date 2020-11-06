import styled from 'styled-components'

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
  margin-left: ${props => props.margin_left};
  padding: 20px 20px 10px 10px;
  &:focus {
    border-bottom: 2px solid #1DA1F2;    
  }
`;

export {LoginButtonContainer, LoginLabel, LoginInput};
