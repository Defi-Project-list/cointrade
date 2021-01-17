import React from "react";
import styles from "./APISecretKeyInputBox.module.scss";

class APISecretKeyInputBox extends React.Component {
    constructor (props){
        super(props);

        this.state = {
        };

        this.onInput = this.onInput.bind(this);
    }

    onInput(e) {
        this.props.parentObject.onAPISecretKeyEdit(e.target.value);
    }

    render() {
        let apiKeyInputText = "Secret Key";
        return (
            // <div className={styles.usernameInputBox}>
            <input onChange={ this.onInput } name="usernameInput" type="text" className={styles.apiSecretKeyInputBox} />
            // </div>
        );
    }
}

export default APISecretKeyInputBox;