import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import * as Yup from "yup";

// STYLING ************
const LoginForm = styled.form`
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

const Login = () => {
  const formSchema = Yup.object().shape({
    username: Yup.string().required("Must include a valid username."),
    password: Yup.string()
      .min(4, "Passwords must be at least 4 characters long.")
      .required("Password is required."),
  });

  const history = useHistory();
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post(`https://howtobw.herokuapp.com/api/auth/login`, login)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        history.push("/profile");
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const handleChange = (e) => {
    e.persist();
    Yup.reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    formSchema.isValid(login).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [login]);

  return (
    <div>
      <LoginForm onSubmit={handleSubmit}>
        <h2>User Login</h2>
        <label>
          UserName:
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={login.username}
            onChange={handleChange}
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
            value={login.password}
            onChange={handleChange}
          />
        </label>
        {errors.password.length > 4 ? (
          <p className="error">{errors.password}</p>
        ) : null}
        <button disabled={buttonDisabled}>Submit</button>
      </LoginForm>
    </div>
  );
};

export default Login;
