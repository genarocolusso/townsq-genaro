import { STORE_POSTS, EDIT_POST  } from '../actions/actionsType';

const INITIAL_STATE = {
  allposts: [], 
};

const postReducer = (state = INITIAL_STATE, action) => {
  if (action.type === STORE_POSTS) {
    return { ...state, allposts: action.payload };
    // overrides  state
  }

  if (action.type === EDIT_POST) {
    console.log(action.payload)
    return { ...state,  allposts : state.allposts.map( post => 
      (post.id === action.payload.id &&  action.payload.title.trim().length>0) ? action.payload : post
    ) };
    // overrides  state
  }

  return state;
};

export default postReducer;
