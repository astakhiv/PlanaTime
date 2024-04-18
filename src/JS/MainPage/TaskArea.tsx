import { changeProperty } from "../utils/api";
import Task from "../Task/Task";
import TaskHint from "./TaskHint";
import '../../CSS/taskArea.css';

interface TaskAreaProps {
    select: (i: number) => void,
    task: number,
}

function TaskArea( {select, task}: TaskAreaProps) {
    const complete = () => {
        changeProperty({index: task, prop: 'completed', value: true});
        select(-1);
    };

    const props = {
        index: task,
        states: { opened: false, selected: true},
        actions: {
            onDoubleClick: () => complete()
        },
    };

    const taskObject = JSON.parse(localStorage.getItem('tasks') as string)[task];

    return (
        <section className="h-40 flex-container">
            {
                task >= 0
                ? <Task looped={false} index={props.index} states={props.states} actions={props.actions} data={taskObject}/>
                : <TaskHint/>
            }
        </section>
    );
}

export default TaskArea;