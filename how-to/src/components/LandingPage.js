import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getHowTos } from "../actions/howToActions";
import styled from "styled-components";

const HowToCards = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-flow: wrap;
`;
const HowToCard = styled.div`
  width: 20%;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 1%;
  h2,
  p {
    width: 80%;
  }

  img {
    width: 200px;
    height: 200px;
    background-color: navy;
    margin-bottom: 5%;
  }
`;

const Marketing = styled.div``;

function LandingPage(props) {
  // console.log(props);

<<<<<<< HEAD
  useEffect( () => {
    props.getHowTos()
  }, [])
=======
  useEffect(() => {
    props.getHowTos();
  }, []);
>>>>>>> b95e8a71c32e73421bc42382b6fa706de317b29c

  return (
    <>
      <div>
        <p>Looking for Great Tutorials? You've come to the right place!</p>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
        <p>Already a Member?</p>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
      {props.loadingHowTos ? (
        <p>fetching How Tos ....</p>
      ): (
        <HowToCards>
          {props.howTos.map((howTo) => {
            return (
              <HowToCard key={howTo.id} className="howToCard">
                <img />
                <h2>{howTo.title}</h2>
                <p>{howTo.description}</p>
              </HowToCard>
            );
          })}{" "}
        </HowToCards>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
    loadingHowTos: state.loadingHowTos,
    howTos: state.howTos,
  };
};

export default connect(mapStateToProps, { getHowTos })(LandingPage);
