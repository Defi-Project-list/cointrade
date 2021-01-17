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
import UsernameInputBox from "./UsernameInputBox";
import APIKeyInputBox from "./APIKeyInputBox";
import APISecretKeyInputBox from "./APISecretKeyInputBox";
import StartInvestingButton from "./StartInvestingButton";

class FundView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    onAmountEdit(value) {
        console.log(value);
        this.setState({amount: value});
    }

    onBuy() {
        console.log(this.state.amount);

        // async function getTitles() {
        //     var name = React.findDOMNode(this.refs.usernameInput).value;
        //
        //     await axios.get(`http://backend-env-2.eba-u2jthmpx.us-east-2.elasticbeanstalk.com/get_featured`, {
        //         headers: {
        //             'Content-Type': undefined
        //         }
        //     }).then(res => {
        //         res.data.forEach(element => img_titles.push(element["name"]))
        //         console.log(img_titles)
        //     })
        //
        //     return img_titles
        // }
    }

    onSell() {
        console.log(this.state.amount);

        // async function getTitles() {
        //     var name = React.findDOMNode(this.refs.usernameInput).value;
        //
        //     await axios.get(`http://backend-env-2.eba-u2jthmpx.us-east-2.elasticbeanstalk.com/get_featured`, {
        //         headers: {
        //             'Content-Type': undefined
        //         }
        //     }).then(res => {
        //         res.data.forEach(element => img_titles.push(element["name"]))
        //         console.log(img_titles)
        //     })
        //
        //     return img_titles
        // }
    }

    render() {
        let fundViewTitle = "FBIT";
        let fundViewProfits = "+1.27% today";
        let fundViewUser = "by cointrade";
        let fundViewLink = "view source code";
        let fundViewPortfolio = "Portfolio: 61.80% BTC, 23.61% ETH, 9.017% XRP, 3.444% OAX";
        let fundViewCurrentValue = "Current Value: 121 USDT";
        let fundViewInvestment = "Originally invested: 100 USDT";
        let fundViewParagraph = "The FBIT fund, created by cointrade, acts as a fund for top marketcap cryptos, similar to Standard & Poor’s 500 index. It finds the top 50 cryptocurrencies ranked by marketcap and invests in them. The amount of each cryptocurrency held is based on the fibonacci number. For example, 61.80% of BIT50 dedicated to the highest marketcap coin, and (100 - 61.80)(0.618) is the percentage dedicated to the second highest marketcap. FBIT also checks to see if the 14-day RSI of these coins is high. If it is, it decides not the invest on that day.";
        let amountToBuySell = "Amount to buy/sell:";
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
                        className={styles.fundViewAmountInput} parentObject={this}
                    />
                    <div className={styles.flexWrapperThree}>
                        <FundViewBuyButton
                            className={styles.fundViewBuyButton} parentObject={this}
                        />
                        <FundViewSellButton
                            className={styles.fundViewBuyButton} parentObject={this}
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
    }
}

export default FundView;