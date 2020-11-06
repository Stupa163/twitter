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
  padding-left: 20px;
  padding-right: 20px;
`;

const NavbarSvg = styled.svg`
  width: 40px;
`;

export {NavbarUl, NavbarLi, NavbarSvg};
