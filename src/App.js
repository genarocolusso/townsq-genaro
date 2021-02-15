import GlobalStyles from './GlobalStyles';

import {Container} from './styles';
import Users from './components/users';
import Posts from './components/posts';

const App = () => {
  return (
    <>
      <Container>
        <Posts/>
        <Users/>
      </Container>
      <GlobalStyles />
    </>
  );
};

export default App;
