import React, { useEffect, useState } from "react";

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
            <div style={style} className='results'>
                {results.map((x) => {
                    const post = x[0]
                    const index = x[1]
                    return <div onClick={(ev) => {
                        setCurPost(index)
                        setHideResults('none')
                        setSearchTerm('');
                    }} key={post.title} id={`result-${post.title}`}>{post.title}</div>
                    
                })};
                </div>
                )};
            }
        
    return null
}

export default Results