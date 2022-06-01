import {GET_SHIPS, LOADING_SHIPS, ERROR_SHIPS} from "../actions/types";

const initialState = {
  ships: {},
  loading: false,
  error: ""
}

export default (state= initialState, action)=> {
  switch (action.type) {
    case LOADING_SHIPS:
      return {...state, loading: true}
    case GET_SHIPS:
      return {...state, loading: false, ships: action.payload}
    case ERROR_SHIPS:
      return {...state, error: "Error", loading: false}
    default:
      return state
  }
}