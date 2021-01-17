import React from "react";
import styles from "./NextButton.module.scss";
import {Link} from "react-router-dom";

class NextButton extends React.Component {
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
        let nextButtonText = "Next";
        return (
            <Link to="/createfund2?optionid=94856510" className={styles.nextButtonText}>
            <div className={styles.nextButton}>
                <span className={styles.nextButtonText}>
                    <p className={styles.nextButtonText}>{nextButtonText}</p>
                </span>
            </div>
            {/*<div className={styles.nextButton} onClick={this.handleClick}>*/}
            {/*    <p className={styles.nextButtonText}>*/}
            {/*        {nextButtonText}*/}
            {/*    </p>*/}
            {/*</div>*/}
            </Link>
        );
    }
}

export default NextButton;