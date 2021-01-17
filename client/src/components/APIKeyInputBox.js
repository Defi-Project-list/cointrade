import React from "react";
import styles from "./APIKeyInputBox.module.scss";

const APIKeyInputBox = ({
                            apiKeyInputText = "API Key"
                        }) => {
    return (
        // <div className={styles.apiKeyInputBox}>
        //     <p className={styles.apiKeyInputText}>
        //         {apiKeyInputText}
        //     </p>
        // </div>
        <input type="text" className={styles.apiKeyInputBox} />
    );
};

export default APIKeyInputBox;