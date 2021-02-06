import React from "react";
import {  Link } from "react-router-dom";

export default function FirstHome() {
    return (
        <>
        <div className="firstHomeContainer ">
            <p className="firstHomeContainer_quote">" Créer de l'ordre avec votre désordre! "
            <br/>
                <span className="firstHomeContainer_quote_quoteAuthor"> 
                Lina TORO</span>
            </p>
            
            <p className="firstHomeContainer_description">Vous pensez à quelque chose ? Utilisez Lisi Siaki. Que vous souhaitiez améliorer votre productivité, réduire votre niveau de stress ou simplement libérer de l’espace mental, Lisi Siaki vous aide à planifier votre journée et à gérer votre vie.</p>
            
            {/* <div className="firstHomeContainer_buttonContainer"> */}
            <Link to="/signup">
                <button>Inscription</button>
            </Link>
            <Link to="/signin">
                <button>Connexion</button>
            </Link>
                
            {/* </div> */}
        </div>
            
        </>
    )
}
