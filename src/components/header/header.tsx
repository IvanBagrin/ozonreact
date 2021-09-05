import React from "react"
import CardHeader from "./components/card-header"
import Logo from "./components/logo-header"
import Mask from "./components/mask-header"
import MenuHeader from "./components/menu-header"
import styles from "./header.module.css"

const Header = () => {
    return (
        <div className = {styles.root}>
            <Logo />
            <MenuHeader />
            <div className ={styles.left}>
                <Mask />
                <CardHeader />
            </div>
            
        </div>
    )
}
export default Header;