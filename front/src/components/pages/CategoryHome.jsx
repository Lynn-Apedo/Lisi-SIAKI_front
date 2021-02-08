import React, { useState } from "react";

import Horloge from "../atoms/Horloge";
import imgValidate from "../../assets/icons/validate.png"
import imgModify from "../../assets/icons/pencil.png";
import imgDelete from "../../assets/icons/delete.png";

import CreateListModal from "../organisms/CreateListModal";
import ListCard from "../molecules/ListCard";

export default function CategoryHome() {
    const [showModal, setShowModal] = useState(false);
    
    const handleShowModal = () => {
        console.log("i'm working !!!")
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    } 



    return (
        <>
            <div className="clockContainer">
                <Horloge />
            </div>
            
            <div className="addCategoryButtonContainer">
                <button className="buttonAddContainer">
                    + ajouter une catégorie
                </button>
            </div>

            <div className="categoryTagContainer">
                <p className="categoryTagContainer_title">Mes catégories:</p>
                <p>nom de catégorie dynamique</p> 
                {/* tag des catégory en dynamique pour avoir un smooth scroll qd on clique dessus */}
            </div>


            <div className="categoryContainer">
                <div className="categoryContainer_oneContainer">
                    <div className="categoryContainer_oneContainer_inputContainer">

                        <input type="text" name="categoryName" id="categoryname" className="categoryContainer_oneContainer_inputContainer_input" placeholder="nommer la nouvelle catégorie" /> 

                        <div className="categoryContainer_oneContainer_inputContainer_buttons">
                            <button className="iconsButton">
                                <img src={imgValidate} alt="icon de validation"/>
                            </button>
                            <button className="iconsButton">
                                <img src={imgModify} alt="icon de validation"/>
                            </button>
                            <button className="iconsButton">
                                <img src={imgDelete} alt="icon de validation"/>
                            </button>   
                        </div>

                    </div>

                    <div className="categoryContainer_oneContainer_listContainer">
                        <div className="categoryContainer_oneContainer_listContainer_addListButtonContainer">
                            <button className="addListButton" onClick={handleShowModal}>+ ajouter une liste</button>
                        </div>

                        {showModal && <CreateListModal closeModal={handleCloseModal} />}

                        <div className="categoryContainer_oneContainer_listContainer_container">
                            <ListCard />
                        </div>

                    </div>
                </div>










                <div className="categoryContainer_oneContainer">
                    <div className="categoryContainer_oneContainer_inputContainer">

                        <input type="text" name="categoryName" id="categoryname" className="categoryContainer_oneContainer_inputContainer_input" placeholder="nommer la nouvelle catégorie" /> 

                        <div className="categoryContainer_oneContainer_inputContainer_buttons">
                            <button className="iconsButton">
                                <img src={imgValidate} alt="icon de validation"/>
                            </button>
                            <button className="iconsButton">
                                <img src={imgModify} alt="icon de validation"/>
                            </button>
                            <button className="iconsButton">
                                <img src={imgDelete} alt="icon de validation"/>
                            </button>   
                        </div>

                    </div>

                    <div className="categoryContainer_oneContainer_listContainer">
                        <div className="categoryContainer_oneContainer_listContainer_addListButtonContainer">
                            <button className="addListButton" onClick={handleShowModal}>+ ajouter une liste</button>
                        </div>

                        {showModal && <CreateListModal closeModal={handleCloseModal} />}

                        <div className="categoryContainer_oneContainer_listContainer_container">
                            <ListCard />
                        </div>

                    </div>
                </div>



                 
                    
                
                
                <div className="categoryContainer_oneContainer">
                    <div className="categoryContainer_oneContainer_inputContainer">

                        <input type="text" name="categoryName" id="categoryname" className="categoryContainer_oneContainer_inputContainer_input" placeholder="nommer la nouvelle catégorie" /> 

                        <div className="categoryContainer_oneContainer_inputContainer_buttons">
                            <button className="iconsButton">
                                <img src={imgValidate} alt="icon de validation"/>
                            </button>
                            <button className="iconsButton">
                                <img src={imgModify} alt="icon de validation"/>
                            </button>
                            <button className="iconsButton">
                                <img src={imgDelete} alt="icon de validation"/>
                            </button>   
                        </div>

                    </div>

                    <div className="categoryContainer_oneContainer_listContainer">
                        <div className="categoryContainer_oneContainer_listContainer_addListButtonContainer">
                            <button className="addListButton" onClick={handleShowModal}>+ ajouter une liste</button>
                        </div>

                        {showModal && <CreateListModal closeModal={handleCloseModal} />}

                        <div className="categoryContainer_oneContainer_listContainer_container">
                            <ListCard />
                        </div>

                    </div>
                </div>
                <div className="categoryContainer_oneContainer">
                    <div className="categoryContainer_oneContainer_inputContainer">

                        <input type="text" name="categoryName" id="categoryname" className="categoryContainer_oneContainer_inputContainer_input" placeholder="nommer la nouvelle catégorie" /> 

                        <div className="categoryContainer_oneContainer_inputContainer_buttons">
                            <button className="iconsButton">
                                <img src={imgValidate} alt="icon de validation"/>
                            </button>
                            <button className="iconsButton">
                                <img src={imgModify} alt="icon de validation"/>
                            </button>
                            <button className="iconsButton">
                                <img src={imgDelete} alt="icon de validation"/>
                            </button>   
                        </div>

                    </div>

                    <div className="categoryContainer_oneContainer_listContainer">
                        <div className="categoryContainer_oneContainer_listContainer_addListButtonContainer">
                            <button className="addListButton" onClick={handleShowModal}>+ ajouter une liste</button>
                        </div>

                        {showModal && <CreateListModal closeModal={handleCloseModal} />}

                        <div className="categoryContainer_oneContainer_listContainer_container">
                            <ListCard />
                        </div>

                    </div>
                </div>
                <div className="categoryContainer_oneContainer">
                    <div className="categoryContainer_oneContainer_inputContainer">

                        <input type="text" name="categoryName" id="categoryname" className="categoryContainer_oneContainer_inputContainer_input" placeholder="nommer la nouvelle catégorie" /> 

                        <div className="categoryContainer_oneContainer_inputContainer_buttons">
                            <button className="iconsButton">
                                <img src={imgValidate} alt="icon de validation"/>
                            </button>
                            <button className="iconsButton">
                                <img src={imgModify} alt="icon de validation"/>
                            </button>
                            <button className="iconsButton">
                                <img src={imgDelete} alt="icon de validation"/>
                            </button>   
                        </div>

                    </div>

                    <div className="categoryContainer_oneContainer_listContainer">
                        <div className="categoryContainer_oneContainer_listContainer_addListButtonContainer">
                            <button className="addListButton" onClick={handleShowModal}>+ ajouter une liste</button>
                        </div>

                        {showModal && <CreateListModal closeModal={handleCloseModal} />}

                        <div className="categoryContainer_oneContainer_listContainer_container">
                            <ListCard />
                        </div>

                    </div>
                </div>
                <div className="categoryContainer_oneContainer">
                    <div className="categoryContainer_oneContainer_inputContainer">

                        <input type="text" name="categoryName" id="categoryname" className="categoryContainer_oneContainer_inputContainer_input" placeholder="nommer la nouvelle catégorie" /> 

                        <div className="categoryContainer_oneContainer_inputContainer_buttons">
                            <button className="iconsButton">
                                <img src={imgValidate} alt="icon de validation"/>
                            </button>
                            <button className="iconsButton">
                                <img src={imgModify} alt="icon de validation"/>
                            </button>
                            <button className="iconsButton">
                                <img src={imgDelete} alt="icon de validation"/>
                            </button>   
                        </div>

                    </div>

                    <div className="categoryContainer_oneContainer_listContainer">
                        <div className="categoryContainer_oneContainer_listContainer_addListButtonContainer">
                            <button className="addListButton" onClick={handleShowModal}>+ ajouter une liste</button>
                        </div>

                        {showModal && <CreateListModal closeModal={handleCloseModal} />}

                        <div className="categoryContainer_oneContainer_listContainer_container">
                            <ListCard />
                        </div>

                    </div>
                </div>
            

            </div> 
            {/* categoryContainer */}
        </>
    )
}
