import React from "react";
import styles from "./LoginDescription.module.scss";
import parthenon from '../assets/parthenon.png';

const LoginDescription = ({
                              section1Title = "Invest right away.",
                              section1Body = "You don’t have to go through a lengthy verification process. There is no 14-day waiting period. Sign up and connect your account to a major crypto exchange to get started.",
                              section2Title = "Invest in funds that match your goals.",
                              section2Body = "Choose a crypto fund which aligns with your interests. Believe in the value provided by medical cryptos? Use the CryptoHealth Fund to diversify your investment amongst healthcoins.",
                              section3Header = "Create your own fund.",
                              section3Body = "Have a trading strategy or algorithm? Want to diversify your portfolio by investing in crypto that brings value to the supply chain industry? Use our API to create a fund and earn commisions when others invest in your fund."
                          }) => {
    return (
        <div className={styles.loginDescription}>
            <div className={styles.flexWrapperFive}>
                <div className={styles.flexWrapperFour}>
                    <img
                        alt=""
                        className={styles.vector3}
                        src="https://static.overlay-tech.com/assets/35874228-1ab4-45eb-b718-cb3c2ae3355f.svg"
                    />
                    <img
                        alt=""
                        className={styles.vector1}
                        src="https://static.overlay-tech.com/assets/ba1b2d58-2b32-4343-8e13-793c0a005633.svg"
                    />
                </div>
                <p className={styles.section1Title}>
                    {section1Title}
                </p>
                <p className={styles.section1Body}>
                    {section1Body}
                </p>
            </div>
            <div className={styles.flexWrapperSix}>
                <div className={styles.flexWrapperThree}>
                    <img
                        alt=""
                        className={styles.vector4}
                        src={parthenon}
                    />
                </div>
                <p className={styles.section2Title}>
                    {section2Title}
                </p>
                <p className={styles.section1Body}>
                    {section2Body}
                </p>
            </div>
            <div className={styles.flexWrapperSeven}>
                <img
                    alt=""
                    className={styles.vector6}
                    src="https://static.overlay-tech.com/assets/e1f1d399-0573-4847-9e9c-2a0fcbc496f9.svg"
                />
                <p className={styles.section3Header}>
                    {section3Header}
                </p>
                <p className={styles.section3Body}>
                    {section3Body}
                </p>
            </div>
        </div>
    );
};

export default LoginDescription;