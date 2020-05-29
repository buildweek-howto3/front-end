import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import SearchHowTo from "./SearchHowTo";

// STYLING ************
const HeaderSection = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #414756;
  h1,
  a,
  label,
  input, button {
    color: #dcf6f3;
  }
  .titleWrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    h1 {
      padding-left: 2rem;
      &:hover {
        color: #33918C;
        text-shadow: 0 2px 2px #dcf6f3;
       }
      
    }
    .navLinks {
      padding-right: 1rem;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      a {
        margin-right: 1rem;
        border: 2px solid lightgray;
        border-radius: 10px;
        padding: 0.3rem;
        &:hover {
          background-color: #33918C;
        }
      }
    }
  }
`;

// CODE *********

const Header = () => {
  const logOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <HeaderSection>
      <div className="titleWrapper">
        <Link to="/">
          <h1>DiY Hacks</h1>
        </Link>
        <div className="navLinks">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/" onClick={logOut}>
            Logout
          </Link>
        </div>
      </div>
      <SearchHowTo />
    </HeaderSection>
  );
};

export default Header;
