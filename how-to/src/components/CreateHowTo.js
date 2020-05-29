import React, { useState } from "react";
import { connect } from "react-redux";
import { createHowTo } from "../actions/howToActions"
import { useHistory } from "react-router-dom"
import styled from "styled-components"

const CreateForm = styled.form`

  height: 80vh;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  h2 {
    font-size: 6rem;
    text-decoration: underline;
  }
  label, input {
    font-size: 4rem;
    width: 50%;
    margin-bottom: 1%;
  }
  button {
    padding: 1rem;
    font-size: 4rem;
    border-radius: 1rem;
    background-color: skyblue;
    margin-top: 1%;
  }

`


const initialNewHowTo = {
  title: "",
  description: "",
  materials: "",
  instructions: ""
};

function CreateHowTo(props) {
  const { push } = useHistory()
//   console.log(props);
  const [newHowToInputs, setNewHowToInputs] = useState(initialNewHowTo);
  const [edit, setEdit] = useState(false)
  const captureNewHowTo = (e) => {
    setNewHowToInputs({
      ...newHowToInputs,
      [e.target.name]: e.target.value,
    });
  };

  const addHowTo = (e) => {
      e.preventDefault()
      const newHowTo = {
        title: newHowToInputs.title,
        description: newHowToInputs.description,
        materials: newHowToInputs.materials,
        instructions: newHowToInputs.instructions
      }
      props.createHowTo(newHowTo)
      setNewHowToInputs(initialNewHowTo)
      push("/profile/my-how-tos")
  }


  return (
    <CreateForm onSubmit={addHowTo}>
      <h2>New How To</h2>
      <label htmlFor="title">Title:</label>
      <input
        name="title"
        value={newHowToInputs.title}
        onChange={captureNewHowTo}
      />
      <label htmlFor="description">Description:</label>
      <input
        name="description"
        value={newHowToInputs.description}
        onChange={captureNewHowTo}
      />
      <label htmlFor="materials">Materials:</label>
      <input
        name="materials"
        value={newHowToInputs.materials}
        onChange={captureNewHowTo}
      />
      <label htmlFor="instructions">Instructions:</label>
      <input
        name="instructions"
        value={newHowToInputs.instructions}
        onChange={captureNewHowTo}
      />
      <button>Submit</button>
    </CreateForm>
  );
}

const mapStateToProps = (state) => {
  return {
    howTos: state.howTos,
  };
};

export default connect(mapStateToProps, {createHowTo})(CreateHowTo);
