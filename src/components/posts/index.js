import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, FullPost } from './styles';
import { selectuser } from '../../store/actions/userTasks';
import { editposts } from '../../store/actions/postTasks';

import PostCard from './postcard';
const Posts = props => {
  const posts = props.posts;
  const allUser = useSelector(state => state.users);
  const userselectedpost =
    allUser.userselected !== undefined ? allUser.userselected[0] : null;
  const [fullpost, setFullpost] = useState('');
  const dispatch = useDispatch();

  const getfullpost = x => {
    console.log('hi');
    dispatch(selectuser(x.userId));
    setFullpost(x);
  };

  return (
    <>
      <Container>
        {posts.map(x => (
          <PostCard key={x.id} post={x} onClick={() => getfullpost(x)} />
        ))}
        {userselectedpost ? (
          <FullPost>
            <input type='text' value={fullpost.title} onChange={(e)=> setFullpost({...fullpost, title: e.target.value})} />
            <textarea  
            rows="8" cols="33" value={fullpost.body} onChange={(e)=> setFullpost({...fullpost, body: e.target.value})} />
            
            <hr/>
            <p> {userselectedpost.name}</p>
            <button onClick={()=> dispatch(editposts(fullpost))}> Edit post</button>
          </FullPost>
        ) : (
          ''
        )}
      </Container>
    </>
  );
};

export default Posts;
