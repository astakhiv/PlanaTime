import "../CSS/Task/Task.css";
import "../CSS/Task/ControlButtons.css";
import EditForm from "./DropDown/EditFrom";
import { preventDefault } from "./preventDefault";
import { changeProperty, deleteFromLocalStorage } from "./api";


function Task( {looped, index, states, actions, data} ) {

    const deleteTask = (e) => {
        preventDefault(e);
        if (states.selected) {
            alert("deleted");
            actions.select(-1);
        }
        deleteFromLocalStorage(index);
        actions.open(-2);
    };

    const openTask = (e) => {
        preventDefault(e);
        actions.open(index);
    };

    const onDoubleClick = () => {
        if (data.completed) {
            changeProperty(index, "completed", false);
            actions.open(-2);
        } else {
            actions.select(index);
        }
    };

    return (
        <div className={`task ${data.completed ? "taskCompleted" : "taskToDo"} ${states.opened ? "taskOpened" : "taskClosed"} ${states.selected && !looped ? "taskSelected": ""}`} onDoubleClick={onDoubleClick}>
            {
            (!states.selected || looped) &&
            <div className={"buttons " + (states.opened ? "buttonsOpened" : "buttonsClosed")}>
                <button className={"taskButton openCloseButton " + (states.opened ? "closeButton" : "openButton")} onClick={openTask}/>
                <button className={"taskButton deleteButton " + (states.opened ? "deleteButtonOpened" : "deleteButtonClosed")} onClick={deleteTask}/>
            </div>
            }
            {states.opened ? <EditForm index={index} task={data} open={actions.open}/> : data.name}
        </div>
    );
}

export default Task;