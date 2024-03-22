import { useState } from 'react';
import { setupDB, setupStyles } from './API/additional';
import BottomCircle from './MainPage/BottomCircle';
import DropDown from './DropDown/DropDown';
import TaskArea from './MainPage/TaskArea';
import TopCircle from './MainPage/TopCircle';
import '../CSS/animations.css';
import '../CSS/bootstrap-like.css';
import '../CSS/global.css';
import '../CSS/text.css';

setupStyles();
setupDB();

function App() {
    const [dropDown, setDropDown] = useState('hide')
    const [animation, setAnimation] = useState('');
    const [selectedTask, setSelectedTask] = useState(-1);

    const open = (anim) => { setDropDown('show'); setAnimation(anim); };
    const close = () => { setDropDown('hide'); };
    const select = (i) => { setSelectedTask(i); close(); }

    return (
        <>
            <TopCircle onClick={ () => {open('topAnim')} }/>
            <TaskArea select={select} task={selectedTask}/>
            <BottomCircle onClick={ () => {open('bottomAnim')} }/>
            <DropDown selected={selectedTask} select={select} close={ () => close() } show={dropDown} animation={animation}/>
        </>
    );
}

export default App;