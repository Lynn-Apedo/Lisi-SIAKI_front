import React, { useEffect, useState }from "react";
import { useParams } from "react-router-dom";



import imgModify from "../../assets/icons/pencil.png";
import imgDelete from "../../assets/icons/delete.png";
import axios from "axios";

export default function ListCard() {


    const [lists, setLists] = useState([]);
    const { id } = useParams();
    console.log("🚀 ~ LIST CARD *****", lists)
    console.log("🚀 ~ LIST CARD cat Name*****", lists.categoryName  )
    console.log("🚀 ~ LIST CARD list Name*****", lists.Lists  )


    console.log('HELOOOOOOOW **********************')

    useEffect(() => {
        const token = localStorage.getItem("token");
        
        var config = {
            method: "get",
            url: `http://localhost:2046/api/category/${id}`,
            header: {
                Authorization: `Bearer ${token}`,
            }
        }
        axios(config)
        .then(function (response) {
            setLists(response.data.categoryFound.Lists)
            console.log("🚀 ~ POPEY", response.data.categoryFound.Lists)
        })
        .catch( function (error) {})
        
    }, [id])
    return (
        <>
        <div className="listsContainer">
            {lists.map((list, i) => (
                <div key={i} className="listsContainer_listCardContainer">
                <div 
                className="listsContainer_listCardContainer_titleContainer">
                
                    <p className="listsContainer_listCardContainer_titleContainer_listName">{list.listName}</p>
                    <p className="listsContainer_listCardContainer_titleContainer_subcategoryName">{list.subcategoryName}</p>
                </div>

                <div className="listsContainer_listCardContainer_buttonContainer">
                    <button className="iconsButton">
                            <img src={imgModify} alt="icon de validation"/>
                    </button>
                    <button className="iconsButton">
                            <img src={imgDelete} alt="icon de validation"/>
                    </button>
                </div> 

            </div>
            ))}

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
