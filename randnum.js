let randomField = document.getElementById('random');
document.getElementById('calcran').onclick = printRandNum;
function printRandNum() {
let randNum = Math.round(Math.random() * 100);
randNum = document.getElementById('random').value = randNum;
}