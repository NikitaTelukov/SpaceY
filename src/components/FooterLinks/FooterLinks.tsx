import {FunctionComponent} from "react";
import FooterLink from "@components/FooterLink/FooterLink";
import styles from "./FooterLinks.module.scss"

const FooterLinks:FunctionComponent = () => {
    const footerLinks = [
        {
            id: '1',
            link: '/upcoming',
            name: 'Upcoming'
        },
        {
            id: '2',
            link: '/launches',
            name: 'Launches'
        },
        {
            id: '3',
            link: '/missions',
            name: 'Missions'
        },
        {
            id: '4',
            link: '/contact-us',
            name: 'Contact Us'
        }
    ]

    return (
        <ul className={styles.footerLinks}>
            {
                footerLinks.map(link=> (
                    <FooterLink key={link.id} link={link.link}>{link.name}</FooterLink>
                    )
                )
            }
        </ul>
    )
}

export default FooterLinks