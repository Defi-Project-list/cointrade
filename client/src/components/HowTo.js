// Overlay use className props to pass style properties to child component.
// To make this component work add className props to your child component manually.
// Here an example: https://gist.github.com/Miniplop/8f87608f8100e758fa5a4eb46f9d151f

import React from "react";
import Sidebar from "./Sidebar";
import styles from "./HowTo.module.scss";

const HowTo = ({
                   howToTitle = "How to Create Your Own Fund",
                   howToSubtitle = "This guide demonstrates how to build a Python program which obtains price + volume data and executes trades.",
                   howToTitle2 = "Disclaimer",
                   howToSubtitle2 = "Please be advised that your fund must be open-source. We will request a link to your repository. This is for the sake of transparency with investors.",
                   howToTitle3 = "Let's get started!",
                   howToSubtitle3 = "First, go to the section on our website called Create Fund. This will allow you to set up the details on your fund name and ticker. Click Next to receive your API key.",


                   howToFigure1Desc = "Figure 1. Who says that cryptocurrency has to be difficult to invest in?"
               }) => {
    return (
        <div className={styles.howTo}>
            <Sidebar className={styles.sidebar} />
            <div className={styles.flexWrapperOne}>
                <p className={styles.howToTitle}>{howToTitle}</p>
                <p className={styles.howToSubtitle}>
                    {howToSubtitle}
                </p>
                <p className={styles.howToTitle}>{howToTitle2}</p>
                <p className={styles.howToSubtitle}>
                    {howToSubtitle2}
                </p>
                <p className={styles.howToTitle}>{howToTitle3}</p>
                <p className={styles.howToSubtitle}>
                    {howToSubtitle3}
                </p>
                <img
                    alt=""
                    className={styles.howToFigure1}
                    src="https://assets.entrepreneur.com/content/3x2/2000/20191217200727-6Crypto.jpeg"
                />
                <p className={styles.howToFigure1Desc}>
                    {howToFigure1Desc}
                </p>
            </div>
        </div>
    );
};

export default HowTo;