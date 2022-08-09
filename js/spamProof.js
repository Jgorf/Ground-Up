let emailPar = document.getElementById('email');
let finishedEmail = 'hello'+'@'+'groundup'+'.'+'com';
emailPar.innerHTML = '<a ' + 'style="color:#6B350E;"' + 'hre' + 'f="mai' + 'lto:' + finishedEmail + '">' + finishedEmail + '</' + 'a>';
emailPar.addEventListener('mouseover', hoverEnter);
emailPar.addEventListener('mouseout', hoverLeave);

function hoverEnter() {
    emailPar.childNodes[0].style.color = '#efc143';
}
function hoverLeave() {
    emailPar.childNodes[0].style.color = '#6B350E';
}