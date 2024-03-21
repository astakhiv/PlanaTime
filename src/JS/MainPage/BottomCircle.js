import MenuButton from "./MenuButton";
import "../../CSS/App.css";

function BottomCircle({ onClick }) {
    return (
        <section className="circle BottomCircle">
            <MenuButton styles="downButton" onClick={onClick}/>
        </section>
    )
}

export default BottomCircle;