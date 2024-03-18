import MenuButton from "./MenuButton";
import Clock from "./Clock";
import "../CSS/App.css"

function TopCircle() {
    return (
        <section className="section TopCircle">
            <MenuButton styles="topButton">
                <Clock/>
            </MenuButton>
        </section>
    )
}

export default TopCircle;