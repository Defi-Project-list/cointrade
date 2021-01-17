import React from "react";
import styles from "./UsernameInputBox2.module.scss";

const UsernameInputBox2 = ({
                               usernameInputText2 = "Username"
                           }) => {
    return (
        // <div className={styles.usernameInputBox2}>
        //     <p className={styles.usernameInputText2}>
        //         {usernameInputText2}
        //     </p>
        // </div>
        <input type="text" className={styles.usernameInputBox2} />
    );
};

export default UsernameInputBox2;