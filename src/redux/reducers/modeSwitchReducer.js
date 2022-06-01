import {DARK_MODE, LIGHT_MODE} from "../colors";
import {MODE_SWITCHER} from "../actions/types";

const initialState = {
  isDarkMode: true,
  ...DARK_MODE
}

export default (state= initialState, action)=> {
  switch (action.type) {
    case MODE_SWITCHER:
      const isDarkMode = !state.isDarkMode
      const colorObject = isDarkMode ? DARK_MODE : LIGHT_MODE
      return {...state, isDarkMode, ...colorObject}
    default:
      return state
  }
}