import {FunctionComponent} from "react";
import Logo from "@components/Logo/Logo";
import SocialIcons from "@components/SocialIcons/SocialIcons";
import FooterLinks from "@components/FooterLinks/FooterLinks";
import styles from "./Footer.module.scss"
import {useSelector} from "react-redux";
import {RootState} from "@components/Layout/Layout";

const Footer:FunctionComponent = () => {
    const back = useSelector((state: RootState)=> state.modeSwitcher.mainBackground)

    return (
        <footer style={{background: back}} className={styles.footer}>
            <Logo width={201} height={42}/>
            <SocialIcons />
            <FooterLinks />
        </footer>
    )
}

export default Footer