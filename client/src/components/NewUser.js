// Overlay use className props to pass style properties to child component.
// To make this component work add className props to your child component manually.
// Here an example: https://gist.github.com/Miniplop/8f87608f8100e758fa5a4eb46f9d151f

import React from "react";
import axios from 'axios';
import UsernameInputBox from "./UsernameInputBox"
import APIKeyInputBox from "./APIKeyInputBox"
import APISecretKeyInputBox from "./APISecretKeyInputBox"
import styles from "./NewUser.module.scss";
import StartInvestingButton from "./StartInvestingButton";

class NewUser extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    onUsernameEdit(value) {
        // console.log(value);
        this.setState({username: value});
    }

    onAPIKeyEdit(value) {
        // console.log(value);
        this.setState({apiKey: value});
    }

    onAPISecretKeyEdit(value) {
        // console.log(value);
        this.setState({apiSecretKey: value});
    }

    onSubmit() {
        console.log(this.state.username);

        axios.get("http://cd13c44f14ab.ngrok.io/" + this.state.username + "/create", {
            headers: {
                'Content-Type': undefined
            },
            apiKey: this.state.apiKey,
            apiSecret: this.state.apiSecretKey
        }).then(res => {
            localStorage.setItem('user', this.username);
            window.open("/invest");
            console.log("New user uccess!")
        }).catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        });
    }

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
                <UsernameInputBox parentObject={this}
                    className={styles.usernameInputBox}
                />
                <p className={styles.newUsernameText}>
                    {binanceApiKeyText}
                </p>
                <APIKeyInputBox className={styles.apiKeyInputBox} parentObject={this} />
                <p className={styles.newUsernameText}>
                    {binanceApiKeyTextTwo}
                </p>
                <APISecretKeyInputBox
                    className={styles.apiSecretKeyInputBox} parentObject={this}
                />
                <StartInvestingButton className={styles.usernameInputBox} parentObject={this}/>
            </div>
        );
    }
}

export default NewUser;