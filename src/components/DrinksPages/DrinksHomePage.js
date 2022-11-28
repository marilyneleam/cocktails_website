import React, { useState, useEffect } from "react";
import DrinksDisplay from "./DrinksDisplay";
import DrinksNotFound from "./DrinksNotFound";
import "./Drinks.css";

function DrinksHomePage() {
    const [searchItem, setSearchItem] = useState("");
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchItem}`
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setItems(data.drinks);
            });
    }, []);

    const searchBar = async (e) => {
        e.preventDefault();
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchItem}`;
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setItems(data.drinks);
        } catch (e) {
            console.log(e);
        }
    };

    const changeHandle = (e) => {
        setSearchItem(e.target.value);
    };

    return (
        <>
            <h1>Cocktails</h1>
            <form className="form-page" onChange={searchBar} autoComplete="off">
                <div className="inputbox">
                    <input
                        type="text"
                        required="required"
                        className="search"
                        name="search"
                        value={searchItem}
                        onChange={changeHandle}
                    ></input>
                    <span>Search Bar</span>
                </div>
            </form>
            <div className="page">
                {items || items > 0 ? (
                    <div>
                        <DrinksDisplay drinks={items} />
                    </div>
                ) : (
                    <DrinksNotFound />
                )}
            </div>
        </>
    );
}

export default DrinksHomePage;
