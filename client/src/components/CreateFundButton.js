import React from "react";
import styles from "./CreateFundButton.module.scss";
import {Link} from "react-router-dom";

const CreateFundButton = ({
                              createFundText = "Create Fund"
                          }) => {
    return (
        <Link to="/createfund" className={styles.createFundText}>
            <div className={styles.createFundButton}>
                <p className={styles.createFundText}>
                    {createFundText}
                </p>
            </div>
        </Link>
    );
};

export default CreateFundButton;