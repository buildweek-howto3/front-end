import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getHowTos } from "../actions/howToActions";
import styled from "styled-components";

const Hero = styled.div`
    display: flex;
    height: 50vh;
    justify-content: space-evenly;
    width:100%;

    .heroWrap{
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
        h2 {
          width: 50%;
          margin: 5%;
        }
        button{
          font-size: 4rem;
        }
    }
`;

const HowToCards = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  margin-bottom: 5%;
`;

const HowToCard = styled.div`
  width: 18%;
  margin: 1%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #414756;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.4);
  }
  
  h2 {
    font-size: 2rem;
    text-align: center;
    padding: 1%;
    width: 80%;    
  }

  p {
    font-size: 16px;
    text-align: center;
    border-top: 2px solid #414756;
    padding: 3%;
    width: 80%;
    margin: 0 auto;
    
    
  }

  img {
    width: 9em;
    height: 9em;
    background-color: #33918C;
    margin: 0 auto;
  }
`;



function LandingPage(props) {
  // console.log(props);

  useEffect(() => {
    props.getHowTos();
  }, []);

  return (
    <>
      <Hero>
        <div className='heroWrap'>
          <h2>Looking for Great Tutorials? You've come to the right place!</h2>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
        <div className='heroWrap'>
          <h2>Already a Member?</h2>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </Hero>
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
          })}
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
