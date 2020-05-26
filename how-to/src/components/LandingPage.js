import React from "react";
import { connect } from "react-redux";

import styled from "styled-components";

const LandingSection = styled.section`

    width: 100%;
    display: flex;
    justify-content:space-around;
    flex-flow: wrap;
`

function LandingPage(props) {
  console.log(props);
  return (
    <LandingSection>
      {props.howTos.map((howTo) => {
        return (
          <div key={howTo.id} className="howToCard">
            <h2>{howTo.title}</h2>
            <p>{howTo.description}</p>
          </div>
        );
      })}
    </LandingSection>
  );
}

const mapStateToProps = (state) => {
  return {
    howTos: state.howTos,
  };
};

export default connect(mapStateToProps, {})(LandingPage);
