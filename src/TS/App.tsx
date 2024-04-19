import { useState } from 'react';
import { setupDB, setupStyles } from './utils/additional';
import BottomCircle from './MainPage/BottomCircle';
import DropDown from './DropDown/DropDown';
import TaskArea from './MainPage/TaskArea';
import TopCircle from './MainPage/TopCircle';
import TaskContext from './Contexts/task.contexts';
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

    const open = (anim: string) => {
        setDropDown('show');
        setAnimation(anim);
    };
    const close = () => { setDropDown('hide'); };
    const select = (i: number) => { setSelectedTask(i); close(); }

    return (
        <>
            <TaskContext.Provider
                value={{
                    selected: selectedTask,
                    select: (i: number) => {setSelectedTask(i)}
                }}
                >
                <TopCircle onClick={ () => { open('topAnim') } }/>
                <TaskArea select={select} task={selectedTask}/>
                <BottomCircle onClick={ () => { open('bottomAnim') } }/>
                <DropDown close={ () => close() } show={dropDown} animation={animation}/>
            </TaskContext.Provider>
        </>
    );
}

export default App;