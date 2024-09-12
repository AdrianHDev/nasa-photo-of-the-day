import React from "react";
import styled from "styled-components";

const StyledPost = styled.div`
    display: inline-block;
    padding: 2rem;
    vertical-align: top;
    width: 80%;
    text-align: center;
`
const StyledPostTitle = styled.h2`
    font-size: 2rem;
`

const StyledPostVideo = styled.iframe`
    width:45vw;
    height:50vh;
    margin-bottom: 50px;
`

const StyledPostImg = styled.img`
    height: 50vh;
    margin-bottom:50px;
`



const Post = props => {
    console.log(props);
    const {curPost, posts} = props;

    if (posts[curPost] !== undefined ) {
        if (posts[curPost].media_type === 'image') {return (
            <StyledPost>
                <StyledPostImg src={posts[curPost].hdurl} alt="" title={`APOD Image: ${posts[curPost].title}`}></StyledPostImg>
                <StyledPostTitle><a href={posts[curPost].hdurl}>{posts[curPost].title}</a></StyledPostTitle>
                <b>{posts[curPost].date}</b>
                <p>{posts[curPost].explanation}</p>
            </StyledPost>)}
        else if (posts[curPost].media_type === 'video' ){
            
            const ytID = posts[curPost].url.split('/')[4];
            console.log(posts[curPost].url)

            return (
            <StyledPost>
                <StyledPostVideo title={posts[curPost]}frameborder="0" scrolling="no" marginheight="0" marginwidth="0" type="text/html" src={`https://www.youtube.com/embed/${ytID}?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0`}></StyledPostVideo>
                <StyledPostTitle><a href={posts[curPost].hdurl}>{posts[curPost].title}</a></StyledPostTitle>
                <b>{posts[curPost].date}</b>
                <p>{posts[curPost].explanation}</p>
            </StyledPost>)}
        }    
    return null;
}

export default Post;