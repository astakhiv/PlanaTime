interface MenuButtonParams {
    styles: string,
    children?: React.ReactNode,
    onClick: () => void,
}

function MenuButton({styles, children, onClick}: MenuButtonParams) {
    return (
        <button className={"gradientBG button " + styles} onClick={onClick}>
            {children}
        </button>
    );
}

export default MenuButton;