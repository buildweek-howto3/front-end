import React, { useState, useEffect } from "react";
import { getUserHowTos } from "../actions/howToActions";
import { connect } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth"

function MyHowTos(props) {
  //  console.log(props.userId)
  // console.log(props.userHowTos)
  const [loadingUserHowTos, setLoadingUserHowTos] = useState(false)
  const id = props.userId;
  useEffect(() => {
    props.getUserHowTos(id);
  }, [loadingUserHowTos]);
  console.log(props.userHowTos);


  const editHowTo = (id) => {
    console.log(id)

  }

  const deleteHowTo = (id) => {
    console.log(id)
    axiosWithAuth()
    .delete(`https://howtobw.herokuapp.com/api/posts/${id}`)
    .then(res => {
      console.log(res)
      setLoadingUserHowTos(!loadingUserHowTos)
    })
    .catch(err => {
      console.log(err)
    })
  }
  return (
    <div>
      {props.userHowTos.map((item) => {
        return (
          <div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button onClick={() => deleteHowTo(item.postId)}>Edit</button>
            <button onClick={() => deleteHowTo(item.postId)}>Delete</button>
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
    userHowTos: state.userHowTos,
  };
};

export default connect(mapStateToProps, { getUserHowTos })(MyHowTos);
