import React from "react";
import styles from "./Login.module.scss";
import WebsiteTitle from "./WebsiteTitle";
import SignUpButton from "./SignUpButton";
import LogInButton from "./LogInButton";
import LoginDescription from "./LoginDescription";

class Login extends React.Component {
    render() {
        document.body.style.backgroundImage = "url(https://static.overlay-tech.com/assets/15b6bbf4-6eea-4565-87f3-53d72f903a27.png)";
        document.body.style.backgroundSize = "cover";
        return (
            <div className={styles.login}>
                <WebsiteTitle className={styles.websiteTitle}/>
                <div className={styles.flexWrapperOne}>
                    <SignUpButton className={styles.signUpButton}/>
                    <LogInButton className={styles.signUpButton}/>
                </div>
                <LoginDescription/>
            </div>
        );
    }
}

export default Login;