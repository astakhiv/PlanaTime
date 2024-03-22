import { preventDefault } from "../API/additional";
import { writeToLocalStorage } from "../API/api";
import '../../CSS/editForm.css';

function EditForm({index, task, close}) {
    const saveTask = (e) => {
        preventDefault(e);
        const form = e.currentTarget.elements;
        writeToLocalStorage(index, form.name.value, form.description.value);
        close();
    }

    return (
            <form className="h-80 w-100 flex-container" action="" onSubmit={saveTask} onClick={preventDefault}>
                <input autoFocus={true} className="large input h-20" type="text" name="name" defaultValue={task.name} required></input>
                <textarea className="medium input h-60" type="text" name="description" defaultValue={task.description}></textarea>
                <input className="input h-20 medium" type="submit" value={"Save"}></input>
            </form>
    );
}

export default EditForm;