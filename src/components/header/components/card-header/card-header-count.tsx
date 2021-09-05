import React from "react"
import styles from "./card-header.module.css"
import storeCardHeader from "./store"

const CardHeaderCount = () => {
    return <div className = {styles.count}>
        {storeCardHeader.count}
    </div>
}
export default CardHeaderCount;