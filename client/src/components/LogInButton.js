import React from "react";
import styles from "./LogInButton.module.scss";
import {Link} from "react-router-dom";

const LogInButton = ({ logInText = "Log In" }) => {
    return (
        <Link to="/existinguser" >
            <div className={styles.logInButton}>
                <span className={styles.logInText}>
                    <p className={styles.logInText}>{logInText}</p>
                </span>
            </div>
        </Link>
    );
};

export default LogInButton;