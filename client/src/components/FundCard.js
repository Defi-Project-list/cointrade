import React from "react";
import styles from "./FundCard.module.scss";

const FundCard = ({
                      fundCardName = "BIT50",
                      fundCardPercentGain = "5.22%",
                      funCardAuthor = "by user1"
                  }) => {
    return (
        <div className={styles.fundCard}>
            <img
                alt=""
                className={styles.fundCardLogo}
                src="https://static.overlay-tech.com/assets/58f86d52-1d8e-4d15-9cb7-05ca41f7be37.png"
            />
            <div className={styles.flexWrapperOne}>
                <p className={styles.fundCardName}>
                    {fundCardName}
                </p>
                <p className={styles.fundCardPercentGain}>
                    {fundCardPercentGain}
                </p>
            </div>
            <p className={styles.funCardAuthor}>
                {funCardAuthor}
            </p>
        </div>
    );
};

export default FundCard;