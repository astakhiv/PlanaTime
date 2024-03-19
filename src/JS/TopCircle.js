import MenuButton from "./MenuButton";
import Clock from "./Clock";
import "../CSS/App.css"

function TopCircle({onClick}) {
    return (
        <section className="section TopCircle">
            <MenuButton styles="topButton" onClick={onClick}>
                <Clock/>
            </MenuButton>
        </section>
    )
}

export default TopCircle;