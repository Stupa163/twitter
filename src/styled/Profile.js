import styled from 'styled-components'

const BigBlueBlock = styled.div`
  width: 100vw;
  height: 20vh;
  background-color: #1DA1F2;
`;

const ProfileImage = styled.img`
  margin-left: 30px;
  margin-top: -12.5vw;
  width: 25vw;
  height: 25vw;
  border-radius: 50%;
`;

const HiddenInputFile = styled.input`
  opacity: 0;
  z-index: -1;
  position: absolute;
`

export {BigBlueBlock, ProfileImage, HiddenInputFile}
