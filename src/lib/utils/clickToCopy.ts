export const clickToCopy = (node: HTMLElement, target?: string ) => {
    const copyText = async () => {
        const text = target
            ? document.querySelector<HTMLElement>(target)?.innerText
            : node.innerText;

        

        try {
            if (text) await navigator.clipboard.writeText(text);

            node.dispatchEvent(
                new CustomEvent('copysuccess', {
                    bubbles: true,
                    detail: text,
                })
            );
        } catch (error) {
            node.dispatchEvent(
                new CustomEvent('copyerror', {
                    bubbles: true,
                    detail: error,
                })
            );
        }
    }

    node.addEventListener('click', copyText);

    return {
        destroy() {
            node.removeEventListener('click', copyText);
        },
    };
}
