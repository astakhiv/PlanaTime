import MenuButton from "./MenuButton";
import '../../CSS/circleButtons.css';

interface CircleParams {
    onClick: () => void;
}

function BottomCircle({ onClick }: CircleParams) {
    return (
        <section className="h-20">
            <MenuButton styles="downButton" onClick={onClick}/>
        </section>
    );
}

export default BottomCircle;