import React from 'react';
import { useSelector } from 'react-redux';
export const PostAuthor = ({ userID }) => {
    const author = useSelector(state => (
        state.users.find(user => user.id === userID)
    ))
    return(
       <span> {author ? author.name : 'Unknown author'}</span>
    )
}