import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

// STYLING ************
const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

// CODE *********

const initialSignupInputs = {
  username: "",
  password: "",
};

const Signup = () => {
  const [signup, setSignup] = useState(initialSignupInputs);

  const captureSignup = (event) => {
    setSignup({ 
        ...signup, 
        [event.target.name]: event.target.value 
    });
  };

  const registerUser = (event) => {
    event.preventDefault();
    axios.post("https://howtobw.herokuapp.com/api/auth/register", signup)
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })
  };

  return (
    <div>
      <SignupForm onSubmit={registerUser}>
        <label>
          UserName:
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={signup.username}
            onChange={captureSignup}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={signup.password}
            onChange={captureSignup}
          />
        </label>
        <button>Submit</button>
      </SignupForm>
    </div>
  );
};

export default Signup;
