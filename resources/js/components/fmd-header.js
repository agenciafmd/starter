// Hide Header on scroll down
function setupFmdHeader() {
	// Return element's offset top
	function getOffsetTop(selector) {
		return document.getElementsByClassName(selector)[0].getBoundingClientRect().top + window.pageYOffset;
	}

	// Return if selector was found
	function isElementSet(selector) {
		return !!document.getElementsByClassName(selector).length;
	}

	function showHeader() {
		header.classList.remove(hideClass);
		// header.style.transform = 'none';
	}

	function hideHeader() {
		header.classList.add(hideClass);
		// header.style.transform = 'translateY(-100%)';
	}

	function setStickyHeader() {
		header.classList.add(fixedClass);
		header.style.position = 'fixed';
	}

	function unsetStickyHeader() {
		header.classList.remove(fixedClass);
		header.style.position = 'absolute';
	}

	function setHeaderTransition(newTransition) {
		header.style.transitionDuration = `${newTransition}ms`;
	}

	// Initialize variables
	let didScroll;
	let lastScrollTop = 0;
	let fixedTimer;
	const delta = 5; // Minimum scroll value

	// Set classes
	const headerClass = 'fmd-header';
	const startTargetClass = 'fmd-header-start-target';
	const endTargetClass = 'fmd-header-end-target';
	const hideClass = 'fmd-header-is-hidden';
	const fixedClass = 'fmd-header-is-fixed';

	// If fixed header class wasn't found
	if (!isElementSet(headerClass)) {
		console.error(`Use a classe "${headerClass}" no <header> para ativar o fixed header`);
		return;
	}

	// Select fixed header
	const header = document.getElementsByClassName(headerClass)[0];
	const headerTransition = Number(getComputedStyle(header)['transition-duration'].replace('s', '')) * 1000;

	// Start target where header will be fixed | Default: Window Height (100vh)
	const startTarget = isElementSet(startTargetClass) ?
		getOffsetTop(startTargetClass) :
		window.outerHeight;

	// End target where header will be shown | Default: The page bottom
	const endTarget = isElementSet(endTargetClass) ?
		getOffsetTop(endTargetClass) :
		document.body.scrollHeight;

	// Set variable that is used to apply padding-top to the body
	header.style.position = 'absolute';
	setTimeout(function () {
		document.documentElement.style.setProperty('--header-height', header.offsetHeight + 'px');
	}, headerTransition);

	// Scroll event listener
	window.addEventListener('scroll', function () {
		didScroll = true;
	});

	// Watcher that calls function if the window was scrolled
	setInterval(function () {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, headerTransition);

	// When window gets scrolled
	function hasScrolled() {
		const st = window.pageYOffset;

		// Update last scroll top
		function updateLastScroll() {
			lastScrollTop = st;
		}

		// Make sure they scroll more than delta
		if (Math.abs(lastScrollTop - st) <= delta) {
			return;
		}

		setHeaderTransition(headerTransition);

		// If the window bottom reaches end target
		if (st + window.outerHeight >= endTarget) {
			showHeader();
			updateLastScroll();
			return;
		}

		// If scroll down and passes start target
		if (st > lastScrollTop && st > startTarget) {
			window.clearTimeout(fixedTimer);

			fixedTimer = window.setTimeout(function () {
				setStickyHeader();
			}, headerTransition);
		}

		// If scroll down and passes header height
		if (st > lastScrollTop && st > header.offsetHeight) {
			hideHeader();
			updateLastScroll();
			return;
		}

		// If scroll up
		showHeader();

		if (st < header.offsetHeight) {
			setHeaderTransition(0);
		}

		if (st === 0) {
			unsetStickyHeader();
		}

		updateLastScroll();
	}
}
