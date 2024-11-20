import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/afs.css";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/" onClick={closeMenu}>
                    Kind Hands
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                    aria-controls="navbarNav"
                    aria-expanded={isMenuOpen ? "true" : "false"}
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
                            <Link className="nav-link" to="/eventList" onClick={closeMenu}>
                                Список мероприятий
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/feedback" onClick={closeMenu}>
                                Обратная связь
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile" onClick={closeMenu}>
                                Профиль
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login" onClick={closeMenu}>
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
