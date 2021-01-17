import React from "react";
import styles from "./AboutButton.module.scss";
import {Link} from "react-router-dom";

const AboutButton = ({ aboutButtonText = "About" }) => {
    return (
        <Link to="/about" className={styles.aboutButtonText}>
            <div className={styles.aboutButton}>
                <p className={styles.aboutButtonText}>
                    {aboutButtonText}
                </p>
            </div>
        </Link>
    );
};

export default AboutButton;