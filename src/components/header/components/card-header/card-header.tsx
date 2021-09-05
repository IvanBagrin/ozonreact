import React from "react";
import CardHeaderCount from "./card-header-count";
import CardLogo from "./card-header-logo"
import styles from "./card-header.module.css"

const CardHeader = () => {
    return <div className = {styles.root}> 
            <CardLogo />
            <CardHeaderCount />
        
    </div>
}

export default CardHeader;