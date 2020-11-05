import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PostAuthor } from './PostAuthor';
import { TimeAgo } from './TimeAgo';
export const PostsList = () => {
    const postsList = useSelector(state => state.posts);
    const renderPost = postsList.map(item => (
        <article className="post-excerpt" id={item.id}>
            <h3>{item.title}</h3>
            <TimeAgo timeStamp={item.date} />
            <PostAuthor userID={item.id}/>
            <p className="post-content">{item.content.substring(0,100)}</p>
            <Link to={`/posts/${item.id}`}  className="button muted-button">
                View Post
            </Link>
        </article>
    ));
    return(
        <section>
            <h2>Posts</h2>
            {renderPost}
        </section>
    )
}