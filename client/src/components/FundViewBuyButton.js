import React from "react";
import styles from "./FundViewBuyButton.module.scss";

class FundViewBuyButton extends React.Component {
    constructor (props){
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.parentObject.onBuy();
    }

    render() {
        let fundViewBuyButtonText = "Buy";
        return (
            // <Link to="/newuser">
            <div className={styles.fundViewBuyButton} onClick={this.handleClick}>
                <p className={styles.fundViewBuyButtonText}>
                    {fundViewBuyButtonText}
                </p>
            </div>
            // </Link>
        );
    }
}

export default FundViewBuyButton;