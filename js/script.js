//mainblock center

const mainblock = document.querySelector('#main');
mainblock.style.height = window.innerHeight - document.querySelector('.header').clientHeight + 'px';

window.addEventListener('resize', function () {
	mainblock.style.height = window.innerHeight - document.querySelector('.header').clientHeight + 'px';
})


