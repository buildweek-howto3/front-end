import React, { useState } from "react";
import { connect } from "react-redux";
import { createHowTo } from "../actions/howToActions"

const initialNewHowTo = {
  title: "",
  description: "",
};

function CreateHowTo(props) {
//   console.log(props);
  const [newHowToInputs, setNewHowToInputs] = useState(initialNewHowTo);

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
        description: newHowToInputs.description
      }
      props.createHowTo(newHowTo)
      setNewHowToInputs(initialNewHowTo)
  }


  return (
    <form onSubmit={addHowTo}>
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
      <button>Submit</button>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    howTos: state.howTos,
  };
};

export default connect(mapStateToProps, {createHowTo})(CreateHowTo);
