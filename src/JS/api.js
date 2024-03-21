export function deleteFromLocalStorage(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    tasks.splice(index, 1);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function writeToLocalStorage(index, name, description) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    if (index === -1) {
        tasks.push({
            name: name,
            description: description,
        })
    } else {
        tasks[index].name = name;
        tasks[index].description = description;
        tasks[index].completed = tasks[index].completed ? tasks[index].completed : false;
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function changeProperty(index, name, value) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    tasks[index][name] = value;

    localStorage.setItem("tasks", JSON.stringify(tasks));
}