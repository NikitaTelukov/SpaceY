import {NextPage} from "next";
import Header from "../Header/Header";
import {connect} from "react-redux";
import {LayoutI} from "../../interfaces";
import styles from "./Layout.module.scss"
import Footer from "@components/Footer/Footer";
import {MyAppDispatch, useAppDispatch} from "../../pages/_app";
import { useSelector } from 'react-redux'

export interface RootState {
    modeSwitcher: {
        mainBackground: string
    }
}

const Layout:NextPage<LayoutI> = ({ children})=> {
    const back = useSelector((state: RootState)=> state.modeSwitcher.mainBackground)

    return (
        <div style={{backgroundColor: back}}>
            <div className={styles.layout}>
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </div>
    )
}

export default Layout