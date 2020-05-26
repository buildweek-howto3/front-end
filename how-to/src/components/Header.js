import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SearchHowTo from './SearchHowTo'

// STYLING ************
const HeaderSection = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background-color: dodgerblue;

    h1 {
        padding-left: 2rem;
    }
    .navLinks {
        padding-right: 1rem;
        display:flex;
        justify-content: space-evenly;
        align-items: center;
        a{
            margin-right:1rem;
            border: 2px solid lightgray;
            border-radius: 10px;
            padding: 0.3rem;
            &:hover{
                background-color:lightgray;
                color:dodgerblue;
            }
        }
    }
`;

// CODE *********

const Header = () => {

    return (
        <HeaderSection>
            <Link to='/'><h1>Title</h1></Link>
            <SearchHowTo />
            <div className='navLinks'> 
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Signup</Link>
             </div>
        </HeaderSection>
    )
}

export default Header