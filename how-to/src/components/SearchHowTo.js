import React, { useState } from "react";
import styled from "styled-components";

// STYLING ************
const SearchForm = styled.form`
  margin: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    font-size: 2rem;
    color: lightgray;

    input {
      height: 4rem;
      width: 25rem;
      margin: 1rem;
      border: 2px solid #dcf6f3;
      background-color: #33918c;
      color: #dcf6f3;
      font-size: 2rem;

      ::placeholder {
        color: #dcf6f3;
      }
    }
  }
  button {
    background-color: #33918c;
    color: #dcf6f3;
    padding: 0.2rem 1rem;
    border: 2px solid #dcf6f3;
    border-radius: 1rem;
    font-size: 2rem;

    &:hover {
      background-color: #dcf6f3;
      color: #414756;
    }
  }
`;

// CODE *********

const SearchHowTo = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
    console.log(search.terms);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setSearch({terms: ''})
  };

  return (
    <div>
      <SearchForm onSubmit={(event) => handleSubmit(event)}>
        <label>
          Search:
          <input
            type="text"
            placeholder="Search How-To"
            value={search.terms}
            onChange={handleSearch}
          />
        </label>
        <button>GO!</button>
      </SearchForm>
    </div>
  );
};

export default SearchHowTo;
