import {FunctionComponent} from "react";
import PlanetInfo from "@components/PlanetInfo/PlanetInfo";
import BackgroundHomeImages from "@components/BackgroundHomeImages/BackgroundHomeImages";
import styles from "./InfoSection.module.scss"
import SliderSection from "@components/SliderSection/SliderSection";

const infoSection:FunctionComponent = () => {
    return (
        <section className={styles.infoSection}>
            <BackgroundHomeImages />
            <PlanetInfo />
            <SliderSection />
        </section>
    )
}

export default infoSection