import React, {useState, useEffect} from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
    const { posts, curPost, setCurPost } = props;


    console.log(posts, curPost);
    return (
        <div className="posts">
            <div className="posts-selector">    
                {posts.map((post, index) => {
                    return(<h2 onClick={() => {
                        setCurPost(index);
                    }} key={post.title}>{post.title}</h2>);
                })}
            </div>
        <Post posts={posts} curPost={curPost}></Post>
        </div>
    )
}
export default Posts;