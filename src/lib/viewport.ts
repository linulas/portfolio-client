let constantObserver: IntersectionObserver;
let oneTimeObserver: IntersectionObserver;

interface options {
	unobserveAfterEnter: boolean;
}

function ensureIntersectionObserver({ unobserveAfterEnter }: options) {
	if (unobserveAfterEnter) {
		if (oneTimeObserver) return;

		oneTimeObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				const eventName = entry.isIntersecting ? 'enter' : 'exit';
				entry.target.dispatchEvent(new CustomEvent(eventName));

				if (eventName === 'enter') oneTimeObserver.unobserve(entry.target);
			});
		});
	} else {
		if (constantObserver) return;

		constantObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				const eventName = entry.isIntersecting ? 'enter' : 'exit';
				entry.target.dispatchEvent(new CustomEvent(eventName));
			});
		});
	}
}

export default function viewport(element: Element, opts: options = { unobserveAfterEnter: false }) {
	ensureIntersectionObserver(opts);

	if (opts.unobserveAfterEnter) {
		oneTimeObserver.observe(element);
	} else {
		constantObserver.observe(element);
	}

	return {
		destroy() {
			if (opts.unobserveAfterEnter) {
				oneTimeObserver.unobserve(element);
			} else {
				constantObserver.unobserve(element);
			}
		}
	};
}
