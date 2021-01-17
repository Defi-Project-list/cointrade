import React from "react";
import styles from "./CreateFundLinkInput.module.scss";

const CreateFundLinkInput = ({
                                 createFundLinkInputText = "www.github.com/u/fund"
                             }) => {
    return (
        <input type="text" className={styles.createFundLinkInput} />
        // <div className={styles.createFundLinkInput}>
        //     <p className={styles.createFundLinkInputText}>
        //         {createFundLinkInputText}
        //     </p>
        // </div>
    );
};

export default CreateFundLinkInput;