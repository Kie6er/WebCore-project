const showBtn = document.querySelectorAll("[data-show]");

export function showElement() {
	showBtn.forEach((el) => {
		let blockID = el.getAttribute('data-show');
		let textBtn = el.querySelector('[data-showText]');
		let textDefaultBtn = textBtn.getAttribute('data-showText');
		const element = document.querySelector(blockID);

		el.addEventListener('click', function () {
			if (!element.classList.contains('show')) {
				el.classList.add('show');
				expandElement(element, 'show');
				textBtn.textContent = 'Скрыть';
			} else if (element.classList.contains('show')) {
				el.classList.remove('show');
				expandElement(element, 'show');
				textBtn.textContent = textDefaultBtn;
			}
		});

		window.addEventListener('resize', () => {
			element.style = "";
		});
	});
}

function expandElement(elem, collapseClass) {
	// debugger;
	elem.style.height = '';
	elem.style.transition = 'none';

	const startHeight = window.getComputedStyle(elem).height;

	// Remove the collapse class, and force a layout calculation to get the final height
	elem.classList.toggle(collapseClass);
	const height = window.getComputedStyle(elem).height;

	// Set the start height to begin the transition
	elem.style.height = startHeight;

	// wait until the next frame so that everything has time to update before starting the transition
	requestAnimationFrame(() => {
		elem.style.transition = '';

		requestAnimationFrame(() => {
			elem.style.height = height
		})
	})
}