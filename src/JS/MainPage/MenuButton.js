function MenuButton({styles, children, onClick}) {
    return (
        <button className={"gradientBG button " + styles} onClick={onClick}>
            {children}
        </button>
    );
}

export default MenuButton;