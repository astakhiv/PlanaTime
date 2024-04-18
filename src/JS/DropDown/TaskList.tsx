import { changeProperty } from "../utils/api";
import Task from "../Task/Task";

interface TodoTask {
    name: string,
    description: string,
    completed: boolean,
}

interface TaskListProps {
    select: (i: number) => void,
    selected: number,
    open: (task: number) => void,
    openedTask: (number),
    completed: boolean,
    tasks: TodoTask[],
}

function TaskList({ select, selected, open, openedTask, completed, tasks}: TaskListProps) {

    return (
        <div className="taskList w-80 h-90">
            {
                tasks.map((task, index: number) => {
                        const props = {
                            index: index,
                            states: {
                                opened: index === openedTask,
                                selected: index === selected
                            },
                            actions: {
                                open: () => open(index),
                                close: () => open(-2),
                                select: () => select(index),
                                reset: () => select(-1),
                                onDoubleClick: () => {
                                    if (completed) {
                                        changeProperty({index: index, prop:"completed", value:false});
                                        open(-2);
                                    } else {
                                        select(index);
                                    }
                                }
                            },
                        }

                        return completed
                        ? task.completed && <Task looped={true} key={index} index={props.index} states={props.states} actions={props.actions} data={task}/>
                        : !task.completed && <Task looped={true} key={index} index={props.index} states={props.states} actions={props.actions} data={task}/>
                    }
                )
            }
        </div>
    );
}

export default TaskList;