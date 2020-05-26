import React from "react"
import LandingPage from "./LandingPage"
import { Route } from "react-router-dom"
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
            <Route path="/">
                <LandingPage />
            </Route>
        </ContentSection>
    )
}