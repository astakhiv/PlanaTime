import { preventDefault } from "./preventDefault";
import "../CSS/EditForm/EditForm.css";

function EditForm({index, task, open}) {
    const saveTask = (e) => {
        preventDefault(e);
        const form = e.currentTarget.elements;
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks[index].name = form.name.value;
        tasks[index].description = form.description.value;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        open(-1);
    }

    return (
            <form className="form" action="" onSubmit={saveTask} onClick={(e) => preventDefault(e)}>
                <input className="input nameInput" type="text" name="name" defaultValue={task.name} required></input>
                <textarea className="input descriptionInput" type="text" name="description" defaultValue={task.description}></textarea>
                <input className="save" type="submit" value={"Save"}></input>
            </form>
    );
}

export default EditForm;