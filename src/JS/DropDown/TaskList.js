import Task from "../Task";
import "../../CSS/TaskList/TaskList.css";

function TaskList({ select, selected, open, opened, completed, tasks}) {

    return (
        <div className="taskList">
            {
                tasks.map((task, index) => {
                        const props = {
                            index: index,
                            states: {
                                opened: index === opened,
                                selected: index === selected
                            },
                            actions: {
                                open: open,
                                select: select
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