import React, { useState, useEffect} from "react";
import { useParams, useHistory} from "react-router-dom";
import axios from "axios";

import imgValidate from "../../assets/icons/validate.png"
import imgDelete from "../../assets/icons/delete.png";


export default function TasksCard() {
    const [addTask, setAddTask] = useState({
        taskName: "",
        isSubmitting: false,
        errorMessage: null,
    })
    console.log("🚀 ~ TASKCARD STATE", addTask)

    // GET LIST ID & tasknames
    const [listId, setListId] = useState([]);
    console.log("🚀 ~ LIST TASKCARD", listId)
    console.log("🚀 ~ LISTID TASKCARD", listId.id)
    console.log("🚀 ~ LISTID TASKCARD TASKNAMES ***", listId.Tasks)

    const { id } = useParams();

    
    useEffect(() => {
        var config = {
            method: "get",
            url: `http://localhost:2046/api/getlist/${id}`,
        };
        axios(config)
            .then(function(response) {
                setListId(response.data.listFound)
            })
            .catch(function(error) {
                console.log("TASKCARD LIST ID RECUPERATION DOENS'T WORK")
            })
    }, [id])
    
    function refreshPage() {
        setTimeout(refreshPage, 1500)
        window.location.reload(false);
      }

    const handleChange = async (event) => {
        const {name, value} = event.target;
        setAddTask({
            ...addTask,
            [name]: value,
        })
    }

    const history = useHistory();
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setAddTask({
                ...addTask,
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
                url: `http://localhost:2046/api/addtask/${listId.id}`,
                data: addTask,
            })
            history.push(`/getlist/${listId.id}`)
            refreshPage()

        } catch (error) {
            setAddTask({
                ...addTask,
                isSubmitting: false,
                errorMessage: "La task n'a pas été enregistré",
            })
        }
    }

    // GET TASKS NAMES
    // const [tasks, setTasks] = useState([]);

    // useEffect(() => {
    //     var config = {
    //         method: "get",
    //         url: 
    //     }

    // }, [])
    return (
        <>
            <div className="tasksCard">
                {/* <div className="tasksCard_titleContainer">
                    <div className="tasksCard_titleContainer_titles">
                        <p className="tasksCard_titleContainer_titles_listName">Nom de la liste</p>
                        <p className="tasksCard_titleContainer_titles_subcategoryName">Nom de la sous-catégorie</p>
                    </div>
                    <div className="tasksCard_titleContainer_buttonContainer">
                        <button className="iconsButton">
                                <img src={imgDelete} alt="icon de validation"/>
                        </button>
                    </div>
                </div> */}

                <form className="tasksCard_inputContainer"
                >
                    <input 
                    type="text" 
                    value={addTask.taskName}
                    name="taskName" 
                    id="taskname" className="tasksCard_oneContainer_inputContainer_input" 
                    onChange={handleChange}
                    placeholder="Ajouter une tâche"/>

                    <div className="tasksCard_oneContainer_inputContainer_buttons">
                    <button 
                    type="submit"
                    value="Envoyer"
                    onClick={handleSubmit}
                    className="iconsButton">
                        <img src={imgValidate} alt="icon de validation"/>
                    </button>
                    </div>
                </form>


                <div className="tasksCard_tasksListContainer">
                    {listId.map((task, i) => (
                        <div key={i}className="tasksCard_tasksListContainer_aTask">
                            <div className="tasksCard_tasksListContainer_aTask_content">
                                <input type="checkbox"/>
                                <label htmlFor=""> {task.id}</label>
                            </div>
                            <div className="tasksCard_tasksListContainer_aTask_buttonContainer">
                                <button className="iconsButton">
                                        <img src={imgDelete} alt="icon de validation"/>
                                </button>
                            </div>
                        </div>
                    ))}                    
                </div>
                

            </div>
        </>
    )
}
