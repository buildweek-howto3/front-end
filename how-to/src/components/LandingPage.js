import React from "react";
import { connect } from "react-redux";

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
function LandingPage(props) {
  // console.log(props);
  return (
    <div>
      <div>
        <h2>Sign UP</h2>
      </div>
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
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    howTos: state.howTos,
  };
};

export default connect(mapStateToProps, {})(LandingPage);
