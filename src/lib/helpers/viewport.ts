let intersectionObserver: IntersectionObserver;

function ensureIntersectionObserver() {
	if (intersectionObserver) return;

	intersectionObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			const eventName = entry.isIntersecting ? 'enter' : 'exit';
			entry.target.dispatchEvent(new CustomEvent(eventName));
		});
	});
}

export default function viewport(element: Element) {
	ensureIntersectionObserver();

	intersectionObserver.observe(element);

	return {
		destroy() {
			intersectionObserver.unobserve(element);
		}
	};
}
