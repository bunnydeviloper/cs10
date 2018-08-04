
/*
window.onload(function() {
  start();
});
*/

let count = 0;
let meow = '';

const img = document.getElementById('catimg');
const displayCount = document.getElementById('count');
displayCount.innerHTML = count;
const displayMeow = document.getElementById('meow');
displayMeow.innerHTML = meow;


img.addEventListener('click', function() {
  //do sth
  count++;
  displayCount.innerHTML = count;
  meow += 'meowww ';
  displayMeow.innerHTML = meow;

}, false);

const start = () => {
  count = 0;
}
