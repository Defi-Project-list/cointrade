import React from "react";
import styles from "./CreateFundLinkInput.module.scss";

class CreateFundLinkInput extends React.Component {
    constructor (props){
        super(props);

        this.state = {
        };

        this.onInput = this.onInput.bind(this);
    }

    onInput(e) {
        this.props.parentObject.onLinkEdit(e.target.value);
    }

    render() {
        return (
            // <div className={styles.usernameInputBox}>
            <input onChange={ this.onInput } type="text" className={styles.createFundLinkInput} />
            // </div>
        );
    }
}

export default CreateFundLinkInput;