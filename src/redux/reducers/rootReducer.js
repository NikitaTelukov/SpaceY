import modeSwitchReducer from '../reducers/modeSwitchReducer';
import getShipsReducer from "./getShipsReducer";

const rootReducer = {
  modeSwitcher: modeSwitchReducer,
  getShips: getShipsReducer
};

export default rootReducer;