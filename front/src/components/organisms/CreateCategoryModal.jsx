import axios from "axios";
import React, { useEffect , useState} from "react";
import { useHistory } from "react-router-dom";

import FormSucess from "../atoms/FormSucess";
import FormFail from "../atoms/FormFail";

export default function CreateCategoryModal({ closeModal }) {
    let myRef;
    useEffect(() => {
        document.addEventListener('click',closeCategoryModal)
});

const closeCategoryModal = (event) => {
    if (myRef && !myRef.contains(event.target)) {
        closeModal();   
    }
}

const history = useHistory();
const [addCategory, setAddCategory] = useState({
    categoryName: "",
    isSubmitting: false,
    errorMessage: null,
    test1: false,

})
console.log("*******",addCategory)

const handleChange = async (event) => {
    const {name, value} = event.target;
    setAddCategory({
        ...addCategory,
        [name]: value,
    });
}

const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        setAddCategory({
            ...addCategory,
            isSubmitting: true,
            errorMessage: null,
            test1: false,

        })
        const token = localStorage.getItem("token");
        await axios({
            method: "post",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`, 
            },
            url: "/api/addcategory",
            data: addCategory,
        })
        console.log("DUUUUUDE")

        history.push("/categoryhome")
        console.log("DUUUUUDE come on !")

    } catch (error) {
        console.log("OUPS !!!!!!!!!")

        setAddCategory({
            ...addCategory,
            isSubmitting: false,
            errorMessage:"La catégory n'a pas été enregistré.",
            test1: true,
        })
    }


}
    
const test1 = addCategory.test1;
console.log("🚀 ~ file: CreateCategoryModal.jsx ~ line 78 ~ CreateCategoryModal ~ test1", test1)
// const test1 = false;

const test2 = () => {
    setAddCategory({
        test1: true,
    })
}



function refreshPage() {
    window.location.reload(false);
  }
// setTimeout(refreshPage, 200)

console.log("*************", addCategory.isSubmitting)
const submitted = addCategory.isSubmitting
console.log("🚀 ~ file: CreateCategoryModal.jsx ~ line 84 ~ CreateCategoryModal ~ submitted", submitted)

console.log("*******2",addCategory, 'add.test1',addCategory.test1)

    return (
        <> 
        <div className="bgModal">

        
            <div className="modalContainer">
            {/* <div className={ state.closedModal ? "modalContainerClosed" : "modalContainer"}> */}

                <div className="modalContainer_closeContainer">
                    <button className="closeModalButton" onClick={closeCategoryModal } >x</button>
                    {/* <button className="closeModalButton" onClick={closeCategoryModal && setstate({closedModal: true})} >x</button> */}
                </div>

                <div className="modalContainer_formContainer">
                    <h3 className="modalContainer_formContainer_listTitle">Créer une categorie</h3>

                    <form 
                    onSubmit={handleSubmit} className="modalContainer_formContainer_form" ref={(node) => (myRef = node)}>
                        <label htmlFor="categoryname" className="modalContainer_formContainer_form_labels">
                                nom de la categorie:
                        </label>
                        <input 
                        type="text" 
                        value={addCategory.categoryName}
                        name="categoryName" 
                        id="categoryname" className="modalContainer_formContainer_form_inputs" 
                        placeholder="Programme créatif" 
                        onChange={handleChange}
                        required/> 

                        <button
                        type="submit"
                        value="Envoyer"
                        onClick={submitted ? (setTimeout(refreshPage, 1500)) : test2}>
                                Ajouter
                        </button>
                        </form>
                </div>
                
                <div className="modalContainer_errorContainer">
                {submitted ? <FormSucess /> : <div></div> }
                {/* { addCategory.test1(true) ? <FormFail /> : <div></div>} */}
                {addCategory.test1 ? <FormFail /> : <div></div>}
                </div>

            </div>

        </div>   
        </>
    )
}
