import React from "react";
import styles from "./ContinueButton.module.scss";

class ContinueButton extends React.Component {
    constructor (props){
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.parentObject.onSubmit();
    }

    render() {
        let continueButtonText = "Continue";
        return (
            <div className={styles.continueButton} onClick={this.handleClick}>
                <p className={styles.continueButtonText}>
                    {continueButtonText}
                </p>
            </div>
            // </Link>
        );
    }
}

export default ContinueButton;