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
  max-height: 100%;
  height: 100%;
  nav {
    width: 20%;
    display: flex;
    flex-flow: column;
    height: 100%;
    background-color: navy;
    a {
      color: lightblue;
      background-color: dodgerblue;
    }
  }
`;

const ProfileContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Profile(props) {
  useEffect(() => {
    props.getUser()
  }, []);
  return (
    <ProfileContainer>
      <ProfileContent>
        <Route exact path="/profile">
          <p>Welcome {props.username}!</p>
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
  };
};

export default connect(mapStateToProps, { getUser })(Profile);
