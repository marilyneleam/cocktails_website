import React from "react";
import DrinksItems from "./DrinksItems";
import "./Drinks.css";

function DrinksDisplay({ drinks }) {
	return (
		<div className="drinks-list">
			{drinks.map((val) => (
				<DrinksItems drinkItem={val} />
			))}
		</div>
	);
}

export default DrinksDisplay;
