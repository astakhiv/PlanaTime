import { preventDefault } from "../utils/additional";
import { writeToLocalStorage } from "../utils/api";
import '../../CSS/editForm.css';
import React from "react";

interface TodoTask {
    name: string,
    description: string,
    completed: boolean,
}

interface EditFormProps {
    index: number,
    task: TodoTask,
    close: () => void
}

function EditForm({index, task, close}: EditFormProps) {
    const saveTask = (e: React.FormEvent<HTMLFormElement>) => {
        preventDefault(e);
        const form = e.currentTarget.elements;
        writeToLocalStorage({index: index, name: (form[0] as HTMLInputElement).value, description: (form[1] as HTMLInputElement).value});
        close();
    }

    return (
            <form className="h-80 w-100 flex-container" action="" onSubmit={saveTask} onClick={preventDefault}>
                <input autoFocus={true} className="large input h-20" type="text" name="name" defaultValue={task.name} required></input>
                <textarea className="medium input h-60" name="description" defaultValue={task.description}></textarea>
                <input className="input h-20 medium" type="submit" value={"Save"}></input>
            </form>
    );
}

export default EditForm;