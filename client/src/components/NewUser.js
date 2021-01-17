// Overlay use className props to pass style properties to child component.
// To make this component work add className props to your child component manually.
// Here an example: https://gist.github.com/Miniplop/8f87608f8100e758fa5a4eb46f9d151f

import React from "react";
import UsernameInputBox from "./UsernameInputBox"
import APIKeyInputBox from "./APIKeyInputBox"
import APISecretKeyInputBox from "./APISecretKeyInputBox"
import styles from "./NewUser.module.scss";
import StartInvestingButton from "./StartInvestingButton";

class NewUser extends React.Component {
    render() {
        document.body.style.backgroundImage = "url(https://static.overlay-tech.com/assets/15b6bbf4-6eea-4565-87f3-53d72f903a27.png)";
        document.body.style.backgroundSize = "cover";
        let newUsernameText = "Username";
        let binanceApiKeyText = "Binance API Key";
        let binanceApiKeyTextTwo = "Binance Secret Key";
        return (
            <div className={styles.newUser}>
                <p className={styles.newUsernameText}>
                    {newUsernameText}
                </p>
                <UsernameInputBox
                    className={styles.usernameInputBox}
                />
                <p className={styles.newUsernameText}>
                    {binanceApiKeyText}
                </p>
                <APIKeyInputBox className={styles.apiKeyInputBox} />
                <p className={styles.newUsernameText}>
                    {binanceApiKeyTextTwo}
                </p>
                <APISecretKeyInputBox
                    className={styles.apiSecretKeyInputBox}
                />
                <StartInvestingButton className={styles.usernameInputBox} />
            </div>
        );
    }
}

export default NewUser;