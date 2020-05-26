import React, {useState} from 'react';
import styled from 'styled-components';


// STYLING ************
const SearchForm = styled.form`
    margin-top: 10rem;
    margin-bottom: 10rem;
    display:flex;
    justify-content: center;
    align-items:center; 

    label{
        font-size: 1.5rem;
        color: lightgray;
        margin-right: 0.5rem;

        input{
            height: 2rem;
            width: 20rem;
            margin-left: 0.5rem;
            border: 2px solid lightgray;
            background-color:dodgerblue;
            color:lightgray;
            font-size: 1.5rem;
        }
    }
    button{
        background-color: dodgerblue;
        color:lightgray;
        padding: 0.2rem;
        border: 2px solid lightgray;
        font-size: 1.2rem;
        &:hover{
            background-color: lightgray;
            color:dodgerblue;
        }
    }

`;

// CODE *********

const SearchHowTo = () => {
    const [search, setSearch] = useState('');

    const handleSearch = event => {
        setSearch(event.target.value)
        console.log(search.terms);
    }

    const handleSubmit = event => {
        event.preventDefault();
        // setSearch({terms: ''})
       
    }

    return (
        <div>
            <SearchForm onSubmit={event => handleSubmit(event)}>
                <label>
                    Search
                    <input 
                    type='text'
                    placeholder="Search How-To"
                    value={search.terms}
                    onChange={handleSearch}
                    />
                </label>
                <button>Search</button>
            </SearchForm>
        </div>
    )
};

export default SearchHowTo;