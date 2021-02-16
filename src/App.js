import React, { useEffect } from 'react';
import GlobalStyles from './GlobalStyles';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from './styles'; 
import Posts from './components/posts';
import Logo from './assets/townsq-logo.svg'
import { getallposts } from './store/actions/postTasks';
import { getallusers } from './store/actions/userTasks';

const App = () => {
  const dispatch = useDispatch();
  const dispatchuser = useDispatch();
  const allPost = useSelector(state => state.posts.allposts );
  const allUser = useSelector(state => state.users);

  useEffect(() => {
    dispatch(getallposts());
    dispatchuser(getallusers());
  }, [dispatch,dispatchuser]);

  return (
    <>
      
        <Container>
          <img src={Logo} alt='townsq'/>
          <Posts posts={allPost} />
          
        </Container>
      

      <GlobalStyles />
    </>
  );
};

export default App;
