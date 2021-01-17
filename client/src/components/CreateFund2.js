// Overlay use className props to pass style properties to child component.
// To make this component work add className props to your child component manually.
// Here an example: https://gist.github.com/Miniplop/8f87608f8100e758fa5a4eb46f9d151f

import React from "react";
import Sidebar from "./Sidebar";
import styles from "./CreateFund2.module.scss";

const CreateFund2 = ({
                         createFund2Title = "Your fund has been created!",
                         createFund2Subtitle = "You can now connect with our REST API to make trades and obtain price & volume data. ",
                         createFund2ApiKeyTitle = "API Key",
                         createFund2ApiKeyText = "To interact with our API, use the following key: XXXXXXXXXXXXXXXXXXXX"
                     }) => {
    return (
        <div className={styles.createFund2}>
            <Sidebar className={styles.sidebar} />
            <div className={styles.flexWrapperOne}>
                <p className={styles.createFund2Title}>
                    {createFund2Title}
                </p>
                <p className={styles.createFund2Subtitle}>
                    {createFund2Subtitle}
                </p>
                <p className={styles.createFund2Title}>
                    {createFund2ApiKeyTitle}
                </p>
                <p className={styles.createFund2Subtitle}>
                    {createFund2ApiKeyText}
                </p>
            </div>
        </div>
    );
};

export default CreateFund2;