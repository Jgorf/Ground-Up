//logo vars
let steamPieces = document.getElementById('steam').childNodes;
let groundupLogo = document.getElementById('header-logo');
let tlSteam = new gsap.timeline();
//menuVars
let menuWrapper = document.querySelector('header > button');
let menu = document.querySelector('header nav ul');
let menuItems = document.querySelectorAll('header nav li');
let isOpen = false; //nav default to closed
let wrapperDiv = document.getElementById('wrapper');
let tlMenu = new gsap.timeline();
//page highlight var
let pageLinks = document.querySelectorAll('header nav ul li a');
let currPage = document.URL.toString();

//email vars
let emailPar = document.getElementById('email');
let finishedEmail = 'hello'+'@'+'groundup'+'.'+'com';
emailPar.innerHTML = '<a ' + 'style="color:#6B350E;" class="emailLink"' + 'hre' + 'f="mai' + 'lto:' + finishedEmail + '">' + finishedEmail + '</' + 'a>';
let emailLink = document.querySelector('.emailLink');
//eventListenters
emailLink.addEventListener('mouseenter', hoverEnter);
emailLink.addEventListener('mouseleave', hoverLeave);
groundupLogo.addEventListener('mouseenter', floatUp);
menuWrapper.addEventListener('click', gsapToggle);
wrapperDiv.addEventListener('click', hideNav);
window.addEventListener("resize", function() {
	if (window.innerWidth > 500 && isOpen) {
		gsapToggle();
	}
});
window.addEventListener('load', function() { //highlights current page
	for (let i = 0; i < pageLinks.length; i++) {
		let pageHref = pageLinks[i].getAttribute('href')
		if (currPage.includes(pageHref)) {
			pageLinks[i].style.color = '#ea855e';
			pageLinks[i].classList.add('current');
		}
		else if (!currPage.includes('index.html')) {
			pageLinks[i].style.opacity = '0.5';
		}
	}
})
//mobile navbar animations
tlMenu.pause();
tlMenu.set('header > button span', {height:'4.5px'});
tlMenu.to('header nav ul', {x:'-101%', duration:.35});
tlMenu.to('#mid-bar', {opacity:0, duration:.2}, '-=.3');
tlMenu.to('#top-bar', {x:-6, y:7, rotate:45, duration:.15}, '-=.25');
tlMenu.to('#bottom-bar', {x:-6, y:-11, rotate:-45, duration:.15}, '-=.25');
tlMenu.fromTo('header nav li', {opacity:0}, {opacity:1, duration:.2, stagger:.115}, '-=.135'); 

function hoverEnter() {
    emailPar.childNodes[0].style.color = '#ea855e';
}
function hoverLeave() {
    emailPar.childNodes[0].style.color = '#6B350E';
}
function floatUp() { //hover animation for logo
	if (tlSteam.progress() == 1 || tlSteam.progress() == 0) {
		tlSteam.to('#steam path', {duration:3, y:-20, stagger:.125});
		tlSteam.set('#steam path', {y:0}, '+=0.25');
	}
	return;
}
function gsapToggle() { //animations and logic for mobile nav
	
	if (isOpen == false) {
		isOpen = true;
		menuWrapper.style.position = 'fixed';
		tlMenu.timeScale(1).play();
		menuWrapper.setAttribute('aria-expanded', true);
	}
	else {
		isOpen = false;
		menuWrapper.style.position = 'absolute';
		tlMenu.pause().timeScale(2).reverse();
		menuWrapper.setAttribute('aria-expanded', false);
	}
}
function hideNav(el) { //hides nav when user clicks on area out side of nav (anywhere that does not have the overlay)
	if (!el.target.classList.contains('nav-obj') && !el.target.classList.contains('btn-obj')) {
		isOpen = false;
		menuWrapper.style.position = 'absolute';
		tlMenu.pause().timeScale(2).reverse();
		menuWrapper.setAttribute('aria-expanded', false);
	}
	
}
