import React, { useEffect, useState }from "react";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import axios from "axios";

// import imgModify from "../../assets/icons/pencil.png";
import imgDelete from "../../assets/icons/delete.png";
import TasksCard from "../organisms/TasksCard";


export default function ListTasks() {
    const [list, setList] = useState([]);
    const { id } = useParams();
    console.log("🚀 ~ HUMANS id", id)
    console.log("🚀 ~ LIST CARD *****", list)
    // console.log("🚀 ~ LIST CARD cat Name*****", lists.categoryName  )

    useEffect(() => {
        const token = localStorage.getItem("token");
        
        var config = {
            method: "get",
            url: `http://localhost:2046/api/getlist/${id}`,
            header: {
                Authorization: `Bearer ${token}`,
            },
        };
        axios(config)
        .then(function (response) {
            console.log('AND HERE ?WORKING?')

            setList(response.data.listFound)
            console.log('WORKING?')

            console.log("🚀 ~ POPEY", response.data.listFound)
        })
        .catch( function (error) {})
        console.log('NOT WORKING?')  
    }, [id])

    return (
        <>
            <div className="mainContainer">
                <div className="mainContainer_oneListContainer">

                    <div className="mainContainer_oneListContainer_header">
                        <div className="mainContainer_oneListContainer_header_titleContainer">
                            <p className="mainContainer_oneListContainer_header_titleContainer_listName">
                                {list.listName} smt
                                </p>
                            <p className="mainContainer_oneListContainer_header_titleContainer_subcategoryName">
                                {list.subcategoryName}stl
                            </p>
                        </div>
                        <div className="mainContainer_oneListContainer_header_buttonContainer">
                            {/* <button className="iconsButton">
                                    <img src={imgModify} alt="icon de validation"/>
                            </button> */}
                            <button className="iconsButton">
                                    <img src={imgDelete} alt="icon de validation"/>
                            </button>
                        </div>

                    </div>
                    {/* <div className="mainContainer_oneListContainer_taskContainer">
                        <div className="mainContainer_oneListContainer_taskContainer_inputContainer">
                            <div className="mainContainer_oneListContainer_taskContainer_inputContainer_label">
                                <label htmlFor="">Ajouter une tâche:</label>
                            </div>
                            <div className="mainContainer_oneListContainer_taskContainer_inputContainer_input">
                                <input type="text"/>
                                <button>+</button>
                            </div>
                            
                        </div>
                    </div> */}
                    <TasksCard />

                         


                </div>

                <div className="mainContainer_otherListsByCategoryContainer">
                        <p>2e box</p>
                </div>
            </div>
        </>
    )
}



        