import {FunctionComponent} from "react";
import InfoIcon from "@components/InfoIcons/InfoIcon/InfoIcon";
import styles from "./InfoIcons.module.scss"

const InfoIcons:FunctionComponent = () => {
    return (
        <section className={styles.infoIcons}>
            <InfoIcon src="/images/rocket.svg">Foguetes com a mais alta tecnologia e conforto.</InfoIcon>
            <InfoIcon src="/images/flag.svg">Mais de 100 missões consecutivas com sucesso.</InfoIcon>
            <InfoIcon src="/images/telescope.svg">Experiencia única e exclusiva.</InfoIcon>
        </section>
    )
}

export default InfoIcons