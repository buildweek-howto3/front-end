import React, { useState, useEffect } from "react";
import { getUserHowTos } from "../actions/howToActions";
import { connect } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";

function MyHowTos(props) {
  //  console.log(props.userId)
  // console.log(props.userHowTos)
  const [loadingUserHowTos, setLoadingUserHowTos] = useState(false);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    props.getUserHowTos(props.userId);
  }, [loadingUserHowTos, props.howTos]);
  console.log(props.userHowTos);

  const editHowTo = (id) => {
    console.log(id);
    setEditing(!editing);
  };

  const deleteHowTo = (id) => {
    console.log(id);
    axiosWithAuth()
      .delete(`https://howtobw.herokuapp.com/api/posts/${id}`)
      .then((res) => {
        console.log(res);
        setLoadingUserHowTos(!loadingUserHowTos);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <p>Please Create More How Tos!</p>
        {props.userHowTos.map((item) => {
          return (
            <div>
              {editing ? (
                <form>
                  <label>Title:</label>
                  <input placeholder={item.title} />
                  <label>Description:</label>
                  <input placeholder={item.description} />
                </form>
              ) : (
                <div>
                  <h2>Title: {item.title}</h2>
                  <p> Description: {item.description}</p>
                </div>
              )}
  
              <button onClick={() => editHowTo(item.postId)}>Edit</button>
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
    howTos: state.howTos,
    userId: state.userId,
    userHowTos: state.userHowTos,
  };
};

export default connect(mapStateToProps, { getUserHowTos })(MyHowTos);
