import Task from "../Task/Task";

interface TodoTask {
    name: string,
    description: string,
    completed: boolean,
}


function TaskList({ completed }: { completed: boolean }) {
    const tasks = JSON.parse(localStorage.getItem('tasks') as string);

    return (
        <div className="taskList w-80 h-90">
            {
                tasks.map((task: TodoTask, index: number) => {
                        return completed
                        ? task.completed && <Task looped={true} key={index} index={index} data={task}/>
                        : !task.completed && <Task looped={true} key={index} index={index} data={task}/>
                    }
                )
            }
        </div>
    );
}

export default TaskList;