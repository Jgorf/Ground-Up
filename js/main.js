let emailPar = document.getElementById('email');
let finishedEmail = 'hello'+'@'+'groundup'+'.'+'com';
let steamPieces = document.getElementById('steam').childNodes;
let groundupLogo = document.getElementById('header-logo');
emailPar.innerHTML = '<a ' + 'style="color:#6B350E;"' + 'hre' + 'f="mai' + 'lto:' + finishedEmail + '">' + finishedEmail + '</' + 'a>';
emailPar.addEventListener('mouseenter', hoverEnter);
emailPar.addEventListener('mouseleave', hoverLeave);
groundupLogo.addEventListener('mouseenter', floatUp);
groundupLogo.addEventListener('mouseleave', floatReset);
let tl = new gsap.timeline();
function hoverEnter() {
    emailPar.childNodes[0].style.color = '#efc143';
}
function hoverLeave() {
    emailPar.childNodes[0].style.color = '#6B350E';
}
function floatUp() {
    tl.to('#anim', {duration:3, scale:0});
    tl.play();
    tl.set('#anim', {scale:1}); //this resets it but repeats more than once when I dont want it to
}
function floatReset() {
    tl.restart();
    tl.pause();
}

/* How do I reset timeline at the end of animation? */
/* Why don't I need to use import { gsap } from "gsap"; */