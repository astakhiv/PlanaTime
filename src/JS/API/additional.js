export function preventDefault(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
}

export function setupStyles() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

export function setupDB() {
    if (!localStorage.getItem('tasks')) {
        localStorage.setItem('tasks', JSON.stringify([]));
    }
}