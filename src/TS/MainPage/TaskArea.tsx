import Task from "../Task/Task";
import TaskHint from "./TaskHint";
import '../../CSS/taskArea.css';

function TaskArea( { task }: {task: number}) {

    return (
        <section className="h-40 flex-container">
            {
                task >= 0
                ? <Task looped={false} index={task} data={ JSON.parse(localStorage.getItem('tasks') as string)[task] }/>
                : <TaskHint/>
            }
        </section>
    );
}

export default TaskArea;