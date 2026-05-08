window.escapeRoom = (() => {
    let dotNetRef = null;

    function handleKeyDown(e) {
        if (!dotNetRef) return;
        if (e.key >= '0' && e.key <= '9') {
            dotNetRef.invokeMethodAsync('OnKeyDown', e.key);
        } else if (e.key === 'Backspace') {
            dotNetRef.invokeMethodAsync('OnKeyDown', '⌫');
        }
    }

    return {
        registerKeyboard(ref) {
            dotNetRef = ref;
            window.addEventListener('keydown', handleKeyDown);
        },
        unregisterKeyboard() {
            window.removeEventListener('keydown', handleKeyDown);
            dotNetRef = null;
        }
    };
})();
