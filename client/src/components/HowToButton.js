import React from "react";
import styles from "./HowToButton.module.scss";
import {Link} from "react-router-dom";

const HowToButton = ({ howToButtonText = "How to" }) => {
    return (
        <Link to="/howto" className={styles.howToButtonText}>
            <div className={styles.howToButton}>
                <p className={styles.howToButtonText}>
                    {howToButtonText}
                </p>
            </div>
        </Link>
    );
};

export default HowToButton;