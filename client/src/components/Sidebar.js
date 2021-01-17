// Overlay use className props to pass style properties to child component.
// To make this component work add className props to your child component manually.
// Here an example: https://gist.github.com/Miniplop/8f87608f8100e758fa5a4eb46f9d151f

import React from "react";
import TradeButton from "./TradeButton";
import CreateFundButton from "./CreateFundButton";
import HowToButton from "./HowToButton";
import AboutButton from "./AboutButton";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <TradeButton className={styles.tradeButton} />
            <CreateFundButton className={styles.tradeButton} />
            <HowToButton className={styles.howToButton} />
            <AboutButton className={styles.tradeButton} />
        </div>
    );
};

export default Sidebar;