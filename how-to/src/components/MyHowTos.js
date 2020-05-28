import React, { useState, useEffect } from "react";
import { getUserHowTos } from "../actions/howToActions";
import { connect } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";

const UserHowToCard = styled.div`
  width: 20%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  height: 60vh;
  border: 2px solid navy;
  border-radius: 1rem;
  form {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
`;
const UserHowToContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  h2 {
    top: 0;
    margin-bottom: 5%;
  }
  .cardContainer {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
`;
function MyHowTos(props) {
  //  console.log(props.userId)
  // console.log(props.userHowTos)
  const [loadingUserHowTos, setLoadingUserHowTos] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editInputs, setEditInputs] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    props.getUserHowTos(props.userId);
  }, [loadingUserHowTos, editing]);
  console.log(props.userHowTos);

  const editHowTo = (itemTitle, itemDescription) => {
    // console.log(id);
    //only turn on editing for a single item
    setEditing(!editing);
    setEditInputs({
      ...editInputs,
      title: itemTitle,
      description: itemDescription
    })
  };

  const changeHowTo = (e) => {
    setEditInputs({
      ...editHowTo,
      [e.target.name]: e.target.value,
    });
  };
  const submitChangedHowTo = (id) => {
    const changedHowTo = {
      title: editInputs.title,
      description: editInputs.description,
    };
    axiosWithAuth()
      .put(`https://howtobw.herokuapp.com/api/posts/${id}`, changedHowTo)
      .then((res) => {
        console.log(res);
        setLoadingUserHowTos(!loadingUserHowTos);
      })
      .catch((err) => {
        console.log(err);
      });
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
    <UserHowToContainer>
      <h2>Please Create More How Tos!</h2>
      <div className="cardContainer">
        {props.userHowTos &&
          props.userHowTos.map((item) => {
            return (
              <UserHowToCard>
                <h2>Title: {item.title}</h2>
                <p> Description: {item.description}</p>
                <button onClick={() => editHowTo(item.title, item.description)}>
                  Edit
                </button>
                <button onClick={() => deleteHowTo(item.postId)}>Delete</button>
              </UserHowToCard>
            );
          })}
      </div>
      {editing && (
        <form>
          <label htmlFor="title">Title:</label>
          <input 
          name="title"
          value={editInputs.title}
          />
          <label htmlFor="description">Description:</label>
          <input 
          name="description"
          value={editInputs.description}
          />
        </form>
      )}
    </UserHowToContainer>
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
