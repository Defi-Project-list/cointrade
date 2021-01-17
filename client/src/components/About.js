// Overlay use className props to pass style properties to child component.
// To make this component work add className props to your child component manually.
// Here an example: https://gist.github.com/Miniplop/8f87608f8100e758fa5a4eb46f9d151f

import React from "react";
import Sidebar from "./Sidebar";
import styles from "./About.module.scss";

const About = ({
                   aboutHeader1 = "About",
                   aboutParagraph1a = "CompanyName’s goal is to allow individuals and institutions to gain exposure to " +
                   "the rise of crypto in their trading portfolios. Using CompanyName, investors of any type are able to" +
                   " hold diversified cryptocurrency portfolios. For example, an investor who wants to invest in supply-chain" +
                   " cryptos such as VET or TRAC is able to hold their money in a fund which invests in such currencies." +
                   " CompanyName allows investors to invest in funds of their choosing but also allows programmers to create" +
                   " their own crypto funds based on their own trading algorithms. We view ourselves as an exchange which" +
                   " facilitates our own funds, such as BIT50 (a crypto version of the S&P 500), but also allows users to" +
                   " start their own funds which they can make commissions off of.",
                   aboutParagraph1b = "CompanyName believes that investing in" +
                   " cryptocurrency funds should be decentralized. Instead of applying for a brokerage and using fiat" +
                   " currency to invest in crypto ETFs on the stock market, crypto investors should be able to invest any" +
                   " currency, including FIAT and crypto, into a fund of their choosing. Blah blah blah",
                   aboutParagraph1c = "CompanyName was inspired by Quantopian (which was bought by Robinhood), a platform" +
                   " which allowed talented programmers to sell their stock-trading algorithms to institutional investors." +
                   " Our approach is to allow programmers to write crypto-trading algorithms, which can then be sold to" +
                   " both institutions and individuals. Blah blah blah",
                   aboutHeader2 = "Features to add",
                   aboutParagraph2 = "If we had more time to work on this project, we would also include futures trading based on indexes. For example, we would create our own crypto version of the Cboe’s VIX volatitility index and allow users to speculate by purchasing futures or ETNs based on it. This would add a way of trading on crypto speculatively to our platform, which already allows for diversified investing through funds.",
                   aboutHeader3 = "About the developers",
                   jerryXie = "Jerry Xie",
                   jerryXieParagraph1 = "Hi, I’m.... insert information here",
                   robertCiborowski = "Robert Ciborowski",
                   robertCiborowskiParagraph1 = "Hi, I’m.... insert information here"
               }) => {
    return (
        <div className={styles.about}>
            <div className={styles.flexWrapperOne}>
                <Sidebar className={styles.sidebar} />
                <div className={styles.flexWrapperTwo}>
                    <p className={styles.aboutHeader1}>
                        {aboutHeader1}
                    </p>
                    <p className={styles.aboutParagraph1}>
                        {aboutParagraph1a}
                    </p>
                    <p className={styles.aboutParagraph1}>
                        {aboutParagraph1b}
                    </p>
                    <p className={styles.aboutParagraph1}>
                        {aboutParagraph1c}
                    </p>
                    <p className={styles.aboutHeader2}>
                        {aboutHeader2}
                    </p>
                    <p className={styles.aboutParagraph2}>
                        {aboutParagraph2}
                    </p>
                    <p className={styles.aboutHeader3}>
                        {aboutHeader3}
                    </p>
                    <p className={styles.jerryXie}>{jerryXie}</p>
                </div>
            </div>
            <img
                alt=""
                className={styles.insertPictureHere2}
                src="https://static.overlay-tech.com/assets/09fa5fd9-40cb-4848-a170-6069462be3d2.png"
            />
            <p className={styles.jerryXieParagraph1}>
                {jerryXieParagraph1}
            </p>
            <p className={styles.robertCiborowski}>
                {robertCiborowski}
            </p>
            <img
                alt=""
                className={styles.insertPictureHere2}
                src="https://static.overlay-tech.com/assets/e33ef943-ee77-451d-b5e8-91170040a4b8.png"
            />
            <p className={styles.jerryXieParagraph1}>
                {robertCiborowskiParagraph1}
            </p>
        </div>
    );
};

export default About;