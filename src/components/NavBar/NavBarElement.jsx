import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuData } from "../../data/menuData";
import { FaBars } from "react-icons/fa";

function NavBarElement({toggle}) {
  return (
    <Nav>
      <NavContainer>
        <Logo to="/">Logo</Logo>
        <MenuBar onClick={toggle} />

        <NavMenu>
          {MenuData.map((item, index) => (
            <NavItem key={index}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </NavItem>
          ))}
        </NavMenu>
      </NavContainer>
    </Nav>
  );
}

const Nav = styled.nav`
  height: 70px;
  background: transparent;
  width: 100%;
  position: fixed;
  z-index: 22;
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
`;
const MenuBar = styled(FaBars)`
  color: #fff;
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  padding: 0 1rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export default NavBarElement;
