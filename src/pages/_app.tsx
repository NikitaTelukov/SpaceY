import type { AppProps } from 'next/app'
import "./css/source/index.scss"
import {Provider, useDispatch} from 'react-redux';
import store from '../redux/store';
import withRedux from "next-redux-wrapper";
import Layout from "../components/Layout/Layout";
import {getShipsList} from "../redux/actions"
import {Router} from "next/router";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css';

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type MyAppDispatch = typeof getShipsList

Router.events.on('routeChangeStart', (url) => {
    NProgress.start();
});

Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
    return (
      <Provider store={store}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </Provider>
    )
}

const makeStore = () => store

export default withRedux(makeStore)(MyApp)