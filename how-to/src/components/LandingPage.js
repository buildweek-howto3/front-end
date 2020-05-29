import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getHowTos } from "../actions/howToActions";
import styled from "styled-components";
import coverPhoto from'../assets/tinycoverphoto3.jpg';

const Hero = styled.div`
    display: flex;
    height: 50vh;
    justify-content: space-evenly;
    align-items:center;
    width:100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${coverPhoto});
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: inset 0 0 5px 5px #dcf6f3;
      @media (max-width: 900px){
        display:flex;
        flex-direction:column;
        justify-content:space-evenly;
        align-items: center;
  
      }

    .heroWrap{
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: rgb(252,252,252); 
      background-color: rgba(252,252,252, 0.4); 
      height: 25rem;
      border: 10px solid white;
      @media (max-width: 580px){
        margin-top:2%;
        border: 5px solid white;
        height: 16rem;

      }
      @media (max-width: 900px){
        margin-top:1%;
        margin-bottom:1%;
        border: 5px solid white;
        height:22rem;
      }

        h2 {
          margin: 5% 5% 0 5%;
          font-size: 3rem;
          @media (max-width: 580px){
            font-size: 2rem;

          }
          @media (max-width: 900px){
            font-size: 2.5rem;

          }

        }
        h3 {
          margin-top: 0;
          font-size: 2rem;
          @media (max-width: 580px){
            font-size: 1.5rem;

          }
          @media (max-width: 900px){
            font-size: 1.8rem;

          }
        }
        button{
          margin-top: 5%;
          width: 17rem;
          height: 5.5rem;
          background-color: #DCF6F3;
          color: #414756;
          border: 1px solid #414756;
          border-radius: 5px;
          font-size: 4rem;
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
          transition: 0.3s;
          &:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.4);
          }
          @media (max-width: 580px){
            font-size: 2rem;
            width: 10rem;
            height: 3rem;

          }
          @media (max-width: 900px){
            font-size: 2rem;
            width: 12rem;
            height: 5rem;

          }
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
          <h2>Looking for Great Tutorials?</h2>
            <h3>You've come to the right place!</h3>
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
