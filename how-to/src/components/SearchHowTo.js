import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { searchHowTos } from "../actions/howToActions"
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

const SearchHowTo = (props) => {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredHowTos = props.howTos.filter(howTo => {
      return howTo.title.toLowerCase().includes(search)
    })
    props.searchHowTos(filteredHowTos)
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

const mapStateToProps = state => {
  return {
    ...state,
    howTos: state.howTos
  }
}

export default connect(mapStateToProps, {searchHowTos})(SearchHowTo);
