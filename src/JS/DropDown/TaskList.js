import { changeProperty } from "../API/api";
import Task from "../Task/Task";

function TaskList({ select, selected, open, openedTask, completed, tasks}) {

    return (
        <div className="taskList w-80 h-90">
            {
                tasks.map((task, index) => {
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
                                        changeProperty(index, "completed", false);
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