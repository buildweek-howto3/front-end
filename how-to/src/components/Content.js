import React from "react"
import LandingPage from "./LandingPage"
import { Route } from "react-router-dom"
import styled from "styled-components"

import CreateHowTo from "./CreateHowTo"
import Login from "./Login"
import Signup from "./Signup"

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
            <Route exact path="/">
                <LandingPage />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/signup">
                <Signup />
            </Route>
            <Route path="/create-how-to">
                <CreateHowTo />
            </Route>
        </ContentSection>
    )
}