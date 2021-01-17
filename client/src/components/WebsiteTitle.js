import React from "react";
import styles from "./WebsiteTitle.module.scss";

const WebsiteTitle = ({
                          cointrade = "cointrade",
                          investInCryptocurrencyTheRightWay = "Invest in cryptocurrency the right way."
                      }) => {
    return (
        <div className={styles.websiteTitle}>
            <p className={styles.cointrade}>{cointrade}</p>
            <p
                className={styles.investInCryptocurrencyTheRightWay}
            >
                {investInCryptocurrencyTheRightWay}
            </p>
        </div>
    );
};

export default WebsiteTitle;