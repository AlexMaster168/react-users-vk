import React from "react";
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
            <div className="container">
                <button className="navbar-toggler justify-content-end" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink exact className="nav-item nav-link active" to="/">Главная <span
                            className="sr-only">(current)</span></NavLink>
                        <NavLink className="nav-item nav-link" to="/create">Создать</NavLink>
                        <NavLink className="nav-item nav-link" to="/about">О приложении</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
