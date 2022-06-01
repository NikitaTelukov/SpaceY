import {FunctionComponent} from "react";
import Link from "next/link";
import {FooterLinkI} from "../../interfaces";
import Text from "@components/Text/Text";
import styles from "./FooterLink.module.scss"

const FooterLink:FunctionComponent<FooterLinkI> = ({children, link}) => {
    return (
        <li className={styles.footerLink}>
            <Link href={link}>
                <a>
                    <Text type="texto1">{children}</Text>
                </a>
            </Link>
        </li>
    )
}

export default FooterLink