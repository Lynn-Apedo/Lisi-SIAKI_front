import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Horloge from "../atoms/Horloge";
import imgValidate from "../../assets/icons/validate.png"
import imgModify from "../../assets/icons/pencil.png";
import imgDelete from "../../assets/icons/delete.png";

import CreateListModal from "../organisms/CreateListModal";
import CreateCategoryModal from "../organisms/CreateCategoryModal";
import ListCard from "../molecules/ListCard";
import TagCategory from "../molecules/TagCategory";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function CategoryHome(test4) {
    // LIST MODAL
    const [showListModal, setShowListModal] = useState(false);
    const handleShowListModal = () => {
        console.log("i'm working !!!")
        setShowListModal(true);
    }
    const handleCloseListModal = () => {
        setShowListModal(false);
    } 

    // CATEGORY MODAL
    const [showCategoryModal, setShowCategoryModal] = useState(false);
    const handleShowCategoryModal = () => {
        console.log("i'm working  OPENED!!!")
        setShowCategoryModal(true);
    }
    const handleCloseCategoryModal = () => {
        console.log("i'm working  CLOSED!!!")

        setShowCategoryModal(false);
    } 

    // GET ID OF CATEGORY TAG 
    const [categoryTag, setCategoryTag] = useState([]);
    const { id } = useParams();
    console.log("🚀 ~ file: CategoryHome.jsx ~ line 42 ~ CategoryHome ~ id", id)

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
console.log("state tag", categoryTag)
console.log("state tag MORE PRECISE", categoryTag.categoryName)

const tagTitle= true

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
            {showListModal && <CreateListModal closeModal={handleCloseListModal} />}
                      
                    </div>
                </div>

            </div>

            <div className="categoryTagContainer">
                <p className="categoryTagContainer_title">Mes catégories:</p>
                {/* <Link to={}> */}
                <TagCategory />

                {/* </Link> */}

                {/* tag des catégory en dynamique pour avoir un smooth scroll qd on clique dessus */}
            </div>
 

            <div className="categoryContainer">
                <div className="categoryContainer_oneContainer">
                    <div className="categoryContainer_oneContainer_dynamicTitleContainer">
                                

                            {/* <div>
                            {categoryTag.map((tag, i) => (

                                <div key={i}>

                                
                                    {/* <h3 className="categoryContainer_oneContainer_dynamicTitleContainer_title">{test3 ? categoryTag.categoryName : <div></div>}</h3>
                                */}


                                {/* <Link to={`/categoryhome/${categoryTag.id}/test`}> */}
                               
                                <h3 className="categoryContainer_oneContainer_dynamicTitleContainer_title">{tagTitle ? categoryTag.categoryName : <div></div>}</h3>

                                {/* </Link> */}
                                    
                               
                                {/* </div>
                            ))} */}
                            {/* </div> */}
                        

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

  {/* /// LIST CONTAINER */}
                    <div className="categoryContainer_oneContainer_listContainer">
                        <div className="categoryContainer_oneContainer_listContainer_addListButtonContainer">
                            <button className="addListButton" onClick={handleShowListModal}>+ ajouter une liste</button>
                        </div>


                        <div className="categoryContainer_oneContainer_listContainer_container">
                            <div className="categoryContainer_oneContainer_listContainer_container_insideTest">
                            <ListCard />

                            </div>
                            {/* <ListCard />
                            <ListCard />
                            <ListCard /><ListCard /><ListCard /> */}
                        </div>

                    </div>
                </div>










                



                 
                    
            
                
            

            </div> 
            {/* categoryContainer */}
        </>
    )
}
