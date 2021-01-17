// Overlay use className props to pass style properties to child component.
// To make this component work add className props to your child component manually.
// Here an example: https://gist.github.com/Miniplop/8f87608f8100e758fa5a4eb46f9d151f

import React from "react";
import Sidebar from "./Sidebar";
import styles from "./HowTo.module.scss";

const HowTo = ({
                   howToTitle = "How to Create Your Own Fund",
                   howToSubtitle = "This guide demonstrates how to build a Python program which obtains price + volume data and executes trades.",
                   howToFigure1Desc = "Figure 1. blah blah blah"
               }) => {
    return (
        <div className={styles.howTo}>
            <Sidebar className={styles.sidebar} />
            <div className={styles.flexWrapperOne}>
                <p className={styles.howToTitle}>{howToTitle}</p>
                <p className={styles.howToSubtitle}>
                    {howToSubtitle}
                </p>
                <img
                    alt=""
                    className={styles.howToFigure1}
                    src="https://static.overlay-tech.com/assets/ab577a45-2a37-4dcb-948d-c4713164b1e4.png"
                />
                <p className={styles.howToFigure1Desc}>
                    {howToFigure1Desc}
                </p>
            </div>
        </div>
    );
};

export default HowTo;