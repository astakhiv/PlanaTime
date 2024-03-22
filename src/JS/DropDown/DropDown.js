import { useState } from "react";
import { preventDefault } from "../API/additional";
import { writeToLocalStorage } from "../API/api";
import TaskList from "./TaskList";
import addButton from "../../Images/add.png";
import '../../CSS/dropDown.css';

function DropDown( {selected, select, close, show, animation} ) {
    const [opened, setOpened] = useState(-2);

    const openTask = (task) => { setOpened(task === opened ? -1 : task) };

    const addTask = (e) => {
        preventDefault(e);
        writeToLocalStorage(-1);
        setOpened(JSON.parse(localStorage.getItem('tasks')).length - 1);
    };

    const closeDropDown = (e) => {
        preventDefault(e);
        setOpened(-1);
        close();
    };

    return (
        <section onClick={ (e) => closeDropDown(e) } className={"shadow h-100 w-100 " + show}>
            <div onClick={ (e) => preventDefault(e) } className={"darkBG h-80 flex-container dropDown " + animation}>
                <TaskList
                    select={select}
                    selected={selected}
                    open={openTask}
                    openedTask={opened}
                    completed={animation === "topAnim"}
                    tasks={ JSON.parse(localStorage.getItem('tasks')) }/>
            </div>
            {animation === "bottomAnim" && <button style={{backgroundImage: `url(${addButton})`}} onClick={ (e) => addTask(e) } className={"imgButton addButton " + show}></button>}
        </section>
    );
}

export default DropDown;