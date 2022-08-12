let emailPar = document.getElementById('email');
let finishedEmail = 'hello'+'@'+'groundup'+'.'+'com';
let steamPieces = document.getElementById('steam').childNodes;
let groundupLogo = document.getElementById('header-logo');

let menuWrapper = document.querySelector('header > div');
let menu = document.querySelector('header nav ul');
let menuItems = document.querySelectorAll('header nav li');
let isOpen = false; //nav default to closed

emailPar.innerHTML = '<a ' + 'style="color:#6B350E;"' + 'hre' + 'f="mai' + 'lto:' + finishedEmail + '">' + finishedEmail + '</' + 'a>';
emailPar.addEventListener('mouseenter', hoverEnter);
emailPar.addEventListener('mouseleave', hoverLeave);
groundupLogo.addEventListener('mouseenter', floatUp);

menuWrapper.addEventListener('click', gsapToggle);

let tlSteam = new gsap.timeline();
let tlMenu = new gsap.timeline();
tlMenu.pause();
tlMenu.to('header nav ul', {x:'-101%', duration:.5});
tlMenu.fromTo('header nav li', {opacity:0}, {opacity:1, duration:.35, stagger:.15}, '-=.25'); 

function hoverEnter() {
    emailPar.childNodes[0].style.color = '#efc143';
}
function hoverLeave() {
    emailPar.childNodes[0].style.color = '#6B350E';
}
function floatUp() {
	if (tlSteam.progress() == 1 || tlSteam.progress() == 0) {
		tlSteam.to('#steam path', {duration:3, y:-20, stagger:.125});
		tlSteam.set('#steam path', {y:0}, '+=0.5');
	}
	return;
}
function gsapToggle() {
	
	if (isOpen == false) {
		isOpen = true;
		tlMenu.timeScale(1).play();
	}
	else {
		isOpen = false;
		
		tlMenu.pause().timeScale(2).reverse();
	}
}