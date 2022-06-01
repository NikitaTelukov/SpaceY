import styles from "../Header/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import {LogoI} from "../../interfaces";
import {connect} from "react-redux";
import {NextPage} from "next";

const Logo:NextPage<LogoI> = ({width, height, isDarkMode})=> {
    return (
        <Link href="/">
            <a>
                <Image
                    className={styles.logo}
                    src={isDarkMode ? "/images/dark/logo.svg" : "/images/light/logo.svg"}
                    width={width}
                    height={height}
                />
            </a>
        </Link>
    )
}

const mapStateToProps = ({modeSwitcher})=> ({
  isDarkMode: modeSwitcher.isDarkMode
})

export default connect(mapStateToProps)(Logo)