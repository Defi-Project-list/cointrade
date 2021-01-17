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
import UsernameInputBox from "./UsernameInputBox";
import APIKeyInputBox from "./APIKeyInputBox";
import APISecretKeyInputBox from "./APISecretKeyInputBox";
import StartInvestingButton from "./StartInvestingButton";

class CreateFund1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    onNameEdit(value) {
        console.log(value);
        this.setState({name: value});
    }

    onDescriptionEdit(value) {
        console.log(value);
        this.setState({description: value});
    }

    onLinkEdit(value) {
        console.log(value);
        this.setState({link: value});
    }

    onSubmit() {
        console.log(this.state.name);
        console.log(this.state.description);
        console.log(this.state.link);

        // async function getTitles() {
        //     var name = React.findDOMNode(this.refs.usernameInput).value;
        //
        //     await axios.get(`http://backend-env-2.eba-u2jthmpx.us-east-2.elasticbeanstalk.com/get_featured`, {
        //         headers: {
        //             'Content-Type': undefined
        //         }
        //     }).then(res => {
        //         res.data.forEach(element => img_titles.push(element["name"]))
        //         console.log(img_titles)
        //     })
        //
        //     return img_titles
        // }
    }

    render() {
        let createFundTitle = "Create a Fund";
        let createFundSubtitle = "Have an idea for a trading algorithm? Submit it to cointrade and earn commisions.";
        let createFundName = "Name";
        let createFundDescription = "Description";
        let linkToCodeText = "Link to Code";
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
                        className={styles.createFundNameInput} parentObject={this}
                    />
                    <p className={styles.createFundName}>
                        {createFundDescription}
                    </p>
                    <CreateFundDescriptionInput
                        className={styles.createFundDescriptionInput} parentObject={this}
                    />
                    <p className={styles.createFundName}>
                        {linkToCodeText}
                    </p>
                    <CreateFundLinkInput
                        className={styles.createFundNameInput} parentObject={this}
                    />
                    <NextButton
                        className={styles.createFundNameInput} parentObject={this}
                    />
                </div>
            </div>
        );
    }
}

export default CreateFund1;