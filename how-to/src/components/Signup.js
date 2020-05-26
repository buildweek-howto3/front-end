import React, { useState } from "react";

const Register = () => {
  const [registerInput, setRegisterInput] = useState("");

  const handleRegisterInput = (event) => {};

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
        <h2>Register</h2>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          value={registerInput}
          onChange={handleRegisterInput}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          name="password"
          value={registerInput}
          onChange={handleRegisterInput}
        />

        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
