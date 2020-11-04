import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postUpdated } from './postsSlice';
export const EditPostForm = ({ match }) => {
    const { postId } = match.params;
    const post = useSelector(state => 
        state.posts.find(post => post.id === postId)
    )

    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);
    
    const dispatch = useDispatch();
    const history = useHistory();

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);
    const onSavePostUpdated = () => {
        if(title && content){
            dispatch(postUpdated({id: postId, title: title, content: content}));
            history.push(`/post/${postId}`)
        }
    }  
    return(
        <section>
            <h2>Edit Form</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    placeholder="What's on your mind?"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea 
                    id="postContent"
                    name="content"
                    value={content}
                    onChange={onContentChanged}
                />
            </form>
            <button className="button" onClick={onSavePostUpdated}>
                Save Post
            </button>
        </section>
    )
}