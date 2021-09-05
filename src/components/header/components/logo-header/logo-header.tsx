import LogoImg from "./logo-header-img";
import styles from "./logo-header.module.css"

const Logo = () => {
    return <div className = {styles.root}>
        <LogoImg />
    </div>
}

export default Logo;