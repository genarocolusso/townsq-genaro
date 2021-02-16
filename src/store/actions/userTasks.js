/* eslint-disable no-console */
import axios from 'axios';
import { STORE_USERS, SELECT_USER } from './actionsType';

// pasted URL right in the .get because it's just to simple. could have an ENV for that tho.
export const getallusers = () => dispatch =>
  axios
    .get('http://jsonplaceholder.typicode.com/users')

    .then(({ data }) => {
      console.log(data);

      dispatch({
        type: STORE_USERS, //
        payload: data,
      });
    });

export const selectuser = userid => dispatch =>
  dispatch({
    type: SELECT_USER,
    payload: userid,
  });
