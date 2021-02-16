import { STORE_USERS, SELECT_USER } from '../actions/actionsType';

const INITIAL_STATE = {
  userselected: {}, 
  allUsers: []
};

const usersReducer = (state = INITIAL_STATE, action) => {
  if (action.type === STORE_USERS) {
    return { ...state, allUsers: action.payload };
    // overrides  state
  }

  if (action.type === SELECT_USER) {
    return { ...state,  userselected :  state.allUsers.filter(user=> user.id === action.payload )     };
    // overrides  state
  }

  return state;
};

export default usersReducer;
