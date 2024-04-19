import EditForm from "./EditFrom";
import { preventDefault } from "../utils/additional";
import { deleteFromLocalStorage } from "../utils/api";
import deleteButton from "../../Images/delete.png";
import openButton from "../../Images/open.png";
import closeButton from "../../Images/close.png";
import '../../CSS/task.css';

interface TodoTask {
    name: string,
    description: string,
    completed: boolean,
}

interface TaskProps {
    looped: boolean,
    index: number,
    key?: number,
    states: {opened: boolean, selected: boolean},
    actions: {
        open?: () => void,
        close?: () => void,
        select?: () => void,
        reset?: () => void,
        onDoubleClick: () => void,
    },
    data: TodoTask
}

function Task( {looped, index, states, actions, data}: TaskProps  ) {

    const deleteTask = (e: React.MouseEvent<HTMLElement>) => {
        preventDefault(e);
        if (states.selected && actions.reset) {
            actions.reset();
        }
        deleteFromLocalStorage({index});
        if (actions.close) {
            actions.close();
        }
    };

    const openTask = (e: React.MouseEvent<HTMLElement>) => {
        preventDefault(e);
        if (actions.open) {
            actions.open();
        }
    };

    return (
        <div className={`gradientBG task flex-container large ${data.completed ? "o-50" : "o-100"} ${states.opened ? "taskOpened h-90" : "taskClosed h-20"} ${states.selected && !looped ? "taskSelected taskInProgress h-40": ""}`} onDoubleClick={() => {actions.onDoubleClick()}}>
            {
            (!states.selected || looped) &&
            <div className={`buttons w-100 ${states.opened ? 'h-10' : 'h-45'}`}>
                <button style={{backgroundImage: `url(${states.opened ? closeButton : openButton})`}} className={"imgButton h-45"} onClick={openTask}/>
                <button style={{backgroundImage: `url(${deleteButton})`}} className={"imgButton h-45"} onClick={deleteTask}/>
            </div>
            }
            {
                states.opened
                ? <EditForm index={index} task={data} close={actions.close ? actions.close : () => {}}/>
                : <span className="taskName">{data.name}</span>
            }
        </div>
    );
}

export default Task;