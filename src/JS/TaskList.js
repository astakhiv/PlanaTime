import Task from "./Task";
import "../CSS/TaskList/TaskList.css";

function TaskList({open, opened, tasks}) {

    return (
        <div className="taskList">
            {
                tasks.map((task, index) => {
                    return <Task key={index} index={index} open={open} opened={index === opened} object={task}/>
                    }
                )
            }
        </div>
    );
}

export default TaskList;