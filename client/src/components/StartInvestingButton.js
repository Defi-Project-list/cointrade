import React from "react";
import styles from "./StartInvestingButton.module.scss";
import {Link} from "react-router-dom";

class StartInvestingButton extends React.Component {
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
        let startInvestingText = "Start Investing";
        return (
            // <Link to="/newuser">
            <div className={styles.startInvestingButton} onClick={this.handleClick}>
                <span className={styles.startInvestingText}>
                    <p className={styles.startInvestingText}>{startInvestingText}</p>
                </span>
            </div>
            // </Link>
        );
    }
}

export default StartInvestingButton;