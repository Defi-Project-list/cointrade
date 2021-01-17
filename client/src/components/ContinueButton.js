import React from "react";
import styles from "./ContinueButton.module.scss";

const ContinueButton = ({
                            continueButtonText = "Continue"
                        }) => {
    return (
        <div className={styles.continueButton}>
            <p className={styles.continueButtonText}>
                {continueButtonText}
            </p>
        </div>
    );
};

export default ContinueButton;