import { useState } from "react";
import DrinksPopUp from "./DrinksPopUp";

const DrinksItems = ({ drinkItem }) => {
    const [popUp, setPopUp] = useState(false);

    return (
        <div className="card">
            <img
                className="c_pix"
                src={drinkItem.strDrinkThumb}
                alt="cocktails_pix"
            />
            <p className="c_name">{drinkItem.strDrink}</p>
            <p className="c_category">{drinkItem.strCategory}</p>
            <button className="popup-btn" onClick={() => setPopUp(true)}>
                VOIR LE PRODUIT
            </button>
            <DrinksPopUp trigger={popUp} setTrigger={setPopUp}>
                <div className="popup-card">
                    <img
                        className="popup-img"
                        src={drinkItem.strDrinkThumb}
                        alt="cocktails_pix"
                    />
                    <div className="popup-info">
                        <h2>{drinkItem.strDrink}</h2>
                        <h3>{drinkItem.strCategory}</h3>
                        <p className="ingredients">INGREDIENTS</p>
                        <ul className="list-ingredients">
                            <li>{drinkItem.strIngredient1}</li>
                            <li>{drinkItem.strIngredient2}</li>
                            <li>{drinkItem.strIngredient3}</li>
                            <li>{drinkItem.strIngredient4}</li>
                            <li>{drinkItem.strIngredient5}</li>
                            <li>{drinkItem.strIngredient6}</li>
                        </ul>
                    </div>
                    <div className="popup-instructions">
                        <p className="instructions">INSTRUCTIONS</p>
                        <p>{drinkItem.strInstructions}</p>
                    </div>
                </div>
            </DrinksPopUp>
        </div>
    );
};

export default DrinksItems;
