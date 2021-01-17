import React from "react";
import styles from "./StartInvestingButton.module.scss";
import {Link} from "react-router-dom";

const StartInvestingButton = ({ startInvestingText = "Start Investing" }) => {
    return (
        <Link to="/newuser">
            <div className={styles.startInvestingButton}>
                <span className={styles.startInvestingText}>
                    <p className={styles.startInvestingText}>{startInvestingText}</p>
                </span>
            </div>
        </Link>
    );
};

export default StartInvestingButton;