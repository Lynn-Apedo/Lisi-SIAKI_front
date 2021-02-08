import React from "react";

import imgValidate from "../../assets/icons/validate.png"
import imgDelete from "../../assets/icons/delete.png";

export default function TasksCard() {
    return (
        <>
            <div className="tasksCard">
                <div className="tasksCard_titleContainer">
                    <div className="tasksCard_titleContainer_titles">
                        <p className="tasksCard_titleContainer_titles_listName">Nom de la liste</p>
                        <p className="tasksCard_titleContainer_titles_subcategoryName">Nom de la sous-catégorie</p>
                    </div>
                    <div className="tasksCard_titleContainer_buttonContainer">
                        <button className="iconsButton">
                                <img src={imgDelete} alt="icon de validation"/>
                        </button>
                    </div>
                </div>

                <div className="tasksCard_inputContainer">
                <input type="text" name="categoryName" id="categoryname" className="tasksCard_oneContainer_inputContainer_input" placeholder="Ajouter une tâche"/>

                <div className="tasksCard_oneContainer_inputContainer_buttons">
                    <button className="iconsButton">
                        <img src={imgValidate} alt="icon de validation"/>
                    </button>
                </div>
                

                </div>
                <div className="tasksCard_tasksListContainer">
                    <div className="tasksCard_tasksListContainer_aTask">
                        <div className="tasksCard_tasksListContainer_aTask_content">
                            <input type="checkbox"/>
                            <label htmlFor=""> task 1</label>
                        </div>
                        <div className="tasksCard_tasksListContainer_aTask_buttonContainer">
                        <button className="iconsButton">
                                <img src={imgDelete} alt="icon de validation"/>
                        </button>
                         </div>
                    </div>

{/* test */}
                    <div className="tasksCard_tasksListContainer_aTask">
                        <div className="tasksCard_tasksListContainer_aTask_content">
                            <input type="checkbox"/>
                            <label htmlFor=""> task 1</label>
                        </div>
                        <div className="tasksCard_tasksListContainer_aTask_buttonContainer">
                        <button className="iconsButton">
                                <img src={imgDelete} alt="icon de validation"/>
                        </button>
                         </div>
                    </div>
                    <div className="tasksCard_tasksListContainer_aTask">
                        <div className="tasksCard_tasksListContainer_aTask_content">
                            <input type="checkbox"/>
                            <label htmlFor=""> task 1</label>
                        </div>
                        <div className="tasksCard_tasksListContainer_aTask_buttonContainer">
                        <button className="iconsButton">
                                <img src={imgDelete} alt="icon de validation"/>
                        </button>
                         </div>
                    </div>
                    <div className="tasksCard_tasksListContainer_aTask">
                        <div className="tasksCard_tasksListContainer_aTask_content">
                            <input type="checkbox"/>
                            <label htmlFor=""> task 1</label>
                        </div>
                        <div className="tasksCard_tasksListContainer_aTask_buttonContainer">
                        <button className="iconsButton">
                                <img src={imgDelete} alt="icon de validation"/>
                        </button>
                         </div>
                    </div>
                    <div className="tasksCard_tasksListContainer_aTask">
                        <div className="tasksCard_tasksListContainer_aTask_content">
                            <input type="checkbox"/>
                            <label htmlFor=""> task 1</label>
                        </div>
                        <div className="tasksCard_tasksListContainer_aTask_buttonContainer">
                        <button className="iconsButton">
                                <img src={imgDelete} alt="icon de validation"/>
                        </button>
                         </div>
                    </div>
                    <div className="tasksCard_tasksListContainer_aTask">
                        <div className="tasksCard_tasksListContainer_aTask_content">
                            <input type="checkbox"/>
                            <label htmlFor=""> task 1</label>
                        </div>
                        <div className="tasksCard_tasksListContainer_aTask_buttonContainer">
                        <button className="iconsButton">
                                <img src={imgDelete} alt="icon de validation"/>
                        </button>
                         </div>
                    </div><div className="tasksCard_tasksListContainer_aTask">
                        <div className="tasksCard_tasksListContainer_aTask_content">
                            <input type="checkbox"/>
                            <label htmlFor=""> task 1</label>
                        </div>
                        <div className="tasksCard_tasksListContainer_aTask_buttonContainer">
                        <button className="iconsButton">
                                <img src={imgDelete} alt="icon de validation"/>
                        </button>
                         </div>
                    </div><div className="tasksCard_tasksListContainer_aTask">
                        <div className="tasksCard_tasksListContainer_aTask_content">
                            <input type="checkbox"/>
                            <label htmlFor=""> task 1</label>
                        </div>
                        <div className="tasksCard_tasksListContainer_aTask_buttonContainer">
                        <button className="iconsButton">
                                <img src={imgDelete} alt="icon de validation"/>
                        </button>
                         </div>
                    </div><div className="tasksCard_tasksListContainer_aTask">
                        <div className="tasksCard_tasksListContainer_aTask_content">
                            <input type="checkbox"/>
                            <label htmlFor=""> task 1</label>
                        </div>
                        <div className="tasksCard_tasksListContainer_aTask_buttonContainer">
                        <button className="iconsButton">
                                <img src={imgDelete} alt="icon de validation"/>
                        </button>
                         </div>
                    </div><div className="tasksCard_tasksListContainer_aTask">
                        <div className="tasksCard_tasksListContainer_aTask_content">
                            <input type="checkbox"/>
                            <label htmlFor=""> task 1</label>
                        </div>
                        <div className="tasksCard_tasksListContainer_aTask_buttonContainer">
                        <button className="iconsButton">
                                <img src={imgDelete} alt="icon de validation"/>
                        </button>
                         </div>
                    </div><div className="tasksCard_tasksListContainer_aTask">
                        <div className="tasksCard_tasksListContainer_aTask_content">
                            <input type="checkbox"/>
                            <label htmlFor=""> task 1</label>
                        </div>
                        <div className="tasksCard_tasksListContainer_aTask_buttonContainer">
                        <button className="iconsButton">
                                <img src={imgDelete} alt="icon de validation"/>
                        </button>
                         </div>
                    </div><div className="tasksCard_tasksListContainer_aTask">
                        <div className="tasksCard_tasksListContainer_aTask_content">
                            <input type="checkbox"/>
                            <label htmlFor=""> task 1</label>
                        </div>
                        <div className="tasksCard_tasksListContainer_aTask_buttonContainer">
                        <button className="iconsButton">
                                <img src={imgDelete} alt="icon de validation"/>
                        </button>
                         </div>
                    </div><div className="tasksCard_tasksListContainer_aTask">
                        <div className="tasksCard_tasksListContainer_aTask_content">
                            <input type="checkbox"/>
                            <label htmlFor=""> task 1</label>
                        </div>
                        <div className="tasksCard_tasksListContainer_aTask_buttonContainer">
                        <button className="iconsButton">
                                <img src={imgDelete} alt="icon de validation"/>
                        </button>
                         </div>
                    </div><div className="tasksCard_tasksListContainer_aTask">
                        <div className="tasksCard_tasksListContainer_aTask_content">
                            <input type="checkbox"/>
                            <label htmlFor=""> task 1</label>
                        </div>
                        <div className="tasksCard_tasksListContainer_aTask_buttonContainer">
                        <button className="iconsButton">
                                <img src={imgDelete} alt="icon de validation"/>
                        </button>
                         </div>
                    </div>

                    
                </div>
                

            </div>
        </>
    )
}
