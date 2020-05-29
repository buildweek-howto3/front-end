import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterSection = styled.footer`
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #414756;
  width: 100%;
  box-shadow: inset 0 0 5px 5px #dcf6f3;

  a,
  p {
    color: #dcf6f3;
  }
`;

export default function Footer() {
  return (
    <FooterSection>
      <p>CopyRight</p>
      <p>Forum</p>
      <p>Support</p>
      <p>Contact</p>
    </FooterSection>
  );
}
