import { preventDefault } from "../preventDefault";
import "../../CSS/EditForm/EditForm.css";
import { writeToLocalStorage } from "../api";

function EditForm({index, task, open}) {
    const saveTask = (e) => {
        preventDefault(e);
        const form = e.currentTarget.elements;
        writeToLocalStorage(index, form.name.value,form.description.value );
        open(-1);
    }

    return (
            <form className="form" action="" onSubmit={saveTask} onClick={preventDefault}>
                <input autoFocus={true} className="input nameInput" type="text" name="name" defaultValue={task.name} required></input>
                <textarea className="input descriptionInput" type="text" name="description" defaultValue={task.description}></textarea>
                <input className="input save" type="submit" value={"Save"}></input>
            </form>
    );
}

export default EditForm;