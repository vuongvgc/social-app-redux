import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './postsSlice';

export const AddPostForm = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userID, setUserID] = useState('');

    const dispatch = useDispatch();
    const users = useSelector(state => state.users)

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);
    const onAuthorChanged = e => setUserID(e.target.value);

    const onSavePostClicked = () => {
        if(canSave){
            dispatch(postAdded(title, content, userID));
            setTitle('');
            setContent('');
        }
    }
    const canSave = Boolean(userID) && Boolean(title) && Boolean(content);
    const usersOption = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));

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
                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userID} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOption}
                </select>
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
