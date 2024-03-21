import "../../CSS/MenuButtons/animation.css";
import "../../CSS/MenuButtons/color.css";
import "../../CSS/MenuButtons/structure.css";

function MenuButton({styles, children, onClick}) {
    return (
        <button className={"bg button " + styles} onClick={onClick}>{children}</button>
    );
}

export default MenuButton;