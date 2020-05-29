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
  border: 2px solid navy;
  border-radius: 1rem;
  margin: 1%;
`;

const UserHowToContainer = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  overflow: scroll;

  .cardContainer {
    width: 100%;
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
  }
`;

function MyHowTos(props) {
  const [loadingUserHowTos, setLoadingUserHowTos] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editInputs, setEditInputs] = useState({
    title: "",
    description: "",
    materials: "",
    instructions: ""
  });
  const [userId, setUserId] = useState("");

  useEffect(() => {
    props.getUserHowTos(props.userId);
  }, [loadingUserHowTos, editing]);
  // console.log(props.userHowTos);

  const editHowTo = (itemTitle, itemDescription, itemMaterials, itemInstructions, itemId) => {
    // console.log(id);
    //only turn on editing for a single item
    setEditing(true);
    setEditInputs({
      ...editInputs,
      title: itemTitle,
      description: itemDescription,
      materials: itemMaterials,
      instructions: itemInstructions
    });
    setUserId(itemId);
  };

  const changeHowTo = (e) => {
    setEditInputs({
      ...editHowTo,
      [e.target.name]: e.target.value,
    });
  };
  const submitChangedHowTo = () => {
    axiosWithAuth()
      .put(`https://howtobw.herokuapp.com/api/posts/${userId}`, editInputs)
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
        // console.log(res);
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
                <p> Materials: {item.materials}</p>
                <p> Instructions: {item.instructions}</p>
                <button
                  onClick={() =>
                    editHowTo(item.title, item.description, item.materials, item.instructions, item.postId)
                  }
                >
                  Edit
                </button>
                <button onClick={() => deleteHowTo(item.postId)}>Delete</button>
              </UserHowToCard>
            );
          })}
      </div>
      {editing && (
        <form onSubmit={() => submitChangedHowTo()}>
          <label htmlFor="title">Title:</label>
          <input name="title" value={editInputs.title} onChange={changeHowTo} />
          <label htmlFor="description">Description:</label>
          <input
            name="description"
            value={editInputs.description}
            onChange={changeHowTo}
          />
          <label htmlFor="materials">Materials:</label>
          <input
            name="materials"
            value={editInputs.materials}
            onChange={changeHowTo}
          />
          <label htmlFor="instructions">Instructions:</label>
          <input
            name="instructions"
            value={editInputs.instructions}
            onChange={changeHowTo}
          />
          <button>Submit</button>
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
