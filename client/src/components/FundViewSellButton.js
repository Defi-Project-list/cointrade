import React from "react";
import styles from "./FundViewSellButton.module.scss";

const FundViewSellButton = ({
                                fundViewSellButtonText = "Sell"
                            }) => {
    return (
        <div className={styles.fundViewSellButton}>
            <p className={styles.fundViewSellButtonText}>
                {fundViewSellButtonText}
            </p>
        </div>
    );
};

export default FundViewSellButton;