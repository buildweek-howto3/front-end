import React, { useState, useEffect } from "react";
import { getUserHowTos } from "../actions/howToActions"; 
import { connect } from 'react-redux';

function MyHowTos(props) {
 
    useEffect(() => {
      props.getUserHowTos(props.userId)
    },[]) 
  
    return (
    <div>
      <h2>example how to</h2>
      <p>description</p>
      <button>add step</button>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    userId: state.userId
  }
}

export default connect(mapStateToProps, { getUserHowTos })(MyHowTos)


