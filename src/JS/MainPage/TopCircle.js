import MenuButton from "./MenuButton";
import Clock from "./Clock";
import '../../CSS/circleButtons.css';

function TopCircle({onClick}) {
    return (
        <section className="h-40">
            <MenuButton styles="topButton flex-container" onClick={onClick}>
                <Clock/>
            </MenuButton>
        </section>
    );
}

export default TopCircle;