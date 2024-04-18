import { useState } from "react";
import { preventDefault } from "../utils/additional";
import { writeToLocalStorage } from "../utils/api";
import TaskList from "./TaskList";
import addButton from "../../Images/add.png";
import '../../CSS/dropDown.css';

interface DropDownParams {
    selected: number,
    select: (i: number) => void,
    close: () => void,
    show: string,
    animation: string
}

function DropDown( {selected, select, close, show, animation} : DropDownParams) {
    const [opened, setOpened] = useState(-2);

    const openTask = (task: number) => { setOpened(task === opened ? -1 : task) };

    const addTask = (e: React.MouseEvent<HTMLElement>) => {
        preventDefault(e);
        writeToLocalStorage({index: -1});
        setOpened(JSON.parse(localStorage.getItem('tasks') as string).length - 1);
    };

    const closeDropDown = (e: React.MouseEvent<HTMLElement>) => {
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
                    tasks={ JSON.parse(localStorage.getItem('tasks') as string) }/>
            </div>
            {animation === "bottomAnim" && <button style={{backgroundImage: `url(${addButton})`}} onClick={ addTask } className={"imgButton addButton " + show}></button>}
        </section>
    );
}

export default DropDown;