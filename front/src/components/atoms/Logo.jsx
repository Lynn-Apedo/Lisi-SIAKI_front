import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <>
            <Link className="noStyle" to="/">
                <h1 className="logo">lisi-siaki</h1>
            </Link>
        </>
    )
}
