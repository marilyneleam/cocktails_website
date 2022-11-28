import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div>
            <div className="contact">
                <p>Contacts :&emsp;</p>
                <i className="fa-solid fa-phone">&emsp;</i>
                <p>+33 (0)0 00 00 00 00&emsp;</p>
                <i className="fa-solid fa-envelope">&emsp;</i>
                <p>contact@ml.fr</p>
            </div>
            <div className="copyright">
                <p>
                    L'ABUS D'ALCOOL EST DANGEREUX POUR LA SANTÉ. À CONSOMMER
                    AVEC MODÉRATION.
                </p>
                <p>COPYRIGHT © 2022 May Leam Cocktails</p>
            </div>
        </div>
    );
}

export default Footer;
