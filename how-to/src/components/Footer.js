import React from "react";

import styled from "styled-components";

const FooterSection = styled.footer`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: dodgerblue;
  p {
      color: lightgray;
  }
`;

export default function Footer() {
  return (
    <FooterSection>
      <p>Social Links / Copy Right / etc go here</p>
    </FooterSection>
  );
}
