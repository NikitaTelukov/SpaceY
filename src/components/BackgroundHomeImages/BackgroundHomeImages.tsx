import {FunctionComponent} from "react";
import Image from "next/image";
import styles from "./BackgroundHomeImages.module.scss"

const BackgroundHomeImages:FunctionComponent = () => {
    return (
     <>
         <div className={styles.stars}>
             <Image alt="Background stars" src="/images/stars.svg" layout="fill"/>
         </div>
         <div className={styles.lines}>
             <Image alt="Background lines" src="/images/lines.svg" width={534} height={1165}/>
         </div>
     </>
    )
}

export default BackgroundHomeImages