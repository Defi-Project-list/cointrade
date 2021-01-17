import React from "react";
import styles from "./TradeButton.module.scss";
import {Link} from "react-router-dom";
// import parthenon from '../assets/parthenon.png';

const TradeButton = ({ tradeButtonText = "Invest" }) => {
    return (
        <Link to="/invest" className={styles.tradeButtonText}>
            <div className={styles.tradeButton}>
                <p className={styles.tradeButtonText}>
                    {tradeButtonText}
                </p>
            </div>
        </Link>
    );
};

export default TradeButton;