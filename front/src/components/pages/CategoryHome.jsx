import React, { useState } from "react";

import Horloge from "../atoms/Horloge";
import imgValidate from "../../assets/icons/validate.png"
import imgModify from "../../assets/icons/pencil.png";
import imgDelete from "../../assets/icons/delete.png";

import CreateListModal from "../organisms/CreateListModal";
import CreateCategoryModal from "../organisms/CreateCategoryModal";
import ListCard from "../molecules/ListCard";
import TagCategory from "../molecules/TagCategory";

export default function CategoryHome() {
    const [showListModal, setShowListModal] = useState(false);
    const handleShowListModal = () => {
        console.log("i'm working !!!")
        setShowListModal(true);
    }
    const handleCloseListModal = () => {
        setShowListModal(false);
    } 

    const [showCategoryModal, setShowCategoryModal] = useState(false);
    const handleShowCategoryModal = () => {
        console.log("i'm working  OPENED!!!")
        setShowCategoryModal(true);
    }
    const handleCloseCategoryModal = () => {
        console.log("i'm working  CLOSED!!!")

        setShowCategoryModal(false);
    } 


    return (
        <>
            <div className="clockContainer">
                <Horloge />
            </div>
            
            <div className="addCategoryButtonContainer">
                <button className="buttonAddContainer" onClick={handleShowCategoryModal}>
                    + ajouter une catégorie
                </button>
                <div className="addCategoryButtonContainer_modal">
                    <div className="addCategoryButtonContainer_modal_modalPosition">
                      {showCategoryModal && <CreateCategoryModal closeModal={handleCloseCategoryModal} />}
                    </div>
                </div>

            </div>

            <div className="categoryTagContainer">
                <p className="categoryTagContainer_title">Mes catégories:</p>
                <TagCategory />
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
                            <button className="addListButton" onClick={handleShowListModal}>+ ajouter une liste</button>
                        </div>

                        {showListModal && <CreateListModal closeModal={handleCloseListModal} />}

                        <div className="categoryContainer_oneContainer_listContainer_container">
                            <ListCard />
                            <ListCard />
                            <ListCard />
                            <ListCard /><ListCard /><ListCard />
                        </div>

                    </div>
                </div>










                



                 
                    
            
                
            

            </div> 
            {/* categoryContainer */}
        </>
    )
}
