import { useState } from 'react';
import TopCircle from './MainPage/TopCircle';
import TaskArea from './MainPage/TaskArea';
import BottomCircle from "./MainPage/BottomCircle";
import DropDown from './DropDown/DropDown';
import '../CSS/App.css';
import '../CSS/Scroll.css'

let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);

function App() {
    const [dropDown, setDropDown] = useState("hide")
    const [animation, setAnimation] = useState("");
    const [selectedTask, setSelectedTask] = useState(-1);

    if (!localStorage.getItem('tasks')) {
        localStorage.setItem('tasks', JSON.stringify([]));
    }

    const open = () => { setDropDown('show'); };
    const close = () => { setDropDown('hide'); };
    const select = (i) => { setSelectedTask(i); close(); }

    return (
        <>
            <TopCircle onClick={() => {open(); setAnimation('topAnim');}}/>
            <TaskArea select={select} task={selectedTask}/>
            <BottomCircle onClick={() => { open();  setAnimation('bottomAnim');}}/>
            <DropDown selected={selectedTask} select={select} close={() => close()} show={dropDown} animation={animation}/>
        </>
    );
}

export default App;