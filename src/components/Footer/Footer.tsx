import {FunctionComponent} from "react";
import Logo from "@components/Logo/Logo";
import SocialIcons from "@components/SocialIcons/SocialIcons";
import FooterLinks from "@components/FooterLinks/FooterLinks";
import styles from "./Footer.module.scss"

const Footer:FunctionComponent = () => {
    return (
        <footer className={styles.footer}>
            <Logo width={201} height={42}/>
            <SocialIcons />
            <FooterLinks />
        </footer>
    )
}

export default Footer