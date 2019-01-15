import axios from 'axios';
import { FETCH_USER } from './types'; 

export const fetchUser = () => async dispatch => {
const res = await axios.get('/api/current_user')


dispatch({ type: FETCH_USER,payload: res.data });
};
export const handleToken = token => async dispatch => {
 const res = await axios.post('/api/stripe',token);

 dispatch({ type: FETCH_USER, payload: res.data });
};

//res->await.get (/)pass entire response ..res.data
//handletoken after maing request successfully ..redirectly user to some page with token 


//axios always return promiss
//redux thunk automatically call function and dispatch all the defarent reducer 