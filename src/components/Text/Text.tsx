import {TextI} from "../../interfaces";
import styles from './Text.module.scss'
import {FunctionComponent} from "react";
import {connect} from "react-redux";

const Text:FunctionComponent<TextI> = ({ customClass, type, color, spacing, isDarkMode, children}) => {
    const textClass = (type === 'texto1' ? styles.texto1
        : type === 'text3_little' ? styles.text3_little
            : type === 'text3_medium' ? styles.text3_medium
                : type === 'text3_large' ? styles.text3_large
                    : type === 'display' ? styles.display
                        : type === 'heading2' ? styles.heading2
                            : type === 'heading3' ? styles.heading3
                                : type === 'heading1' ?  styles.heading1
                                    : styles.text2) + `  ${styles.margins} ${customClass}`

    const textColor = color === 'sun' ? (isDarkMode ? styles.sun : styles.gray02)
        :color === 'gray05' ? (isDarkMode ? styles.gray05 : styles.saturn)
            :color === 'mars_light' ? (isDarkMode ? styles.marsLight : styles.spaceLight)
                :color === 'earth' ? styles.earth
                    :color === 'saturn' ? styles.saturn
                : (isDarkMode ? styles.colorWhite : styles.spaceDark)

    const nodeElement =  type === 'display' ? <h1 className={textClass} style={{color: textColor, letterSpacing: spacing || 1 + 'px'}}>{children}</h1>
                        : type === 'heading2' ? <h2 className={textClass} style={{color: textColor, letterSpacing: spacing || 1 + 'px'}}>{children}</h2>
                            : type === 'heading3' ? <h3 className={textClass} style={{color: textColor, letterSpacing: spacing || 1 + 'px'}}>{children}</h3>
                                : type === 'heading1' ? <h1 className={textClass} style={{color: textColor, letterSpacing: spacing || 1 + 'px'}}>{children}</h1>
                                    : <p className={textClass} style={{color: textColor, letterSpacing: spacing || 1 + 'px'}}>{children}</p>

    return (nodeElement)
}

const mapStateToProps = ({modeSwitcher})=> ({
    isDarkMode: modeSwitcher.isDarkMode
})

export default connect(mapStateToProps)(Text)