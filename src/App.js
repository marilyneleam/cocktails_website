import React from "react";
import NavBar from "./components/NavBar/NavBar";
import DrinksHomePage from "./components/DrinksPages/DrinksHomePage";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
    return (
        <div className="App">
            <NavBar />
            <DrinksHomePage />
            <Footer />
        </div>
    );
}

export default App;
