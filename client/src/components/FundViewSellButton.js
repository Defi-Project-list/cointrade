import React from "react";
import styles from "./FundViewSellButton.module.scss";

class FundViewSellButton extends React.Component {
    constructor (props){
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.parentObject.onSell();
    }

    render() {
        let fundViewSellButtonText = "Sell";
        return (
            // <Link to="/newuser">
            <div className={styles.fundViewSellButton} onClick={this.handleClick}>
                <p className={styles.fundViewSellButtonText}>
                    {fundViewSellButtonText}
                </p>
            </div>
            // </Link>
        );
    }
}

export default FundViewSellButton;