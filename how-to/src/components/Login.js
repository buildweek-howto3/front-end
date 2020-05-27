import React, {useState} from 'react';
import styled from 'styled-components';
import { axiosWithAuth } from '../utils/axiosWithAuth';


// STYLING ************
const LoginForm = styled.form`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`;

// CODE *********

const Login = () => {
    const [login, setLogin] = useState({
        username: '', 
        password: ''
    });

    const handleChange = event => {
        setLogin({...login, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth().post(`https://howtobw.herokuapp.com/api/auth/login`, login)
        .then(res => {
            console.log(res.data.token);
            localStorage.setItem('token', res.data.token);
            history.pushState('/profile')

        })
        .catch(err => {
            console.log('error', err);
        })
        
        
       
    }

    return (
        <div>
            <LoginForm onSubmit={handleSubmit}>
                <label>
                    UserName:
                    <input 
                    type='text'
                    name='username'
                    placeholder="Username"
                    value={login.username}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Password
                    <input 
                    type='password'
                    name='password'
                    placeholder="Password"
                    value={login.password}
                    onChange={handleChange}
                    />
                </label>
                <button>Submit</button>
            </LoginForm>
        </div>
    )
};

export default Login;
