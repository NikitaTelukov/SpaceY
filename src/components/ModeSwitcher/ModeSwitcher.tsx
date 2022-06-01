import Image from "next/image";
import styles from './ModeSwitcher.module.css'
import {toggleMode} from "../../redux/actions";
import {connect} from "react-redux";

const ModeSwitcher = ({toggleMode, isDarkMode}) => {
    return (
        <label className={styles.moonSwitcherWrapper} htmlFor="modes-switcher">
            <input className={styles.moonSwitcher} id="modes-switcher" type="checkbox" onChange={()=> toggleMode()}/>
            <Image src={isDarkMode ? "/images/dark/moon.svg" : "/images/light/moon.svg"} width={31} height={31}/>
        </label>
    )
}

const mapStateToProps = ({modeSwitcher}) => ({
    isDarkMode: modeSwitcher.isDarkMode
})

const mapDispatchToProps = {
    toggleMode
};

export default connect(mapStateToProps,mapDispatchToProps)(ModeSwitcher)