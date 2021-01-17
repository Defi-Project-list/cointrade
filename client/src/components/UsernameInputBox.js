import React from "react";
import styles from "./UsernameInputBox.module.scss";

const UsernameInputBox = ({
                              usernameInputText = "Username"
                          }) => {
    return (
        // <div className={styles.usernameInputBox}>
            <input type="text" className={styles.usernameInputBox} />
        // </div>
    );
};

export default UsernameInputBox;