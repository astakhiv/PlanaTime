import TaskList from "./TaskList";
import "../CSS/DropDown/DropDown.css";

function preventDefault(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
}

function DropDown({close, show, animation}) {
    return (
        <section onClick={close} className={"shadow " + show}>
            <div onClick={ (e) => preventDefault(e) } className={"dropDown " + animation}>
                <TaskList/>
            </div>
            {animation === "bottomAnim" && <button onClick={ (e) => preventDefault(e) } className={"addButton " + show}></button>}
        </section>
    );
}

export default DropDown;