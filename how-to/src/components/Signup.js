import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
// STYLING ************
const SignupForm = styled.form`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  h2{
    margin-bottom: 3%;
  }
  label {
    font-size: 2.5rem;
  }
  input {
    margin: 3% 0;
    background-color: #33918c;
    border: 2px solid #414756;
    height: 3.5rem;
    color: #dcf6f3;
    ::placeholder {
        color: #dcf6f3;
      }
  }
  button {
    background-color: #414756;
    color: #dcf6f3;
    font-size: 2rem;
    margin: 3%;
    padding: 1.5%;
    :disabled{
      background:#c0c0c0;
      color:#e8e8e8;
    }
  }
`;

// CODE *********

const initialSignupInputs = {
  username: "",
  password: "",
};

const Signup = () => {
  const { push } = useHistory();
  const [signup, setSignup] = useState(initialSignupInputs);

  const formSchema = Yup.object().shape({
    username: Yup.string().required("Must include a valid username."),
    password: Yup.string()
      .min(4, "Passwords must be at least 4 characters long.")
      .required("Password is required."),
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const captureSignup = (event) => {
    event.persist();
    Yup.reach(formSchema, event.target.name)
      .validate(event.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [event.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [event.target.name]: err.errors[0],
        });
      });
    setSignup({
      ...signup,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    formSchema.isValid(signup).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [signup]);

  const registerUser = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post("https://howtobw.herokuapp.com/api/auth/register", signup)
      .then((res) => {
        console.log(res.data);
        push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <SignupForm onSubmit={registerUser}>
        <h2>User Signup</h2>

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
        {errors.username.length > 0 ? (
          <p className="error">{errors.username}</p>
        ) : null}
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
        {errors.password.length > 4 ? (
          <p className="error">{errors.password}</p>
        ) : null}
        <button disabled={buttonDisabled}>Submit</button>
      </SignupForm>
    </div>
  );
};

export default Signup;
