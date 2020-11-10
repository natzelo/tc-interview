import React from "react";
import {
  ClosedIcon,
  Icon,
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <ClosedIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">Home</SidebarLink>
          <SidebarLink to="about">Pages</SidebarLink>
          <SidebarLink to="about">Portfolios</SidebarLink>
          <SidebarLink to="about">Headers</SidebarLink>
          <SidebarLink to="about">Elements</SidebarLink>
          <SidebarLink to="about">Blog</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
