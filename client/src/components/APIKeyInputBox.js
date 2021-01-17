import React from "react";
import styles from "./APIKeyInputBox.module.scss";

class APIKeyInputBox extends React.Component {
    constructor (props){
        super(props);

        this.state = {
        };

        this.onInput = this.onInput.bind(this);
    }

    onInput(e) {
        this.props.parentObject.onAPIKeyEdit(e.target.value);
    }

    render() {
        let apiKeyInputText = "API Key";
        return (
            // <div className={styles.usernameInputBox}>
            <input onChange={ this.onInput } name="usernameInput" type="text" className={styles.apiKeyInputBox} />
            // </div>
        );
    }
}

export default APIKeyInputBox;