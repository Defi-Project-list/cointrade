import React from "react";
import styles from "./APISecretKeyInputBox.module.scss";

const APISecretKeyInputBox = ({
                                  apiKeyInputText = "Secret Key"
                              }) => {
    return (
        // <div className={styles.apiSecretKeyInputBox}>
        //     <p className={styles.apiKeyInputText}>
        //         {apiKeyInputText}
        //     </p>
        // </div>
        <input type="text" className={styles.apiSecretKeyInputBox} />
    );
};

export default APISecretKeyInputBox;