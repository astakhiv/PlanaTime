import MenuButton from "./MenuButton";
import Clock from "./Clock";
import '../../CSS/circleButtons.css';

interface CircleProps {
    onClick: () => void;
}

function TopCircle({onClick}: CircleProps) {
    return (
        <section className="h-40">
            <MenuButton styles="topButton flex-container" onClick={onClick}>
                <Clock/>
            </MenuButton>
        </section>
    );
}

export default TopCircle;