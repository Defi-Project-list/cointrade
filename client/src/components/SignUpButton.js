import React from "react";
import styles from "./SignUpButton.module.scss";
import {Link} from "react-router-dom";

const SignUpButton = ({ signUpText = "Sign Up" }) => {
    return (
        <Link to="/newuser">
            <div className={styles.signUpButton}>
                <span className={styles.signUpText}>
                    <p className={styles.signUpText}>{signUpText}</p>
                </span>
            </div>
        </Link>
    );
};

export default SignUpButton;