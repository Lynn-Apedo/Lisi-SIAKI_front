import React from "react";

import imgModify from "../../assets/icons/pencil.png";
import imgDelete from "../../assets/icons/delete.png";

export default function ListCard() {
    return (
        <>
            <div className="listCardContainer">
                <div className="listCardContainer_titleContainer">
                    <p className="listCardContainer_titleContainer_listName">Nom de la liste</p>
                    <p className="listCardContainer_titleContainer_subcategoryName">Nom de la sous-catégorie</p>

                </div>
                <div className="listCardContainer_buttonContainer">
                    <button className="iconsButton">
                            <img src={imgModify} alt="icon de validation"/>
                    </button>
                    <button className="iconsButton">
                            <img src={imgDelete} alt="icon de validation"/>
                    </button>
                </div> 
            </div>

            {/* <div className="listCardContainer">
                <div className="listCardContainer_titleContainer">
                    <p className="listCardContainer_titleContainer_listName">Nom de la liste</p>
                    <p className="listCardContainer_titleContainer_subcategoryName">Nom de la sous-catégorie</p>

                </div>
                <div className="listCardContainer_buttonContainer">
                    <button className="iconsButton">
                            <img src={imgModify} alt="icon de validation"/>
                    </button>
                    <button className="iconsButton">
                            <img src={imgDelete} alt="icon de validation"/>
                    </button>
                </div> 
            </div> */}

            {/* <div className="listCardContainer">
                <div className="listCardContainer_titleContainer">
                    <p className="listCardContainer_titleContainer_listName">Nom de la liste</p>
                    <p className="listCardContainer_titleContainer_subcategoryName">Nom de la sous-catégorie</p>

                </div>
                <div className="listCardContainer_buttonContainer">
                    <button className="iconsButton">
                            <img src={imgModify} alt="icon de validation"/>
                    </button>
                    <button className="iconsButton">
                            <img src={imgDelete} alt="icon de validation"/>
                    </button>
                </div> 
            </div> */}
             
        </>
    )
}
