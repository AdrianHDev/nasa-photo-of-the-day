import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const StyledResults = styled.div` 
    background-color: white;
    z-index: 1;
    position: absolute;
    color: black;
    padding: 5px 8px;
    display: list;
`

const StyledResult = styled.div`
    border: 1px black solid;
    margin-top: -1px;
    padding: 10px 3px;
`

const Results = props => {
    const { setSearchTerm, results, setCurPost, setHideResults, hideResults } = props
    
    if (results[0] !== undefined ){
        if (results[0][0] !== undefined ) {
            let style = {}
        if (hideResults === true || results.length === 10) {
            style = {
                display:'none',
        }} else {
            style ={
                display:'block',
            }
        };
        return (
            <StyledResults style={style}>
                {results.map((x) => {
                    const post = x[0]
                    const index = x[1]
                    return <StyledResult onClick={(ev) => {
                        setCurPost(index)
                        setHideResults('none')
                        setSearchTerm('');
                    }} 
                    onMouseOver={(ev) => {
                        ev.target.style.background = '#6ff5ff';
                    }}
                    onMouseLeave={(ev)=> {
                        ev.target.style.background = "";
                    }}
                    key={post.title} id={`result-${post.title}`}>{post.title}</StyledResult>
                })}
            </StyledResults>
        )};
    }
        
    return null
}

export default Results