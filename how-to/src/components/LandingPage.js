import React from "react";
import { connect } from "react-redux";

function LandingPage(props) {
  console.log(props);
  return (
    <section>
      {props.howTos.map((howTo) => {
        return (
          <div className="howToCard">
            <h2>{howTo.title}</h2>
            <p>{howTo.description}</p>
          </div>
        );
      })}
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    howTos: state.howTos,
  };
};

export default connect(mapStateToProps, {})(LandingPage);
