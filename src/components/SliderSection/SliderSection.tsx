import {FunctionComponent} from "react";
import Logo from "@components/Logo/Logo";
import Text from "@components/Text/Text";
import HomeSlider from "@components/HomeSlider/HomeSlider";
import styles from "./SliderSection.module.scss"

const SliderSection:FunctionComponent = () => {
    return (
        <div className={styles.sliderSection}>
            <div>
                <Logo width={135} height={30}/>
                <Text type="heading1">O caminho para tornar a humanidade multiplanetária.</Text>
                <Text type="text3_medium" color="mars_light">Inscreva-se agora</Text>
            </div>

            <HomeSlider />
        </div>
    )
}

export default SliderSection