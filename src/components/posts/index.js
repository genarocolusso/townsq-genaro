import React from 'react';
import { posts } from '../../mock/apimock';

import {  Container} from './styles'
import  PostCard   from './postcard'
const Posts = () => {
  return (
    <Container> 
    {posts.map(x => (
    <PostCard key={x.id} post={x}/> 
  ))
  }
  </Container>
  )
};

export default Posts;
