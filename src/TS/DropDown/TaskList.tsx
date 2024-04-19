import { changeProperty } from "../utils/api";
import Task from "../Task/Task";
import TaskContext from "../Contexts/task.contexts";
import { useContext } from "react";

interface TodoTask {
    name: string,
    description: string,
    completed: boolean,
}

interface TaskListProps {
    open: (task: number) => void,
    openedTask: (number),
    tasks: TodoTask[],
    completed: boolean,
}

function TaskList({ open, openedTask, tasks, completed}: TaskListProps) {
    const { select, selected } = useContext(TaskContext);

    return (
        <div className="taskList w-80 h-90">
            {
                tasks.map((task: TodoTask, index: number) => {
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
                                    if (task.completed) {
                                        changeProperty({index: index, prop:"completed", value:false});
                                        select(-2);
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