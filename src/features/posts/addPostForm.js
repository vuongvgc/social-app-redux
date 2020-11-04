import React, { useState } from 'react';
export const AddPostForm = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
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
                <button type="button">Save Posts</button>
            </form>
        </section>
    )

}
