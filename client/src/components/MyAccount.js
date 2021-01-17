// Overlay use className props to pass style properties to child component.
// To make this component work add className props to your child component manually.
// Here an example: https://gist.github.com/Miniplop/8f87608f8100e758fa5a4eb46f9d151f

import React from "react";
import Sidebar from "./Sidebar";
import styles from "./MyAccount.module.scss";

const MyAccount = ({
                       myAccountTitle = "My Account",
                       myAccountProfitText1 = "Portfolio profit (all-time):",
                       myAccountInvestmentTitle = "Investments",
                       myAccountInvestmentTest1 = "BIT50: 100 USDT",
                       myAccountInvestmentText2 = "Fund2: 150 USDT",
                       myAccountProfitText2 = "+5.22%"
                   }) => {
    console.log(localStorage.getItem('user'));
    return (
        <div className={styles.myAccount}>
            <Sidebar className={styles.sidebar} />
            <div className={styles.flexWrapperOne}>
                <p className={styles.myAccountTitle}>
                    {myAccountTitle}
                </p>
                <p className={styles.myAccountProfitText1}>
                    {myAccountProfitText1}
                </p>
                <p className={styles.myAccountProfitText2}>
                    {myAccountProfitText2}
                </p>
                <p className={styles.myAccountInvestmentTitle}>
                    {myAccountInvestmentTitle}
                </p>
                <p className={styles.myAccountInvestmentTest1}>
                    {myAccountInvestmentTest1}
                </p>
                <p className={styles.myAccountProfitText1}>
                    {myAccountInvestmentText2}
                </p>
            </div>

        </div>
    );
};

export default MyAccount;