import MenuButton from "./MenuButton";
import "../CSS/App.css"

function BottomCircle({ onClick }) {
    return (
        <section className="section BottomCircle">
            <MenuButton styles="downButton" onClick={onClick}/>
        </section>
    )
}

export default BottomCircle;