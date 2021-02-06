import React from 'react'

import Logo from "../atoms/Logo";
import Nav from "../molecules/Nav";

export default function Header() {
    return (
        <>  
            <div className="header">
                <Logo />
                <Nav />
            </div>
        </>
    )
}
