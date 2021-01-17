import React from "react";
import styles from "./CreateFundNameInput.module.scss";

const CreateFundNameInput = ({
                                 createFundNameInputText = "Fund Name"
                             }) => {
    return (
        <input type="text" className={styles.createFundNameInput} />
        // <div className={styles.createFundNameInput}>
        //     <p className={styles.createFundNameInputText}>
        //         {createFundNameInputText}
        //     </p>
        // </div>
    );
};

export default CreateFundNameInput;