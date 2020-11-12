import styled from 'styled-components'

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

const OffLineError = styled.div`
  display: none;
  text-align: center;
  font-size: 20px;
  ${({ display }) => display && `
    display: block;
  `}
`;

const OffLineIcon = styled.svg`
  margin: 20px auto auto;
  display: block;
  width: 15vw;
  max-height: 50px;
`;

export {HomeMoto, HomeButton, OffLineError, OffLineIcon};
