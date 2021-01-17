// Overlay use className props to pass style properties to child component.
// To make this component work add className props to your child component manually.
// Here an example: https://gist.github.com/Miniplop/8f87608f8100e758fa5a4eb46f9d151f

import React from "react";
import Sidebar from "./Sidebar";
import FundCard from "./FundCard";
import styles from "./Invest.module.scss";
import GridList from "react-gridlist";

const images = Array.from({ length: 2 }, (_, i) => {
    let width = 50;
    let height = 50;
    return {
        width,
        height
    }
})

const getGridGap = (elementWidth, windowHeight) => (elementWidth > 720 && windowHeight > 480) ? 10 : 5;

const getColumnCount = (elementWidth) => Math.floor(elementWidth / 50);

const getWindowMargin = (windowHeight) => Math.round(windowHeight * 1.5);

const getItemData = (image, columnWidth) => {
    let imageRatio = image.height / image.width
    let adjustedHeight = Math.round(columnWidth * imageRatio)
    return {
        key: image.url,
        height: adjustedHeight,
    }
}

const Invest = ({
                    investTitle = "Invest in Crypto Funds",
                    investDescription = "Explore and invest in crypto funds made by cointrade and other users."
                }) => {
    return (
        <div className={styles.invest}>
            <Sidebar className={styles.sidebar} />

            <div className={styles.fundList}>
                <div className={styles.tradeItems}>
                    <p className={styles.investTitle}>{investTitle}</p>
                    <p className={styles.investDescription}>
                        {investDescription}
                    </p>
                </div>
                <div className={styles.fundListRow}>
                    <FundCard />
                    <FundCard />
                    <FundCard />
                </div>
                <div className={styles.fundListRow}>
                    <FundCard />
                    <FundCard />
                    <FundCard />
                </div>
            </div>
        </div>
    );
};

export default Invest;