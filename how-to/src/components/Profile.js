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

  @media (max-width: 900px){
       display:flex;
       flex-direction:column-reverse;
       justify-content:space-evenly;
       align-items:center;

     }

  nav {
    width: 15%;
    display: flex;
    flex-flow: column;
    align-items: center;
    background-color: #33918c;
    @media (max-width:1400px){
      width: 25%;
    }
    @media (max-width: 900px){
       width:96%;
       display:flex;
       flex-direction:row;
       justify-content:space-evenly;
       align-items:center;
       box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
       transition: 0.3s;
        &:hover {
          box-shadow: 0 8px 16px 0 rgba(0,0,0,0.4);
    }

     }
    a {
      color: #414756;
      background-color: #dcf6f3;
      width: 50%;
      padding: 1rem;
      &:hover {
        background-color: #414756;
        color: #dcf6f3;
      }
      @media (max-width: 900px){
        width:25%;
        font-size: 1.5rem;
        margin:3%;

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
  .welcomeContainer {
    height: 80vh;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

  }
`;

const WelcomeUser = styled.h2`
  font-size: 15rem;
  @media (max-width: 900px){
       font-size: 10rem;

     }

  @media (max-width: 580px){
       font-size: 8rem;

     }
`;

function Profile(props) {
  useEffect(() => {
    props.getUser();
  }, []);
  return (
    <ProfileContainer>
      <ProfileContent>
        <Route exact path="/profile">
          <div className="welcomeContainer">
            <WelcomeUser>Welcome {props.username}!</WelcomeUser>
            <p>
              You can create a new How To, Edit and Delete the How To's you have
              already created.
            </p>
          </div>
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
