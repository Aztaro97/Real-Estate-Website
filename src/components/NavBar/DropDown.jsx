import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { MenuData } from "../../data/menuData";

function DropDown({isOpen, toggle}) {
  return (
    <DropDownContainer isOpen={isOpen} onClick={toggle}>
      <DropDownWrapper>
        <Icon onClick={toggle}>
          <IconClose />
        </Icon>
        <DropDownMenu>
          {MenuData.map((item, index) => (
            <DropDownLink to={item.link} key={index}>
              {item.title}
            </DropDownLink>
          ))}
        </DropDownMenu>
      </DropDownWrapper>
    </DropDownContainer>
  );
}

const DropDownContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: none;
  background: #000;
  z-index: 999;
  display: grid;
  transition: .3s all ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')};

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const DropDownWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  color: #fff;
  cursor: pointer;
  background: transparent;
  /* z-index: 100; */
`;

const IconClose = styled(IoMdClose)`
  color: #fff;
  font-size: 2rem;
`;

const DropDownMenu = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 60px);
  }
`;

const DropDownLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-decoration: none;
  font-size: 1.7rem;
  margin-bottom: 4rem;

  &:hover {
    opacity: 0.8;
  }
`;

export default DropDown;
