import React from "react";
import styles from "./UsernameInputBox2.module.scss";

class UsernameInputBox2 extends React.Component {
    constructor (props){
        super(props);

        this.state = {
        };

        this.onInput = this.onInput.bind(this);
    }

    onInput(e) {
        this.props.parentObject.onUsernameEdit(e.target.value);
    }

    render() {
        let usernameInputText = "Username";
        return (
            // <div className={styles.usernameInputBox}>
            <input onChange={ this.onInput } name="usernameInput" type="text" className={styles.usernameInputBox2} />
            // </div>
        );
    }
}
export default UsernameInputBox2;