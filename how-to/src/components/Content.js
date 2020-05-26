import React from "react"
import LandingPage from "./LandingPage"

import styled from "styled-components"

const ContentSection = styled.div`

    height: 80vh;
    display: flex;
    justify-content:center;
    align-items: center;
    background-color: lightblue;


`


export default function Content() {
    return (
        <ContentSection>
            <LandingPage />
        </ContentSection>
    )
}