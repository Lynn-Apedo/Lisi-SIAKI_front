import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import imgValidate from "../../assets/icons/validate.png"
import imgDelete from "../../assets/icons/delete.png";

export default function TaskContainer() {
    // GET taskNames via getList

    const [tasksListId, setTasksListId] = useState([]);
    // console.log("🚀 ~  TASKLISTID", tasksListId)
    // console.log("🚀 ~ tasksListId TASKCARD TASKNAMES ***", tasksListId.taskName)
    const { id } = useParams();
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
            .then(function(response) {
                console.log("BOBEI")
                setTasksListId(response.data.listFound.Tasks)
                console.log("TASKS VIA LISTID <3", response.data.listFound.Tasks)
            })
            .catch(function(error) {
                console.log("TASKCARD LIST ID RECUPERATION DOENS'T WORK")
            })
    }, [id])
    return (
        <>
            <div className="tasksCard_tasksListContainer">
                    {tasksListId.map((task, i) => (
                        <div className="tasksCard_tasksListContainer_aTask">
                            <div className="tasksCard_tasksListContainer_aTask_content">
                                <input type="checkbox"/>
                                <label htmlFor=""> {task.taskName} hello there</label>
                            </div>
                            <div className="tasksCard_tasksListContainer_aTask_buttonContainer">
                                <button className="iconsButton">
                                        <img src={imgDelete} alt="icon de validation"/>
                                </button>
                            </div>
                        </div>
                    ))}        
                    {/* <p>djflskjfldkjs</p> */}
                </div>
        </>
    )
}
