import { useState } from "react";
import { preventDefault } from "../utils/additional";
import { writeToLocalStorage } from "../utils/api";
import { OpenedTaskContext } from "../Contexts/task.contexts";
import TaskList from "./TaskList";
import addButton from "../../Images/add.png";
import '../../CSS/dropDown.css';

interface DropDownParams {
    close: () => void,
    show: string,
    animation: string
}

function DropDown( { close, show, animation} : DropDownParams) {
    const [openedTask, setOpenedTask] = useState(-2);

    const openTask = (i: number) => {
        setOpenedTask(i === openedTask ? -1 : i);
    };

    const addTask = (e: React.MouseEvent<HTMLElement>) => {
        preventDefault(e);
        writeToLocalStorage({index: -1});
        setOpenedTask(JSON.parse(localStorage.getItem('tasks') as string).length - 1);
    };

    const closeDropDown = (e: React.MouseEvent<HTMLElement>) => {
        preventDefault(e);
        setOpenedTask(-1);
        close();
    };

    return (
        <section onClick={ closeDropDown } className={"shadow h-100 w-100 " + show}>
            <div onClick={ preventDefault } className={"darkBG h-80 flex-container dropDown " + animation}>
                <OpenedTaskContext.Provider
                    value={{
                        openedTask: openedTask,
                        open: openTask
                    }}>
                    <TaskList completed={animation==="topAnim"}/>
                </OpenedTaskContext.Provider>
            </div>
            {
                animation === "bottomAnim"
                && <button style={{backgroundImage: `url(${addButton})`}} onClick={ addTask } className={"imgButton addButton " + show}></button>
            }
        </section>
    );
}

export default DropDown;