import EditForm from "./EditFrom";
import { TaskContext, OpenedTaskContext } from "../Contexts/task.contexts";
import { useContext } from "react";
import { preventDefault } from "../utils/additional";
import { changeProperty, deleteFromLocalStorage } from "../utils/api";
import deleteButton from "../../Images/delete.png";
import openButton from "../../Images/open.png";
import closeButton from "../../Images/close.png";
import '../../CSS/task.css';

interface TodoTask {
    name: string,
    description: string,
    completed: boolean,
}

interface TaskProps {
    looped: boolean,
    index: number,
    data: TodoTask
}

function Task( {looped, index, data}: TaskProps  ) {
    const { select, selectedTask } = useContext(TaskContext);
    const { open, openedTask} = useContext(OpenedTaskContext);

    const selected = index === selectedTask;
    const opened = index === openedTask && looped;

    const openTask = (e: React.MouseEvent<HTMLElement>) => {
        preventDefault(e);
        open(index);
    };

    const close = () => { open(-2) };

    const onDoubleClick = () => {
        changeProperty({index: index, prop: 'completed', value: !looped});
        select(looped ? index : -1);
    }

    const deleteTask = (e: React.MouseEvent<HTMLElement>) => {
        preventDefault(e);
        select(-1);

        deleteFromLocalStorage( {index} );
        close();
    };

    const shortenName = (s: string): string => {
        if (s.length > 8) {
            s = s.slice(0, 8) + '…';
        }

        return s;
    };

    return (
        <div className={`gradientBG task flex-container large
                        ${data.completed ? "o-50" : "o-100"}
                        ${opened ? "taskOpened h-90" : "taskClosed h-20"}
                        ${selected && !looped ? "taskSelected h-80": ""}`
                        } onDoubleClick={onDoubleClick}>
            {
                looped
                ? <>
                    {
                        opened
                        ? <EditForm index={index} task={data} close={ close }/>
                        : <span className={`${looped ? 'taskName' : 'selectedTaskName'}`}>{shortenName(data.name)}</span>
                    }
                    {
                        !looped && data.description && <span>{data.description}</span>
                    }
                </>
                : <>
                    <div>
                        <h2 className="selectedTaskName">{data.name}</h2>
                        {data.description && <p className="taskDescription">{data.description}</p>}
                    </div>
                </>
            }
            {
                (!selected || looped) &&
                <div className={`buttons w-100 ${opened ? 'h-10' : 'h-45'}`}>
                    <button style={{backgroundImage: `url(${opened ? closeButton : openButton})`}} className={"imgButton h-45"} onClick={openTask}/>
                    <button style={{backgroundImage: `url(${deleteButton})`}} className={"imgButton h-45"} onClick={deleteTask}/>
                </div>
            }
        </div>
    );
}

export default Task;