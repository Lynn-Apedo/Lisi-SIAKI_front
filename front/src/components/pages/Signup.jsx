import React, { useState } from "react";
import { Link, useHistory  } from "react-router-dom";
import axios from "axios";

export default function Signup() {
    const [signup, setSignup] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        verifyPassword:"",
        isSubmitting: false,
        errorMessage: null,   // why????
        errorVerification: "",
        identicalPassword: false,
    })
    console.log("SIGNUP", signup)
    console.log("SIGNUP", signup.verifyPassword)

    const history = useHistory();

    const handleChange = async (event) => {
        const { name, value } = event.target;
        setSignup({
            ...signup,
            [name]: value,
        });
    }
   

    const handleSubmit = async (event) => {
        event.preventDefault(); //why ????
        if (signup.password === signup.verifyPassword) {
            var identicalPassword = true
        }

        if (identicalPassword === true) {
            try {
                setSignup({
                    ...signup,
                    isSubmitting: true,
                    errorMessage: null,
                    identicalPassword: true,

                });
    
                await axios({
                    method: "post",
                    url: "api/signup",
                    data: signup,
                });
                history.push("/signin");
            } catch (error) {
                console.log("OUPS !!!!!!!!!")
                
                setSignup({
                    ...signup, 
                    isSubmitting:false,
                    identicalPassword: false,
                    errorMessage: error.response.data.description,
                })
            }
        } else {
            setSignup({
                ...signup,
                errorVerification: "les mots de passe de sont pas identique.",
                identicalPassword: false,
                isSubmitting:false,
            })
        }
        
    }
    return (
        <>
            <div className="formContainer">
                <h2 className="formContainer_titleForm">
                    Inscription
                </h2>
                <form onSubmit={handleSubmit} className="formContainer_form">
                    <label htmlFor="firstname" className="formContainer_form_labels">
                        Prénom:
                    </label>
                    <input 
                    type="text" 
                    value={signup.firstName}
                    name="firstName" 
                    id="firstname" className="formContainer_form_inputs" placeholder="Céleste" 
                    onChange={handleChange}
                    required/> 

                    <label htmlFor="lastname" className="formContainer_form_labels">
                        Nom:
                    </label>
                    <input 
                    type="text" 
                    value={signup.lastName}
                    name="lastName" 
                    id="lastname" className="formContainer_form_inputs" placeholder="Dupont" 
                    onChange={handleChange}
                    required/> 

                    <label htmlFor="email" className="formContainer_form_labels">
                        Adresse email:
                    </label>
                    <input 
                    type="email"
                    value={signup.email} 
                    name="email" 
                    id="email" className="formContainer_form_inputs" placeholder="lisi@mail.com"
                    onChange={handleChange}
                    required/> 

                    <label htmlFor="password" className="formContainer_form_labels">
                        Mot de passe:
                    </label>
                    <input 
                    type="password" 
                    value={signup.password}
                    name="password" 
                    id="password" className="formContainer_form_inputs" 
                    onChange={handleChange}
                    required/> 

                    <label htmlFor="verifyPassword" className="formContainer_form_labels">
                        Vérification du mot de passe:
                    </label>
                    <input 
                    type="password" 
                    value={signup.verifyPassword}
                    name="verifyPassword" 
                    id="verifyPassword" className="formContainer_form_inputs"
                    onChange={handleChange}
                    required/> 

<p>{signup.errorVerification}</p>

                    <div className="formContainer_form_buttonContainer">
                        <button
                        type="submit"
                        value="Envoyer"
                        onClick={handleSubmit}>
                            Envoyer
                        </button>
                        <p>Déjà inscript? Par-ici pour <Link to="/signin"><b>se connecter</b> </Link>.</p>
                    </div>


                    
                </form>
            </div>
        </>
    )
}
