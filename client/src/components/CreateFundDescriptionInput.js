import React from "react";
import styles from "./CreateFundDescriptionInput.module.scss";

class CreateFundDescriptionInput extends React.Component {
    constructor (props){
        super(props);

        this.state = {
        };

        this.onInput = this.onInput.bind(this);
    }

    onInput(e) {
        this.props.parentObject.onDescriptionEdit(e.target.value);
    }

    render() {
        return (
            // <div className={styles.usernameInputBox}>
            <textarea onChange={ this.onInput } cols="400" rows="5" className={styles.createFundDescriptionInput} />
            // </div>
        );
    }
}

export default CreateFundDescriptionInput;