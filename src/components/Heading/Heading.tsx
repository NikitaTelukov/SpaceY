import {HeadingI} from "../../interfaces";
import styles from './Heading.module.scss'
import colors from '../Text/Text.module.scss'
import {FunctionComponent} from "react";
import {connect} from "react-redux";

const Heading:FunctionComponent<HeadingI> = ({children, type, color, spacing, isDarkMode}) => {
    const headingClass = type === 'display' ? styles.display
        : type === 'heading2' ? styles.heading2
            : type === 'heading3' ? styles.heading3
                : styles.heading1

    const headingColor = color === 'sun' ? (isDarkMode ? colors.sun : colors.gray02)
        : (isDarkMode ? colors.colorWhite : colors.spaceDark)

    return (
        <h2 className={headingClass} style={{color: headingColor, letterSpacing: spacing || 1 + 'px'}}>
            {children}
        </h2>
    )
}

const mapStateToProps = ({modeSwitcher})=> ({
    isDarkMode: modeSwitcher.isDarkMode
})

export default connect(mapStateToProps)(Heading)