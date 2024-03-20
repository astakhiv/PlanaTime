import "../CSS/Task/Task.css";
import EditForm from "./EditFrom";
import { preventDefault } from "./preventDefault";

function Task({index, open, opened, object}) {

    const deleteTask = (e) => {
        preventDefault(e);
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        open(-2);
    }

    return (
        <div className={`task ${opened ? "taskOpened" : "taskClosed"}`}>
            <div>
                <button onClick={deleteTask}>Delete</button>
                <button onClick={() => open(index)}>{opened ? "Close" : "Open"}</button>
            </div>
            {opened ? <EditForm index={index} task={object} open={open}/> : object.name}
        </div>
    );
}

export default Task;