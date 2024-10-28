export function trapFocus(node: HTMLElement) {
	const focusableElements = () => Array.from(node.querySelectorAll('command.item, [tabindex]:not([tabindex="-1"])'));

	function handleKeydown(event: KeyboardEvent) {
		if (event.key !== 'Tab') return;

		const elements = focusableElements();
        const first = elements[0] as HTMLElement;
        const last = elements[elements.length - 1] as HTMLElement;
        const current = document.activeElement;

		if (event.shiftKey && current === first) {
			(last as HTMLElement)?.focus();
			event.preventDefault();
		}

		if (!event.shiftKey && current === last) {
			(first as HTMLElement)?.focus();
			event.preventDefault();
		}
	}

	// $effect(() => {
	// 	(focusable()[0] as HTMLElement)?.focus();
	// 	node.addEventListener('keydown', handleKeydown);

	// 	return () => {
	// 		node.removeEventListener('keydown', handleKeydown);
	// 		(previous as HTMLElement)?.focus();
	// 	};
	// });
    
	node.addEventListener('keydown', handleKeydown);

    return {
        destroy() {
            node.removeEventListener('keydown', handleKeydown);
        }
    };

}