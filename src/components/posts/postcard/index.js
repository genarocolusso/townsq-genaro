import React from 'react';
import {useDispatch} from 'react-redux';
import { Container } from './styles';
 
const PostCard = ({ post ,onClick }) => {

 

  return (
    <Container onClick={onClick }  >
      <h2>{post.title}</h2>
      
    </Container>
  );
};

export default PostCard;
