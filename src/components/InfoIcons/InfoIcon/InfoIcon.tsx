import {FunctionComponent} from "react";
import Image from "next/image";
import Text from "@components/Text/Text";
import {InfoIconI} from "../../../interfaces";
import styles from "./InfoIcon.module.scss"

const InfoIcon:FunctionComponent<InfoIconI> = ({src, children}) => {
    return (
        <div className={styles.infoIcon}>
            <Image src={src} width={47} height={47} />
            <Text type="texto1" color="gray05">{children}</Text>
        </div>
    )
}

export default InfoIcon