import React, { useState } from "react";

import Horloge from "../atoms/Horloge";
import imgValidate from "../../assets/icons/validate.png"
import imgModify from "../../assets/icons/pencil.png";
import imgDelete from "../../assets/icons/delete.png";

import CreateListModal from "../organisms/CreateListModal";

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
            <div className="buttonAddCategory">
                <button className="buttonAddContainer">
                    + ajouter une catégorie
                </button>
            </div>
            <div className="categoryContainer">
                <div className="categoryContainer_inputContainer">
                    <input type="text" name="categoryName" id="categoryname" className="categoryContainer_inputContainer_input" placeholder="nommer la nouvelle catégorie" /> 
                    <div className="categoryContainer_inputContainer_buttons">
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
                <div className="categoryContainer_listContainer">
                    <button className="addListButton" onClick={handleShowModal}>+ ajouter une liste</button>
                    {showModal && <CreateListModal closeModal={handleCloseModal} />}
                </div>
                



<div className="test">

<div className="categoryContainer_inputContainer">
                    <input type="text" name="categoryName" id="categoryname" className="categoryContainer_inputContainer_input" placeholder="nommer la nouvelle catégorie" /> 
                    <div className="categoryContainer_inputContainer_buttons">
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
                <div className="categoryContainer_listContainer">
                    <button className="addListButton" onClick={handleShowModal}>+ ajouter une liste</button>
                    {showModal && <CreateListModal closeModal={handleCloseModal} />}
                </div>
            

                <div className="categoryContainer_inputContainer">
                    <input type="text" name="categoryName" id="categoryname" className="categoryContainer_inputContainer_input" placeholder="nommer la nouvelle catégorie" /> 
                    <div className="categoryContainer_inputContainer_buttons">
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
                <div className="categoryContainer_listContainer">
                    <button className="addListButton" onClick={handleShowModal}>+ ajouter une liste</button>
                    {showModal && <CreateListModal closeModal={handleCloseModal} />}
                </div>
                <div className="categoryContainer_inputContainer">
                    <input type="text" name="categoryName" id="categoryname" className="categoryContainer_inputContainer_input" placeholder="nommer la nouvelle catégorie" /> 
                    <div className="categoryContainer_inputContainer_buttons">
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
                <div className="categoryContainer_listContainer">
                    <button className="addListButton" onClick={handleShowModal}>+ ajouter une liste</button>
                    {showModal && <CreateListModal closeModal={handleCloseModal} />}
                </div>
                <div className="categoryContainer_inputContainer">
                    <input type="text" name="categoryName" id="categoryname" className="categoryContainer_inputContainer_input" placeholder="nommer la nouvelle catégorie" /> 
                    <div className="categoryContainer_inputContainer_buttons">
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
                <div className="categoryContainer_listContainer">
                    <button className="addListButton" onClick={handleShowModal}>+ ajouter une liste</button>
                    {showModal && <CreateListModal closeModal={handleCloseModal} />}
                </div>
                <div className="categoryContainer_inputContainer">
                    <input type="text" name="categoryName" id="categoryname" className="categoryContainer_inputContainer_input" placeholder="nommer la nouvelle catégorie" /> 
                    <div className="categoryContainer_inputContainer_buttons">
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
                <div className="categoryContainer_listContainer">
                    <button className="addListButton" onClick={handleShowModal}>+ ajouter une liste</button>
                    {showModal && <CreateListModal closeModal={handleCloseModal} />}
                </div>
                <div className="categoryContainer_inputContainer">
                    <input type="text" name="categoryName" id="categoryname" className="categoryContainer_inputContainer_input" placeholder="nommer la nouvelle catégorie" /> 
                    <div className="categoryContainer_inputContainer_buttons">
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
                <div className="categoryContainer_listContainer">
                    <button className="addListButton" onClick={handleShowModal}>+ ajouter une liste</button>
                    {showModal && <CreateListModal closeModal={handleCloseModal} />}
                </div>
                <div className="categoryContainer_inputContainer">
                    <input type="text" name="categoryName" id="categoryname" className="categoryContainer_inputContainer_input" placeholder="nommer la nouvelle catégorie" /> 
                    <div className="categoryContainer_inputContainer_buttons">
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
                <div className="categoryContainer_listContainer">
                    <button className="addListButton" onClick={handleShowModal}>+ ajouter une liste</button>
                    {showModal && <CreateListModal closeModal={handleCloseModal} />}
                </div>
                <div className="categoryContainer_inputContainer">
                    <input type="text" name="categoryName" id="categoryname" className="categoryContainer_inputContainer_input" placeholder="nommer la nouvelle catégorie" /> 
                    <div className="categoryContainer_inputContainer_buttons">
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
                <div className="categoryContainer_listContainer">
                    <button className="addListButton" onClick={handleShowModal}>+ ajouter une liste</button>
                    {showModal && <CreateListModal closeModal={handleCloseModal} />}
                </div>
            

</div>
                












            </div>
        </>
    )
}
