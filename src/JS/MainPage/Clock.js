import { useState } from "react";
import "../../CSS/Clock/color.css";
import "../../CSS/Clock/structure.css";

function Clock() {
    let time = new Date().toLocaleTimeString([],  { hour12: false });

    const [ctime, setTime] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString([], { hour12: false } );
        setTime(time);
    };

    setInterval(UpdateTime);
    return (
        <span className="time">{ctime}</span>
    );
}

export default Clock;