import React, { useState, useEffect } from "react";

function MyHowTos(props) {
    const [userHowTos, setUserHowTos] = useState([])
 
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

export default MyHowTos
