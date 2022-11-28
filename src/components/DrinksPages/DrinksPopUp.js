import React from "react";
import "./Drinks.css";

function DrinksPopUp(props) {
    return props.trigger ? (
        <div className="popup">
            <div className="popup-inner">
                <button
                    className="close-btn"
                    onClick={() => props.setTrigger(false)}
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>
                {props.children}
            </div>
        </div>
    ) : (
        ""
    );
}
export default DrinksPopUp;
