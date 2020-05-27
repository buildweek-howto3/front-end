import React from "react";
import { Route, Link } from "react-router-dom";
import CreateHowTo from "./CreateHowTo";
import styled from "styled-components";

const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  max-height: 100%;
  nav {
    width: 20%;
    display: flex;
    flex-flow: column;
    height: 100%;
  }
`;

const ProfileContent = styled.div`
  width: 100%;

`

function Profile() {
  return (
    <ProfileContainer>
      <ProfileContent>
        Content goes here.
        <Route path="/profile/create-how-to">
          <CreateHowTo />
        </Route>
      </ProfileContent>
      <nav>
        <Link to="/profile/create-how-to">Create</Link>
        <Link to="/profile/favorites">Favorites</Link>
        <Link to="/profile/my-how-tos">My How-Tos</Link>
      </nav>
    </ProfileContainer>
  );
}

export default Profile;
