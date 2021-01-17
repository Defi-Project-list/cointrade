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
                    <FundCard fundName="FBIT" percentGain={"1.27%"} author={"by cointrade"} imageSrc="https://png.pngtree.com/png-vector/20190730/ourlarge/pngtree-creative-fund-rising-illustration-material-png-image_1635079.jpg"/>
                    <FundCard fundName="SPLY" percentGain={"0.50%"} author={"by cointrade"} imageSrc="https://i.pinimg.com/originals/7d/03/b1/7d03b1a1c940c5716e7efdec5c558aff.jpg"/>
                    <FundCard fundName="MED" percentGain={"0.08%"} author={"by cointrade"} imageSrc="https://image.freepik.com/free-vector/group-medical-staff-carrying-health-related-icons_53876-43071.jpg"/>
                </div>
                <div className={styles.fundListRow}>
                    <FundCard fundName="FTECH" percentGain={"0.12%"} author={"by cointrade"} imageSrc="https://static.vecteezy.com/system/resources/previews/000/539/726/non_2x/fintech-financial-technology-word-lettering-illustration-vector.jpg"/>
                    <FundCard fundName="TEST" percentGain={"0.00%"} author={"by testuser"} imageSrc="https://static.overlay-tech.com/assets/58f86d52-1d8e-4d15-9cb7-05ca41f7be37.png"/>
                </div>
            </div>
        </div>
    );
};

export default Invest;