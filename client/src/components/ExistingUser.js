// Overlay use className props to pass style properties to child component.
// To make this component work add className props to your child component manually.
// Here an example: https://gist.github.com/Miniplop/8f87608f8100e758fa5a4eb46f9d151f

import React from "react";
import UsernameInputBox2 from "./UsernameInputBox2"
import ContinueButton from "./ContinueButton"
import styles from "./ExistingUser.module.scss";

class ExistingUser extends React.Component {
    render() {
        document.body.style.backgroundImage = "url(https://static.overlay-tech.com/assets/15b6bbf4-6eea-4565-87f3-53d72f903a27.png)";
        document.body.style.backgroundSize = "cover";
        let existingUsernameText = "Username";
        return (
            <div className={styles.existingUser}>
                <p className={styles.existingUsernameText}>
                    {existingUsernameText}
                </p>
                <UsernameInputBox2
                    className={styles.usernameInputBox2}
                />
                <ContinueButton className={styles.continueButton} />
            </div>
        );
    }
}

export default ExistingUser;