import "../CSS/Task/Task.css";
import { preventDefault } from "./preventDefault";

function Task({index, open, opened, object}) {
    const saveTask = (e) => {
        preventDefault(e);
        const form = e.currentTarget.elements;
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks[index].name = form.name.value;
        tasks[index].description = form.description.value;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        open(-1);
    }

    const deleteTask = (e) => {
        preventDefault(e);
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        open(-2);
    }

    const openedUI = (
        <form action="" onSubmit={saveTask} onClick={(e) => preventDefault(e)}>
            <input required type="text" name="name" defaultValue={object.name}></input>
            <textarea type="text" name="description" defaultValue={object.description}></textarea>
            <button type="submit">Save</button>
        </form>
    );

    return (
        <div className={`task ${opened ? "taskOpened" : "taskClosed"}`}>
            {opened ? openedUI : object.name}
            <div>
                <button onClick={deleteTask}>Delete</button>
                <button onClick={() => open(index)}>Open</button>
            </div>
        </div>
    );
}

export default Task;