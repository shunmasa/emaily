import { FETCH_USER } from "../actions/types";


export default function(state = null, action) {
 console.log(action);
switch (action.type){
 case FETCH_USER:
 return action.payload || false;
  default:   
   return state;
 }   
}

//default state return null and back fetch _user ...action .payload
//action some login active ..but logout noone there so false ...''