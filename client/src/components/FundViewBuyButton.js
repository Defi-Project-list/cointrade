import React from "react";
import styles from "./FundViewBuyButton.module.scss";

const FundViewBuyButton = ({
                               fundViewBuyButtonText = "Buy"
                           }) => {
    return (
        <div className={styles.fundViewBuyButton}>
            <p className={styles.fundViewBuyButtonText}>
                {fundViewBuyButtonText}
            </p>
        </div>
    );
};

export default FundViewBuyButton;