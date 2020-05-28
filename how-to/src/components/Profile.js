import React, { useEffect } from "react";
import { Route, Link } from "react-router-dom";
import CreateHowTo from "./CreateHowTo";
import MyHowTos from "./MyHowTos";
import styled from "styled-components";
import { getUser } from "../actions/howToActions";
import { connect } from "react-redux";

const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100%;

  nav {
    width: 15%;
    display: flex;
    flex-flow: column;
    align-items: center;
    background-color: navy;
    a {
      color: lightblue;
      background-color: dodgerblue;
      width: 50%;
      padding: 1rem;
      &:hover {
        background-color: skyblue;
        color: navy;
      }
    }
  }
`;

const ProfileContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const WelcomeUser = styled.h2`
  font-size: 15rem;
  margin: 5%;
`;

function Profile(props) {
  useEffect(() => {
    props.getUser();
  }, []);
  return (
    <ProfileContainer>
      <ProfileContent>
        <Route exact path="/profile">
          <WelcomeUser>Welcome {props.username}!</WelcomeUser>
          <p>
            You can create a new How To, Edit and Delete the How To's you have
            already created.
          </p>
        </Route>
        <Route path="/profile/create-how-to">
          <CreateHowTo />
        </Route>
        <Route path="/profile/my-how-tos">
          <MyHowTos />
        </Route>
      </ProfileContent>
      <nav>
        <Link to="/profile/create-how-to">Create</Link>
        <Link to="/profile/my-how-tos">My How-Tos</Link>
        <Link to="/profile/favorites">Favorites</Link>
      </nav>
    </ProfileContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
    username: state.username,
    userId: state.userId,
  };
};

export default connect(mapStateToProps, { getUser })(Profile);
