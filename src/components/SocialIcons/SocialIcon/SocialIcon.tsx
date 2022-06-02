import {FunctionComponent} from "react";
import Link from "next/link";
import Image from "next/image";
import {SocialIconI} from "../../../interfaces";
import styles from "./SocialIcon.module.scss"

const SocialIcon:FunctionComponent<SocialIconI> = ({link, src}) => {
    return (
        <Link href={link}>
            <a className={styles.socialIcon}>
                <Image src={src} width={25} height={25} alt="Social icon" />
            </a>
        </Link>
    )
}

export default SocialIcon