import React from "react";

const Post = props => {
    console.log(props);
    const {curPost, posts} = props;

    if (posts[curPost] !== undefined ) {
        if (posts[curPost].media_type === 'image') {return (
    <div className='post'>
        <img src={posts[curPost].hdurl} alt="" title={`APOD Image: ${posts[curPost].title}`}></img>
        <h2><a href={posts[curPost].hdurl}>{posts[curPost].title}</a></h2>
        <b>{posts[curPost].date}</b>
        <p>{posts[curPost].explanation}</p>
    </div>)}
        else if (posts[curPost].media_type === 'video' ){
            const ytID = posts[curPost].url.split('/')[4];
            console.log(posts[curPost].url)
            return (
            <div className='post'>
                <iframe title={posts[curPost]}frameborder="0" scrolling="no" marginheight="0" marginwidth="0" type="text/html" src={`https://www.youtube.com/embed/${ytID}?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0`}></iframe>
                <h2><a href={posts[curPost].hdurl}>{posts[curPost].title}</a></h2>
                <b>{posts[curPost].date}</b>
                <p>{posts[curPost].explanation}</p>
            </div>)}
        }    
    return null;
}

export default Post;