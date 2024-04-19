import { createContext } from "react";

export const TaskContext = createContext({
    selectedTask: -1,
    select: (i:number) => {}
});

export const OpenedTaskContext = createContext({
    openedTask: -1,
    open: (i: number) => {}
});
