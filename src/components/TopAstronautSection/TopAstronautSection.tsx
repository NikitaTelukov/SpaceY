import Text from "@components/Text/Text";
import Image from "next/image";
import styles from "./TopAstronautSection.module.scss"
import Button from "@components/Button/Button";
import Link from "next/link";
import {useSelector} from "react-redux";
import {RootState} from "@components/Layout/Layout";

const TopAstronautSection = () => {
    const back = useSelector((state: RootState)=> state.modeSwitcher.mainBackground)

    return (
        <section style={{background: back}} className={styles.section}>
            <div className={styles.textContent}>
                <Text type="text3_large" color="sun" spacing={5}>Finalmente é possível!</Text>
                <Text customClass={styles.displayHeading} type="display">Sua jornada para Marte começa aqui.</Text>
                <Text customClass={styles.dateHeading} type="heading3" color="gray05">A primeira viagem para Marte estará disponivél apartir do dia 12/03/2028. Inscreva-se em nossa lista de espera. </Text>

                <Link href="#ticket-form">
                    <a>
                        <Button color="mars">Inscreva-se agora</Button>
                    </a>
                </Link>
            </div>

            <div className={styles.astronautImage}>
                <Image alt="Astronaut home image" src="/images/astronaut-home-image.svg" width={473} height={607} layout="intrinsic"/>
            </div>
        </section>
    )
}

export default TopAstronautSection