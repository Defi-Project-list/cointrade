import React from "react";
import styles from "./Footer.module.scss";

const Footer = ({
                    footerText = "© 2021 Jerry Xie & Robert Ciborowski. All rights reserved."
                }) => {
    return (
        <div className={styles.footer}>
            <p className={styles.footerText}>{footerText}</p>
        </div>
    );
};

export default Footer;