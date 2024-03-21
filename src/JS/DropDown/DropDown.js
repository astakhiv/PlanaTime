import { useState } from "react";
import TaskList from "./TaskList";
import { preventDefault } from "../preventDefault";
import "../../CSS/DropDown/DropDown.css";
import { writeToLocalStorage } from "../api";

function DropDown( {selected, select, close, show, animation} ) {
    const [opened, setOpened] = useState(-1);

    const openTask = (task) => {
        setOpened(task === opened ? -1 : task);
    }

    const closeTask = (e) => {
        preventDefault(e);
        setOpened(-1);
        close();
    }

    const addTask = (e) => {
        preventDefault(e);
        writeToLocalStorage(-1, '', '');
        setOpened(JSON.parse(localStorage.getItem('tasks')).length - 1);
    }


    return (
        <section onClick={ (e) => closeTask(e) } className={"shadow " + show}>
            <div onClick={ (e) => preventDefault(e) } className={"dropDown " + animation}>
                <TaskList
                    select={animation === "topAnim" ? () => {} : select}
                    selected={selected}
                    open={ openTask }
                    opened={ opened }
                    completed={animation === "topAnim"}
                    tasks={ JSON.parse(localStorage.getItem('tasks')) }/>
            </div>
            {animation === "bottomAnim" && <button onClick={ (e) => addTask(e) } className={"addButton " + show}></button>}
        </section>
    );
}

export default DropDown;