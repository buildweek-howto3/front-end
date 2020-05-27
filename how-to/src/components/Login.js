import React, {useState} from 'react';
import styled from 'styled-components';


// STYLING ************
const LoginForm = styled.form`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`;

// CODE *********

const Login = () => {
    const [login, setLogin] = useState({username: '', password: ''});

    const handleUsername = event => {
        setLogin({...login, username: event.target.value});
    }

    const handlePassword = event => {
        setLogin({...login, password: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();
      
       
    }

    return (
        <div>
            <LoginForm onSubmit={event => handleSubmit(event)}>
                <label>
                    UserName:
                    <input 
                    type='text'
                    name='username'
                    placeholder="Username"
                    value={login.username}
                    onChange={handleUsername}
                    />
                </label>
                <label>
                    Password
                    <input 
                    type='password'
                    name='password'
                    placeholder="Password"
                    value={login.password}
                    onChange={handlePassword}
                    />
                </label>
                <button>Submit</button>
            </LoginForm>
        </div>
    )
};

export default Login;
