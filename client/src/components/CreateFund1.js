// Overlay use className props to pass style properties to child component.
// To make this component work add className props to your child component manually.
// Here an example: https://gist.github.com/Miniplop/8f87608f8100e758fa5a4eb46f9d151f

import React from "react";
import Sidebar from "./Sidebar";
import CreateFundNameInput from "./CreateFundNameInput";
import CreateFundDescriptionInput from "./CreateFundDescriptionInput";
import CreateFundLinkInput from "./CreateFundLinkInput";
import NextButton from "./NextButton";
import styles from "./CreateFund1.module.scss";

const CreateFund1 = ({
                         createFundTitle = "Create a Fund",
                         createFundSubtitle = "Have an idea for a trading algorithm? Submit it to cointrade and earn commisions.",
                         createFundName = "Name",
                         createFundDescription = "Description",
                         linkToCodeText = "Link to Code"
                     }) => {
    return (
        <div className={styles.createFund1}>
            <Sidebar className={styles.sidebar} />
            <div className={styles.flexWrapperOne}>
                <p className={styles.createFundTitle}>
                    {createFundTitle}
                </p>
                <p className={styles.createFundSubtitle}>
                    {createFundSubtitle}
                </p>
                <p className={styles.createFundName}>
                    {createFundName}
                </p>
                <CreateFundNameInput
                    className={styles.createFundNameInput}
                />
                <p className={styles.createFundName}>
                    {createFundDescription}
                </p>
                <CreateFundDescriptionInput
                    className={styles.createFundDescriptionInput}
                />
                <p className={styles.createFundName}>
                    {linkToCodeText}
                </p>
                <CreateFundLinkInput
                    className={styles.createFundNameInput}
                />
                <NextButton
                    className={styles.createFundNameInput}
                />
            </div>
        </div>
    );
};

export default CreateFund1;