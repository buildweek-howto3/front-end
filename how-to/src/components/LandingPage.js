import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getHowTos } from "../actions/howToActions";
import styled from "styled-components";

const LandingPageStyle = styled.div`
    display: flex;
    height: auto;
    justify-content: space-evenly;
    width:100%;
    margin: 1% auto;

    .landingPageWrap{
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
        p{
          font-size: 1.8rem;
        }
        button{
          width: 100px;
          height: 25px;

        }
    }
`;

const HowToCards = styled.section`
  margin-top: 1%;
  margin-bottom: 1%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-flow: wrap;
`;
const HowToCard = styled.div`
  width: 18em;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  padding: 1%;
  margin-top: 2%;
  border: 2px solid red;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.4);
  }
  
  h2 {
    font-size: 20px;
    text-align: center;
    padding: 1%;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 4%;
    
    
  }

  p {
    font-size: 16px;
    text-align: center;
    border-top: 2px solid red;
    padding: 3%;
    width: 80%;
    margin: 0 auto;
    
    
  }

  img {
    width: 9em;
    height: 9em;
    background-color: navy;
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
      <LandingPageStyle>
        <div className='landingPageWrap'>
          <p>Looking for Great Tutorials? You've come to the right place!</p>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
        <div className='landingPageWrap'>
          <p>Already a Member?</p>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </LandingPageStyle>
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
