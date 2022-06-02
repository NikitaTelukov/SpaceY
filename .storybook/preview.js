import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "../src/redux/reducers/rootReducer";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import * as NextImage from "next/image";
import store from '../src/redux/store'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <div style={{margin: '5rem'}}>
        <Story />
      </div>
    </Provider>
  ),
];


const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => (
    <OriginalNextImage
      {...props}
      unoptimized
    />
  ),
});