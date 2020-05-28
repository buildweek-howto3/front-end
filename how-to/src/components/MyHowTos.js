import React, { useEffect } from "react";
import { getUserHowTos } from "../actions/howToActions";
import { connect } from "react-redux";

function MyHowTos(props) {
  //  console.log(props.userId)
// console.log(props.userHowTos)
  const id = props.userId
  useEffect(() => {
    props.getUserHowTos(id);
  }, []);
  console.log(props.userHowTos);
  return (
    <div>
      {props.userHowTos.map((item) => {
        return (
          <div>
            <h2>{item.title}</h2>
          </div>
        );
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
