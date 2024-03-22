import MenuButton from "./MenuButton";
import '../../CSS/circleButtons.css';

function BottomCircle({ onClick }) {
    return (
        <section className="h-20">
            <MenuButton styles="downButton" onClick={onClick}/>
        </section>
    );
}

export default BottomCircle;