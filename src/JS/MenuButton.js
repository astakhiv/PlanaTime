import "../CSS/MenuButtons/animation.css";
import "../CSS/MenuButtons/color.css";
import "../CSS/MenuButtons/structure.css";

function MenuButton({styles, children}) {
    return (
        <>
            <button className={"bg button "+styles}>{children}</button>
        </>
    );
}

export default MenuButton;