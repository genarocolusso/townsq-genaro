import React from 'react';

import { Container } from './styles';
const PostCard = ({ post }) => {
  return (
    <Container>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </Container>
  );
};

export default PostCard;
