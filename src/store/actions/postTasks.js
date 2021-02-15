/* eslint-disable no-console */
import axios from 'axios';
import { STORE_POSTS, EDIT_POST } from './actionsType';

// pasted URL right in the .get because it's just to simple. could have an ENV for that tho.
export const getallposts = () => dispatch =>
  axios
    .get('http://jsonplaceholder.typicode.com/posts')

    .then(({ data }) => {
      console.log(data);

      dispatch({
        type: STORE_POSTS, //
        payload: data,
      });
    });

export const editposts = data => dispatch =>
  dispatch({
    type: EDIT_POST,
    payload: data,
  });
