import EditForm from "./EditFrom";
import { preventDefault } from "../API/additional";
import { deleteFromLocalStorage } from "../API/api";
import deleteButton from "../../Images/delete.png";
import openButton from "../../Images/open.png";
import closeButton from "../../Images/close.png";
import '../../CSS/task.css';

function Task( {looped, index, states, actions, data} ) {

    const deleteTask = (e) => {
        preventDefault(e);
        if (states.selected) {
            actions.reset();
        }
        deleteFromLocalStorage(index);
        actions.close();
    };

    const openTask = (e) => { preventDefault(e); actions.open(); };

    return (
        <div className={`gradientBG task flex-container large ${data.completed ? "o-50" : "o-100"} ${states.opened ? "taskOpened h-90" : "taskClosed h-20"} ${states.selected && !looped ? "taskSelected taskInProgress h-40": ""}`} onDoubleClick={actions.onDoubleClick}>
            {
            (!states.selected || looped) &&
            <div className={`buttons w-100 ${states.opened ? 'h-10' : 'h-45'}`}>
                <button style={{backgroundImage: `url(${states.opened ? closeButton : openButton})`}} className={"imgButton h-45"} onClick={openTask}/>
                <button style={{backgroundImage: `url(${deleteButton})`}} className={"imgButton h-45"} onClick={deleteTask}/>
            </div>
            }
            {
                states.opened
                ? <EditForm index={index} task={data} close={actions.close}/>
                : <span className="taskName">{data.name}</span>
            }
        </div>
    );
}

export default Task;