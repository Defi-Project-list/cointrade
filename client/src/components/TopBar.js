import React from "react";
import styles from "./TopBar.module.scss";
import { Link } from "react-router-dom";

const TopBar = ({ cointradeLogoText = "cointrade" }) => {
    return (
        <div className={styles.topBar}>
            <span className={styles.cointradeLogoText}>
                <Link className={styles.cointradeLogoText} to="/" >{cointradeLogoText}</Link>
            </span>

            <Link to="/myaccount" >
                <div className={styles.accountCircle}>
                    <img
                        alt=""
                        src="https://static.overlay-tech.com/assets/4101bec9-776b-4eea-a652-31d3664af774.svg"
                    />
                </div>
            </Link>
        </div>
    );
};

export default TopBar;