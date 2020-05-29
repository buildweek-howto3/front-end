import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterSection = styled.footer`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #414756;
  width: 100%;

  a,
  p {
    color: #dcf6f3;
  }
`;

export default function Footer() {
  return (
    <FooterSection>
      <p>CopyRight </p>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>
    </FooterSection>
  );
}
