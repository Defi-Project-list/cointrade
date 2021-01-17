import React from "react";
import styles from "./FundCard.module.scss";
import {Link} from "react-router-dom";

class FundCard extends React.Component {
    constructor (props){
        super(props);

        this.state = {
        };
    }

    render() {
        let fundCardName = this.props.fundName;
        let fundCardPercentGain = this.props.percentGain;
        let funCardAuthor = this.props.author;
        let imageSrc = this.props.imageSrc;
        return (
            <div className={styles.fundCard}>
                <img
                    alt=""
                    className={styles.fundCardLogo}
                    src={imageSrc}
                />
                <div className={styles.flexWrapperOne}>
                    <Link to="/fundview" className={styles.fundCardName}>
                        <p className={styles.fundCardName}>
                            {fundCardName}
                        </p>
                    </Link>
                    <p className={styles.fundCardPercentGain}>
                        {fundCardPercentGain}
                    </p>
                </div>
                <p className={styles.funCardAuthor}>
                    {funCardAuthor}
                </p>
            </div>
        );
    }
}

export default FundCard;