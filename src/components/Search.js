import React from 'react';
import styled from 'styled-components';

const SearchConatiner = styled.div`
  width: 100%;
  height: 2rem;
  padding: 0 0.5rem;
  box-sizing: border-box;
`;

const SearchBox = styled.input`
  width: 100%;
  font-size: 18px;
  box-sizing: border-box;
`;

const Search = ({searchHandler}) => {
  return(
    <SearchConatiner>
      <SearchBox type="text" placeholder="Search.." 
        onChange={(e) => searchHandler(e.currentTarget.value)}
      />
    </SearchConatiner>
  );
};
export default Search;