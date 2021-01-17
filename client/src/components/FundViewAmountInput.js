import React from "react";
import styles from "./FundViewAmountInput.module.scss";

const FundViewAmountInput = ({
                                 fundViewAmountInputText = "Amount to buy/sell",
                                defaultInput = "10"
                             }) => {
    return (
        <input type="text" className={styles.fundViewAmountInput} defaultValue={defaultInput}/>
        // <div className={styles.fundViewAmountInput}>
        //     <p className={styles.fundViewAmountInputText}>
        //         {fundViewAmountInputText}
        //     </p>
        // </div>
    );
};

export default FundViewAmountInput;