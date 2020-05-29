import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";

const FooterSection = styled.footer`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: dodgerblue;
  width:100%;

  p {
      color: lightgray;
      
  }
`;

export default function Footer() {
  return (
    <FooterSection>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>
    </FooterSection>
  );
}
