import React from "react";
import styles from "./ContinueButton.module.scss";
import {Link} from "react-router-dom";

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
            //
                <div className={styles.continueButton}>
                    <Link to="/invest" className={styles.continueButtonText}>
                    <p className={styles.continueButtonText}>
                        {continueButtonText}
                    </p>
                    </Link>
                </div>
            //
        );
    }
}

export default ContinueButton;