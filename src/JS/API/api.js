function accessDB(func) {

    function inner(...args) {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        func(tasks, ...args);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    return inner;
}

function write(tasks, index, name='', description='') {
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

function change(tasks, index, name, value) {
    tasks[index][name] = value;
}

function del(tasks, index) {
    tasks.splice(index, 1)
}


export const writeToLocalStorage = accessDB(write);
export const changeProperty = accessDB(change);
export const deleteFromLocalStorage = accessDB(del);