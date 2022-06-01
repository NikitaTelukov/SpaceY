import {GET_SHIPS, LOADING_SHIPS, MODE_SWITCHER} from "./types";

export const toggleMode = () => dispatch => {
  dispatch({type: MODE_SWITCHER})
}

export const showLoader = () => dispatch => {
  dispatch({type: LOADING_SHIPS})
}

export const getShipsList = (data) => async dispatch => {
  dispatch({type: GET_SHIPS, payload: data})
}