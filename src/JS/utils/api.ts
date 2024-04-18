import { dblClick } from "@testing-library/user-event/dist/click";

interface dbFuncArgs {
    index: number,
    name?: string,
    description? : string,
    prop?: string,
    value?: string | boolean
};

function accessDB(func: (tasks: TodoTask[], params: dbFuncArgs) => void) {

    function inner(args: dbFuncArgs) {
        const tasks = JSON.parse(localStorage.getItem('tasks') as string);
        func(tasks, args);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    return inner;
}

interface TodoTask {
    [name: string]: string | boolean,
}

function write(tasks: TodoTask[], {index, name='', description=''}: dbFuncArgs) {
    if (index === -1) {
        tasks.push({
            name: name,
            description: description,
            completed: false
        })
    } else {
        tasks[index].name = name;
        tasks[index].description = description;
        tasks[index].completed = tasks[index].completed ? tasks[index].completed : false;
    }
}

function change(tasks: Array<TodoTask>, {index, prop, value}: dbFuncArgs) {
    if (prop && value) {
        tasks[index][prop] = value;
    }
}

function del(tasks: TodoTask[], {index}: dbFuncArgs) {
    tasks.splice(index, 1)
}


export const writeToLocalStorage = accessDB(write);
export const changeProperty = accessDB(change);
export const deleteFromLocalStorage = accessDB(del);