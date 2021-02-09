import React from "react";

import TasksCard from "../organisms/TasksCard";
// import Horloge from "../atoms/Horloge";
import ListCard from "../molecules/ListCard";

export default function TasksPage() {
    return (
        <>
                {/* <Horloge /> */}

            <div className="tasksContainer">
                <TasksCard />

                <div className="sameCategoryContainer">
                    <h3>Dans la même catégorie:</h3>

                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                </div>
            </div>

            
            
        </>
    )
}
