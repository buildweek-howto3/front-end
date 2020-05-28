import React from "react";
import LandingPage from "./LandingPage";
import { Route } from "react-router-dom";
import styled from "styled-components";


import  PrivateRoute  from "../utils/PrivateRoute"
import Profile from "./Profile"
import Login from "./Login"
import Signup from "./Signup"

const ContentSection = styled.div`
  /* height: 80vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  background-color: lightblue;
  width: 100%;
`;

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
           <PrivateRoute path="/profile" component={Profile} />
        </ContentSection>
    )
}