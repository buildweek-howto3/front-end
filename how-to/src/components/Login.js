import React, { useState } from "react";

const initialLogin = {
    username: "",
    password: "",
}

const Login = () => {
  const [loginInputs, setLoginInputs] = useState(initialLogin);

  const handleLoginInput = (event) => {
    setLoginInputs({
        loginInputs,
        [event.target.name]: event.target.value
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
        <h2>Login</h2>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>Username:</label>
        <input type="text" name="username" value={loginInputs.username} onChange={handleLoginInput} />
        <label>Password:</label>
        <input type="text" name="password" value={loginInputs.password} onChange={handleLoginInput} />

        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
