import Task from "../Task";
import "../../CSS/App.css"
import TaskHint from "./TaskHint";

function TaskArea({select, task}) {
    const complete = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks[task].completed = true;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        select(-1);
    }

    const props = {
        index: task,
        states: {
            opened: false,
            selected: true
        },
        actions: {
            open: undefined,
            select: () => complete()
        },
    }
    const taskObject = JSON.parse(localStorage.getItem('tasks'))[task];

    return (
        <section className="taskArea">
            {
                task >= 0
                ? <Task looped={false} index={props.index} states={props.states} actions={props.actions} data={taskObject}/>
                : <TaskHint/>
            }
        </section>
    )
}

export default TaskArea;