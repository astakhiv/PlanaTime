import { createContext } from "react";

const TaskContext = createContext({
    selected: -1,
    select: (i:number) => {}
});


export default TaskContext;