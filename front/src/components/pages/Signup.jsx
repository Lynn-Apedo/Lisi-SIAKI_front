import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <>
            <div className="formContainer">
                <h2 className="formContainer_titleForm">
                    Inscription
                </h2>
                <form className="formContainer_form">
                    <label htmlFor="firstname" className="formContainer_form_labels">
                        Prénom:
                    </label>
                    <input type="text" name="firstName" id="firstname" className="formContainer_form_inputs" placeholder="Céleste" required/> 

                    <label htmlFor="lastname" className="formContainer_form_labels">
                        Nom:
                    </label>
                    <input type="text" name="lastName" id="lastname" className="formContainer_form_inputs" placeholder="Dupont" required/> 

                    <label htmlFor="email" className="formContainer_form_labels">
                        Adresse email:
                    </label>
                    <input type="email" name="email" id="email" className="formContainer_form_inputs" placeholder="lisi@mail.com" required/> 

                    <label htmlFor="password" className="formContainer_form_labels">
                        Mot de passe:
                    </label>
                    <input type="password" name="password" id="password" className="formContainer_form_inputs" required/> 

                    <label htmlFor="password" className="formContainer_form_labels">
                        Vérification du mot de passe:
                    </label>
                    <input type="password" name="password" id="password" className="formContainer_form_inputs" required/> 

                    <div className="formContainer_form_buttonContainer">
                        <button>
                            Envoyer
                        </button>
                        <p>Déjà inscript? Par-ici pour <Link to="/signin"><b>se connecter</b> </Link>.</p>
                    </div>


                    
                </form>
            </div>
        </>
    )
}
