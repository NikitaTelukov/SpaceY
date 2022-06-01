import ModeSwitcher from "../ModeSwitcher/ModeSwitcher";
import styles from './Header.module.css'
import Logo from "../Logo/Logo";

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo width={201} height={42}/>

            <ModeSwitcher />
        </header>
    )
}

export default Header