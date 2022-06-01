import {FunctionComponent} from "react";
import Image from "next/image";
import Text from "@components/Text/Text";
import styles from "./PlanetInfo.module.scss"

const PlanetInfo:FunctionComponent = () => {
    return (
        <div className={styles.planetInfo}>
            <Image src="/images/mars.svg" width={621} height={621} />
            <div className={styles.planetInfoContent}>
                <Text type="text3_medium" color="sun" spacing={5}>POR QUE MARTE?</Text>
                <Text customClass={styles.sobreHeading} type="heading1">Sobre o planeta vermelho</Text>
                <Text customClass={styles.bigText} type="texto1" color="gray05">
                    A uma distância média de 140 milhões de milhas, Marte é um dos vizinhos habitáveis mai próximos da
                    Terra. Marte está mais ou menos a metade da distância da Terra do Sol, então ainda tem luz solar
                    decente. Está um pouco frio, mas podemos esquentar. Sua atmosfera é composta principalmente de CO2
                    com um pouco de nitrogênio e argônio e alguns outros oligoelementos, o que significa que podemos
                    cultivar plantas em Marte apenas comprimindo a atmosfera.
                </Text>
                <Text type="texto1" color="gray05">
                    A gravidade em Marte é cerca de 38% da da Terra, então você seria capaz de levantar coisas pesadas
                    e dar voltas. Além disso, o dia está notavelmente próximo ao da Terra.
                </Text>
            </div>
        </div>
    )
}

export default PlanetInfo