import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ContextAuth from "../authentification/ContextAuth";

export default function Signin() {
    const history = useHistory();
    const [signin, setSignin] = useState({
        email:"",
        password: "",
        isSubmitting: false,
        errorMessage: null,
    })

    const handleChange = async (event) => {
        const { name, value } = event.target;
        setSignin({
            ...signin, 
            [name]: value,
        })
    }

    const { dispatch } = useContext(ContextAuth);
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setSignin({
                ...signin,
                isSubmitting: true,
                errorMessage: null,
            })
            
            const res = await axios.post("http://localhost:2046/api/signin", signin);

            if (res.status === 200) {
                return (
                    dispatch({
                        type: "LOGIN",
                        payload: res,
                    }),
                    history.push("/categoryhome")
                )
            }

        } catch (error) {
            setSignin({
                ...signin,
                isSubmitting: false,
            })
        }
    }

    return (
        <>
            <div className="formContainer">
                <h2 className="formContainer_titleForm">
                    Connexion
                </h2>
                <form onSubmit={handleSubmit} className="formContainer_form">
                    <label htmlFor="email" className="formContainer_form_labels">
                        Adresse email:
                    </label>
                    <input 
                    type="email" 
                    value={signin.email}
                    name="email" 
                    id="email" className="formContainer_form_inputs" placeholder="lisi@mail.com" 
                    onChange={handleChange}
                    required/> 

                    <label htmlFor="password" className="formContainer_form_labels">
                        Mot de passe:
                    </label>
                    <input 
                    type="password" 
                    value={signin.password}
                    name="password" 
                    id="password" className="formContainer_form_inputs"
                    onChange={handleChange}
                    required/> 

                    <div className="formContainer_form_buttonContainer">
                        
                        <button 
                        type="submit"
                        value="Envoyer"
                        onClick={handleSubmit}>
                            Envoyer
                        </button>
                    </div>


                    
                </form>
            </div>
        </>
    )
}
