import React from "react";
import styles from "./CreateFundDescriptionInput.module.scss";

const CreateFundDescriptionInput = ({
                                        createFundDescriptionInputText = "This fund uses RSI and MACD to strategically invest in supply<br /> chain crypto..."
                                    }) => {
    return (
        <textarea cols="400" rows="5" className={styles.createFundDescriptionInput} />
        // <div className={styles.createFundDescriptionInput}>
        //     <p className={styles.createFundDescriptionInputText}>
        //         {createFundDescriptionInputText}
        //     </p>
        // </div>
    );
};

export default CreateFundDescriptionInput;