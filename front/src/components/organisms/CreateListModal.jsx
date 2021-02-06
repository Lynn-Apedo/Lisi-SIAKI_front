import React, { useEffect } from "react";

export default function CreateListModal({ closeModal }) {
    let myRef;
useEffect(() => {
    document.addEventListener('click',closeListModal)
},[]);


const closeListModal = (e) => {
    if (myRef && !myRef.contains(e.target)) {
        closeModal();
    }
}


    return (
        <>
            <div className="modalContainer">
                <div className="modalContainer_closeContainer">
                    <button className="closeModalButton" onClick={closeListModal} >x</button>
                </div>
                <div className="modalContainer_formContainer">
                    <h3 className="modalContainer_formContainer_listTitle">Créer une liste</h3>

                    <form className="modalContainer_formContainer_form" ref={(node) => (myRef = node)}>
                        <label htmlFor="listname" className="modalContainer_formContainer_form_labels">
                                nom de la liste:
                        </label>
                        <input type="text" name="listName" id="listname" className="modalContainer_formContainer_form_inputs" placeholder="Programme créatif" required/> 

                        <label htmlFor="subcategoryname" className="modalContainer_formContainer_form_labels">
                            nom de la sous-catégorie:
                        </label>
                        <input type="text" name="subcategoryName" id="subcategoryname" className="modalContainer_formContainer_form_inputs" placeholder="Illustration" />

                        <button>
                                Ajouter
                        </button>
                        </form>
                </div>
                
            </div>
        </>
    )
}
