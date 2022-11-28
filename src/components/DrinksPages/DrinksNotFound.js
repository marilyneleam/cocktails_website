import React from "react";
import "./Drinks.css";

function DrinksNotFound() {
    return (
        <div className="error">
            <p className="msg-error">
                NOUS SOMMES DÉSOLÉ AUCUN RÉSULTAT NE CORRESPOND À VOTRE
                RECHERCHE.
                <br />
                VEUILLEZ RÉITÉRER LA RECHERCHE.
            </p>
        </div>
    );
}

export default DrinksNotFound;
