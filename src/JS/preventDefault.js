export function preventDefault(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
}
