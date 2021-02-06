import React from "react";
import { Link } from "react-router-dom";

export default function Signin() {
    return (
        <>
            <div className="formContainer">
                <h2 className="formContainer_titleForm">
                    Connexion
                </h2>
                <form className="formContainer_form">
                    <label htmlFor="email" className="formContainer_form_labels">
                        Adresse email:
                    </label>
                    <input type="email" name="email" id="email" className="formContainer_form_inputs" placeholder="lisi@mail.com" required/> 

                    <label htmlFor="password" className="formContainer_form_labels">
                        Mot de passe:
                    </label>
                    <input type="password" name="password" id="password" className="formContainer_form_inputs" required/> 

                    <div className="formContainer_form_buttonContainer">
                        <Link to="/categoryhome">
                        <button>
                            Envoyer
                        </button>
                        </Link>
                    </div>


                    
                </form>
            </div>
        </>
    )
}
