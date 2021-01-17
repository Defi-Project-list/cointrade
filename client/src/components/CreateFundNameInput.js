import React from "react";
import styles from "./CreateFundNameInput.module.scss";

class CreateFundNameInput extends React.Component {
    constructor (props){
        super(props);

        this.state = {
        };

        this.onInput = this.onInput.bind(this);
    }

    onInput(e) {
        this.props.parentObject.onNameEdit(e.target.value);
    }

    render() {
        let createFundNameInputText = "Fund Name";
        return (
            // <div className={styles.usernameInputBox}>
            <input onChange={ this.onInput } type="text" className={styles.createFundNameInput} />
            // </div>
        );
    }
}

export default CreateFundNameInput;