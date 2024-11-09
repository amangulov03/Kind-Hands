// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/afs.css";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState); // Переключаем состояние
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Kind Hands
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                    aria-controls="navbarNav"
                    aria-expanded={isMenuOpen ? "true" : "false"} // обновляем атрибут aria-expanded
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className={`collapse navbar-collapse ${
                        isMenuOpen ? "show" : ""
                    }`}
                    id="navbarNav"
                >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/eventList">
                                Список мероприятий
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/feedback">
                                Обратная связь
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">
                                Профиль
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">
                                Вход
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default Navbar;
