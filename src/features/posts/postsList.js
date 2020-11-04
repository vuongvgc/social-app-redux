import React from 'react';
import {useSelector} from 'react-redux';
export const PostsList = () => {
    const postsList = useSelector(state => state.posts);
    const renderPost = postsList.map(item => (
        <article className="post-excerpt" id={item.id}>
            <h3>{item.title}</h3>
            <p>{item.content.substring(0,100)}</p>
        </article>
    ));
    return(
        <section>
            <h2>Posts</h2>
            {renderPost}
        </section>
    )
}