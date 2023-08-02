const burgerBtn = document.querySelector('#burger');
const sidebar = document.querySelector('#sidebar');
const closeBtn = document.querySelector('#sidebar-close');
const sidebarBG = document.querySelector('#sidebar-background');
const body = document.body;
let w = window.outerWidth;

export function Sidebar() {
	burgerBtn.addEventListener('click', function () {
		showSidebar();
	});

	window.addEventListener('resize', function () {
		closeSidebar();
	});

	clickEvent(closeBtn);
	clickEvent(sidebarBG);
}

function clickEvent(el) {
	el.addEventListener('click', function () {
		closeSidebar();
	});
}

function showSidebar() {
	sidebar.classList.add('show');
	body.classList.add('lock');
}

function closeSidebar() {
	sidebar.classList.remove('show');
	body.classList.remove('lock');
}