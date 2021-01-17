// Overlay use className props to pass style properties to child component.
// To make this component work add className props to your child component manually.
// Here an example: https://gist.github.com/Miniplop/8f87608f8100e758fa5a4eb46f9d151f

import React from "react";
import Sidebar from "./Sidebar";
import FundViewAmountInput from "./FundViewAmountInput";
import FundViewBuyButton from "./FundViewBuyButton";
import FundViewSellButton from "./FundViewSellButton";
import LineChart from "./LineChart";
import styles from "./FundView.module.scss";

const FundView = ({
                      fundViewTitle = "BIT50",
                      fundViewProfits = "+5.22% today",
                      fundViewUser = "by user1",
                      fundViewLink = "view source code",
                      fundViewPortfolio = "Portfolio: 61.80% BTC, 23.61% ETH, 9.017% XRP, 3.444% OAX",
                      fundViewCurrentValue = "Current Value: 121 USDT",
                      fundViewInvestment = "Originally invested: 100 USDT",
                      fundViewParagraph = "The BIT50 fund, which was created by cointrade, acts as a fund for top marketcap cryptos, similar to Standard &amp; Poor’s 500 index. It finds the top 50 cryptocurrencies ranked by marketcap and invests in them. The amount of each cryptocurrency held is based on the fibonacci number. For example, 61.80% of BIT50 dedicated to the highest marketcap coin, and (100 - 61.80)(0.618) is the percentage dedicated to the second highest marketcap.",
                      amountToBuySell = "Amount to buy/sell:"
                  }) => {
    return (
        <div className={styles.fundView}>
            <Sidebar className={styles.sidebar} />
            <div className={styles.flexWrapperOne}>
                <p className={styles.fundViewTitle}>
                    {fundViewTitle}
                </p>
                <p className={styles.fundViewProfits}>
                    {fundViewProfits}
                </p>
                <div className={styles.flexWrapperTwo}>
                    <p className={styles.fundViewUser}>
                        {fundViewUser}
                    </p>
                    <p className={styles.fundViewLink}>
                        {fundViewLink}
                    </p>
                </div>
                <p className={styles.fundViewPortfolio}>
                    {fundViewPortfolio}
                </p>
                {/*<img*/}
                {/*    alt=""*/}
                {/*    src="https://static.overlay-tech.com/assets/b127b8c8-15c7-411a-97aa-2a06498ecf85.png"*/}
                {/*/>*/}
                <LineChart />
                <p className={styles.fundViewCurrentValue}>
                    {amountToBuySell}
                </p>
                <FundViewAmountInput
                    className={styles.fundViewAmountInput}
                />
                <div className={styles.flexWrapperThree}>
                    <FundViewBuyButton
                        className={styles.fundViewBuyButton}
                    />
                    <FundViewSellButton
                        className={styles.fundViewBuyButton}
                    />
                </div>
                <p className={styles.fundViewCurrentValue}>
                    {fundViewCurrentValue}
                </p>
                <p className={styles.fundViewCurrentValue}>
                    {fundViewInvestment}
                </p>
                <p className={styles.fundViewParagraph}>
                    {fundViewParagraph}
                </p>
            </div>
        </div>
    );
};

export default FundView;