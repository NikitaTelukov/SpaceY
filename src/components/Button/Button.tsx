import {FunctionComponent} from "react";
import {ButtonI} from "../../interfaces";
import {connect} from "react-redux";
import styles from "./Button.module.scss"

const Button:FunctionComponent<ButtonI> = ({type, isDarkMode, width, color,children})=> {
    const buttonClass = (isDarkMode ? styles.mars : styles.marsLight)

    return (
        <button type={type ? type : 'button'} className={`${buttonClass} ${styles.button}`} style={{width: (width || '264px')}}>{children}</button>
    )
}

const mapStateToProps = ({modeSwitcher})=> ({
    isDarkMode: modeSwitcher.isDarkMode
})


export default connect(mapStateToProps)(Button)