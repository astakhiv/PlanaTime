import "../CSS/Task/Task.css";

function Task({object}) {
    return (
        <button className="task">{object.name}</button>
    );
}

export default Task;