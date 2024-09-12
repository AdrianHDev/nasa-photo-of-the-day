import React, { useEffect, useState } from "react";
import Results from "./Results";
import styled from 'styled-components';

const StyledSearchBar = styled.div`
display: flex;
justify-content: space-between;
`

const StyledSearchBarImg = styled.img`
  width:200px;
`

const SearchForm = styled.div`
  position:relative;
`

const SearchBar = (props) => {
    const {posts, setCurPost} = props;
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([{}, 0]);
    const [hideResults, setHideResults] = useState('none');

    const changeEv = event => {
        event.persist();
        setSearchTerm(event.target.value);
    }
    useEffect(() => {
        const newArr = posts.map((post, index) => {
            return(JSON.stringify(post).toLowerCase().includes(searchTerm.toLowerCase()) ? [post, index] : 0)
          }).filter(post => {
            return(post !== 0)
        })
        setSearchResults(s => {
          return [...newArr];
        });


      }, [searchTerm, posts])

    useEffect(() => {
      if (searchResults.length !== 10 && searchResults.length !== 0) {
        setHideResults('list');
      } else { setHideResults('none');}
    }, [searchResults])


    return (
    <StyledSearchBar>
      <StyledSearchBarImg alt="" title="APOD Logo" src='https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/90/73/2f/90732f8e-c419-a63c-4033-f560a072c3ef/contsched.oyszacnp.lsr/1280x768bb.png'/>
      <SearchForm className="search-form">
        <input
          type="text"
          placeholder="Search Query Here"
          value={searchTerm}
          onChange={changeEv}
        />
      <Results setSearchTerm={setSearchTerm} hideResults={`${String(hideResults)}`} setHideResults={setHideResults} setCurPost={setCurPost} results={searchResults}></Results>
      </SearchForm>
    </StyledSearchBar>
    )
}

export default SearchBar;