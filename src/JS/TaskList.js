import Task from "./Task";
import "../CSS/TaskList/TaskList.css";

function TaskList() {
    let obj = {
        name: "Task1"
    };

    return (
        <div className="taskList">
            <Task object={obj}/>
            <Task object={obj}/>
            <Task object={obj}/>
            <Task object={obj}/>
            <Task object={obj}/>
        </div>
    );
}

export default TaskList;