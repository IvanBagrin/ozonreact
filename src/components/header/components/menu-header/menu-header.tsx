import React from "react"
import styles from "./menu-header.module.css"
import storeMenuHeader from "./store"

const MenuHeader = () => {
    const menuHeader: Array<string> = storeMenuHeader.menuHeader
    return <div className = {styles.root}>
        <ul className = {styles.ul}>
            {menuHeader.map((item, index) => {
                return <li key = {index} className = {styles.li}>{item}</li>}
                )}
        </ul>
    </div>
}

export default MenuHeader;