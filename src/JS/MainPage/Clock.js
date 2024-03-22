import { useState } from "react";

function Clock() {
    let time = new Date().toLocaleTimeString([],  { hour12: false });

    const [ctime, setTime] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString([], { hour12: false } );
        setTime(time);
    };

    setInterval(UpdateTime);
    return (
        <span className="xLarge w-100">{ctime}</span>
    );
}

export default Clock;