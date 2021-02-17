import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { useParams } from "react-router-dom";


export default function CreateListModal({ closeModal }) {
    let myRef;
useEffect(() => {
    document.addEventListener('click',closeListModal)
});


const closeListModal = (e) => {
    if (myRef && !myRef.contains(e.target)) {
        closeModal();
    }
}

const history = useHistory();
const [addList, setAddList] = useState({
    listName: "",
    subcategoryName: "",
    isSubmitting: false,
    errorMessage: null,
    test1: false,
})
console.log("🚀 ~ file: CreateListModal.jsx ~ line 20 ~ CreateListModal ~ addList", addList)

const handleChange = async (event) => {
    const {name, value} = event.target;
    setAddList({
        ...addList, 
        [name]: value,
    });
}


// function refreshPage() {
//     setTimeout(refreshPage, 1500)
//     window.location.reload(false);
//   }

// GET CATEGORY ID AND NAME
const [categoryTag, setCategoryTag] = useState([]);
    const { id } = useParams();
    console.log("🚀 ~ CTGR ", categoryTag)
    console.log("🚀 ~ CTGR id", categoryTag.id)


    useEffect(() => {
        var config = {
            method: "get",
            url: `http://localhost:2046/api/category/${id}`
        };

        axios(config)
            .then(function (response) {
                setCategoryTag(response.data.categoryFound)
                console.log("🚀 ~ file: CategoryHome.jsx ~ line 52 ~ categoryFound", response.data.categoryFound)
                console.log("🚀 ~ BRUUUUH", response.data.categoryFound.categoryName)
            })
            .catch(function (error) {
                console.log("CATEGORYHOME get tag")
            });
    }, [id])


    // POST

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setAddList({
                ...addList,
                isSubmitting: true,
                errorMessage: null, 
            })
            const token = localStorage.getItem("token");
            await axios({
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`,
                },
                url: `http://localhost:2046/api/addlist/${categoryTag.id}`,
                data: addList,
            })
        history.push("/categoryhome")
        // refreshPage()


        } catch (error) {
            setAddList({
                ...addList, 
                isSubmitting: false,
                errorMessage: "La liste n'a pas été enregistré",
            })
        }
    } 



    return (
        <>
        <div className="bgModal">

            <div className="modalContainer">
                <div className="modalContainer_closeContainer">
                    <button className="closeModalButton" onClick={closeListModal} >x</button>
                </div>
                <div className="modalContainer_formContainer">
                    <h3 className="modalContainer_formContainer_listTitle">Créer une liste</h3>

                    <form className="modalContainer_formContainer_form" ref={(node) => (myRef = node)}
                    onSubmit={handleSubmit}>
                        <label htmlFor="listname" className="modalContainer_formContainer_form_labels">
                                nom de la liste:
                        </label>
                        <input 
                        type="text" 
                        name="listName" 
                        value={addList.listName}
                        id="listname" className="modalContainer_formContainer_form_inputs" 
                        placeholder="Programme créatif" 
                        onChange={handleChange}
                        required/> 

                        <label htmlFor="subcategoryname" className="modalContainer_formContainer_form_labels">
                            nom de la sous-catégorie:
                        </label>
                        <input 
                        type="text" 
                        value={addList.subcategoryName}
                        name="subcategoryName" id="subcategoryname" className="modalContainer_formContainer_form_inputs" 
                        placeholder="Illustration"
                        onChange={handleChange} />

                        {/* <label htmlFor="subcategoryname" className="modalContainer_formContainer_form_labels">
                            Dans la catégorie:
                        </label>
                        <select
                        name="category"
                        id="category"
                        className="modalContainer_formContainer_form_inputs"
                        // value={addList.category}
                        onChange={handleChange}
                        > */}


                            {/* {categoryTag.map((category, i) =>(
                                    <div key={i}> */}

                                        <p>
                                Dans la catégorie: {categoryTag.categoryName}
                            </p>

                                    {/* </div>
                            ))} */}
                            {/* <option value=""> */}
                                {/* {List .categoryName} */}
                            {/* </option> */}

                        {/* </select> */}
                        

                        <button type="submit"
                        value="Envoyer"
                        onClick={handleSubmit}>
                                Ajouter
                        </button>
                        </form>
                </div>
                
            </div>


        </div>   

        </>
    )
}
