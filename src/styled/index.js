import styled from 'styled-components'

const NavbarUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 15px 0;
    overflow: hidden;
    background-color: lightgrey;
`;

const NavbarLi = styled.li`
  float: left;
  padding: 10px;
`;

const NavbarLink = styled.a`
  color: white;
`;

export {NavbarUl, NavbarLi, NavbarLink}
