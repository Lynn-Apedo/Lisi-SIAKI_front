import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import ContextAuth from "../authentification/ContextAuth";

// import { Link } from "react-router-dom";

export default function Nav() {
    const { state } = useContext(ContextAuth);

    const Logout = () => {
        localStorage.clear();
        window.location.href = "/"; // ????
    }

    useEffect(() => {
        return () => {}
    }, [state.isAuthenticated]);

    if (state.isAuthenticated === true) {
        return (
            <nav>
                <ul className="nav-links">
                    <Link to="/logout">
                        <li onClick={Logout}>Déconnexion</li>
                    </Link>
                </ul>
            </nav>
        )
    }
    return (
        <nav>
            <ul className="nav-links">
                {/* <Link to="/logout">
                    <li onClick={Logout}>Déconnexion</li>
                </Link> */}
            </ul>
        </nav>
    )
    
}
