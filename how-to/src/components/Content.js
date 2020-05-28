import React from "react";
import LandingPage from "./LandingPage";
import { Route } from "react-router-dom";
import styled from "styled-components";


import  PrivateRoute  from "../utils/PrivateRoute"
import Profile from "./Profile"
import Login from "./Login"
import Signup from "./Signup"

const ContentSection = styled.div`
<<<<<<< HEAD
  
=======
>>>>>>> 65bf6e862b2e90970b672d09cb5891b75252e36f
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