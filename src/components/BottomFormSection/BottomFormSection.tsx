import {FunctionComponent} from "react";
import TicketFormSection from "@components/TicketFormSection/TicketFormSection";
import Image from "next/image";
import styles from "./BottomFormSection.module.scss"

const BottomFormSection:FunctionComponent = () => {
    return (
        <section className={styles.bottomFormSection}>
            <div className={styles.stars}>
                <Image alt="Background stars" src="/images/stars.svg" layout="fill"/>
            </div>
            <TicketFormSection />
            <div>
                <Image alt="Clouds" src="/images/clouds.svg" layout="responsive" width="1440" height="275"/>
            </div>
        </section>
    )
}

export default BottomFormSection