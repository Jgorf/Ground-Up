let emailPar = document.getElementById('email');
let finishedEmail = 'hello'+'@'+'groundup'+'.'+'com';
let steamPieces = document.getElementById('steam').childNodes;
let groundupLogo = document.getElementById('header-logo');
emailPar.innerHTML = '<a ' + 'style="color:#6B350E;"' + 'hre' + 'f="mai' + 'lto:' + finishedEmail + '">' + finishedEmail + '</' + 'a>';
emailPar.addEventListener('mouseenter', hoverEnter);
emailPar.addEventListener('mouseleave', hoverLeave);
groundupLogo.addEventListener('mouseenter', floatUp);
groundupLogo.addEventListener('mouseleave', floatReset);
let tl = new gsap.timeline();   //{onComplete: floatReset} works but takes too long for me to use want to use it
function hoverEnter() {
    emailPar.childNodes[0].style.color = '#efc143';
}
function hoverLeave() {
    emailPar.childNodes[0].style.color = '#6B350E';
}
function floatUp() {
	tl.to('#steam path', {duration:3, y:-20, stagger:.125});
	tl.set('#steam path', {y:0}, '+=0.5');
	tl.play();
	//tl.then(floatReset); //works how I want the below line to work but only works once
     //this resets it but repeats more than once when I dont want it to
}
function floatReset() {
    tl.restart();
    tl.pause();
}
/* How do I reset timeline at the end of animation? */
/* Why don't I need to use import { gsap } from "gsap"; */