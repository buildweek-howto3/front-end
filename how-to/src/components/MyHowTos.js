import React, { useEffect } from "react";
import { getUserHowTos } from "../actions/howToActions";
import { connect } from "react-redux";

function MyHowTos(props) {
//  console.log(props.userId)
  useEffect(() => {
    props.getUserHowTos(props.userId);
  }, []);
  console.log(props.userHowTos)
  return (
    <div>
      {props.userHowTos.map(item => {
        return (
        <div>{item.title}</div>
        )
      })}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    ...state,
    userId: state.userId,
    userHowTos: state.userHowTos
  };
};

export default connect(mapStateToProps, { getUserHowTos })(MyHowTos);
