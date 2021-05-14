import React from 'react';
import styled from 'styled-components';
import Post from './Post';
import './Posts.css';

const StyledPosts = styled.div`
    max-height: 85vh;
    margin: 0 0.25vw 0 0.25vw;
    padding: 5px 0.25vw 0 0.25vw;
    overflow: auto;
    background-color: cadetblue;
`

const StyledPostTitle = styled.h2`
    font-size: 1.35rem;
    border: 3px red solid;
    padding: 10px;
    margin-top: -3px;
    background-color: darkturquoise;
`

const StyledPostMenu = styled.div`
    width: 15%;
    margin-right: 5%;
    display: inline-block;
    vertical-align:middle;
`

const Posts = (props) => {
    const { posts, curPost, setCurPost } = props;


    console.log(posts, curPost);
    return (
        <StyledPosts>
            <StyledPostMenu>    
                {posts.map((post, index) => {
                    return(<StyledPostTitle onClick={() => {
                        setCurPost(index);
                    }} key={post.title}>{post.title}</StyledPostTitle>);
                })}
            </StyledPostMenu>
            <Post posts={posts} curPost={curPost}></Post>
        </StyledPosts>
    )
}
export default Posts;