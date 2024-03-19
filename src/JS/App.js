import TopCircle from './TopCircle';
import TaskArea from './TaskArea';
import BottomCircle from './BottomCircle';
import DropDown from './DropDown';
import '../CSS/App.css';
import '../CSS/Scroll.css'
import { useState } from 'react';

function App() {
    const [dropDown, setDropDown] = useState("hide")
    const [animation, setAnimation] = useState("");

    const open = () => { setDropDown('show'); };
    const close = () => {
        setDropDown('hide')
    };

    return (
        <>
            <TopCircle onClick={() => {open(); setAnimation('topAnim');}}/>
            <TaskArea/>
            <BottomCircle onClick={() => { open();  setAnimation('bottomAnim');}}/>
            <DropDown close={() => close()} show={dropDown} animation={animation}/>
        </>
    );
}

export default App;