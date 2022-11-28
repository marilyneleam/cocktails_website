import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { NavButton } from "./NavButton";
import Logo from "../../assets/Logo.png";
import "./NavBar.css";

class NavBar extends Component {

    state = { clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
        <nav className="navBarItems">
                <img className="navBar-logo" src={Logo} alt="logo"></img>
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map ((item, index) => {
                    return(
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>

                    )
                })}
            </ul>
            <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <NavButton>Sign Up</NavButton>
        </nav>
    );
    }
}

export default NavBar;
