import React from "react";
import styled from "styled-components";

const NavWrapper = styled.div`
  background-color: #fffae1;
  display: flex;
  flex-direction: row;
  padding: 2em;
  width: 100%;
  justify-content: space-between;
`;

const Links = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: row;
`;

const Link = styled.a`
  color: #4b5f5f;
`;

const Logo = Link.extend`
  font-weight: bold;
  font-size: 1.2em;

  &:hover,
  &:active {
    color: #617b7b;
  }
`;

const Nav = () => (
  <NavWrapper>
    <Logo href="/">Alternatives to Helvetica</Logo>

    <Links>
      <Link href="/about">About</Link>
    </Links>
  </NavWrapper>
);

export default Nav;
