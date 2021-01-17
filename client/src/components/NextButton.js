import React from "react";
import styles from "./NextButton.module.scss";
import {Link} from "react-router-dom";

const NextButton = ({ nextButtonText = "Next" }) => {
    return (
        <Link to="/createfund2" className={styles.nextButtonText}>
            <div className={styles.nextButton}>
                <p className={styles.nextButtonText}>
                    {nextButtonText}
                </p>
            </div>
        </Link>
    );
};

export default NextButton;