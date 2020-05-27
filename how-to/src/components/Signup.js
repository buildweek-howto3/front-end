import React, {useState} from 'react';
import styled from 'styled-components';


// STYLING ************
const SignupForm = styled.form`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`;

// CODE *********

const Signup = () => {
    const [signup, setSignup] = useState({
        name: '',
        email: '',
        username: '', 
        password: ''});
    
    const handleName = event => {
        setSignup({...signup, name: event.target.value});
    }    

    const handleEmail = event => {
        setSignup({...signup, email: event.target.value});
    }
    
    const handleUsername = event => {
        setSignup({...signup, username: event.target.value});
    }

    const handlePassword = event => {
        setSignup({...signup, password: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();
        
       
    }

    return (
        <div>
            <SignupForm onSubmit={event => handleSubmit(event)}>
                <label>
                    Name:
                    <input 
                    type='text'
                    name='name'
                    placeholder="Name"
                    value={signup.name}
                    onChange={handleName}
                    />
                </label>
                <label>
                    Email:
                    <input 
                    type='text'
                    name='email'
                    placeholder="Email"
                    value={signup.email}
                    onChange={handleEmail}
                    />
                </label>
                <label>
                    UserName:
                    <input 
                    type='text'
                    name='username'
                    placeholder="Username"
                    value={signup.username}
                    onChange={handleUsername}
                    />
                </label>
                <label>
                    Password:
                    <input 
                    type='password'
                    name='password'
                    placeholder="Password"
                    value={signup.password}
                    onChange={handlePassword}
                    />
                </label>
                    <button>Submit</button>
            </SignupForm>
        </div>
    )
};

export default Signup;