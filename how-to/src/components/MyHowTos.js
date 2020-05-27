import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth"

function MyHowTos() {
    const [userHowTos, setUserHowTos] = useState([])
  useEffect(() => {
    axiosWithAuth()
    .get("https://howtobw.herokuapp.com/api/posts/user/:id")
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })
  }, [])
  
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
