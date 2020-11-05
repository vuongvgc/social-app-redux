import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { postAdded } from './postsSlice';

export const AddPostForm = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);

    const onSavePostClicked = () => {
        if(title && content){
            dispatch(
                postAdded({
                title: title,
                content: content
            }))
        }
        setTitle('');
        setContent('');
    }
    return(
        <section>
            <h2>Add New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="title"
                    value={title}
                    onChange={onTitleChanged} />
                <label htmlFor="postContent">Post Content:</label>
                <textarea
                    id="postContent"
                    name="content"
                    value={content}
                    onChange={onContentChanged}
                />
                <button type="button" onClick={onSavePostClicked}>Save Posts</button>
            </form>
        </section>
    )

}
