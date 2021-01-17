import React from "react";
import styles from "./FundViewAmountInput.module.scss";

class FundViewAmountInput extends React.Component {
    constructor (props){
        super(props);

        this.state = {
        };

        this.onInput = this.onInput.bind(this);
    }

    onInput(e) {
        this.props.parentObject.onAmountEdit(e.target.value);
    }

    render() {
        let defaultInput = "10";
        return (
            // <div className={styles.usernameInputBox}>
            <input onChange={this.onInput} type="text" className={styles.fundViewAmountInput} defaultValue={defaultInput}/>
            // </div>
        );
    }
}

export default FundViewAmountInput;