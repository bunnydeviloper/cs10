
/*
window.onload(function() {
  start();
});
*/

let count = 0;
let meow = '';
const name = ['Gloto', 'Shishi'];

const allcats = document.getElementById('allcats');
const catbread = document.getElementById('catbread');
const catsushi = document.getElementById('catsushi');

const displayCount = document.getElementById('count');
displayCount.innerHTML = count;
const displayMeow = document.getElementById('meow');
displayMeow.innerHTML = meow;

const cat1 = document.getElementById('cat1');
const cat2 = document.getElementById('cat1');

const gloto = document.getElementById('gloto');
gloto.innerHTML = name[0];
const shishi = document.getElementById('shishi');
shishi.innerHTML = name[1];

catbread.addEventListener('click', function() {
  //do sth
  count++;
  displayCount.innerHTML = count;
  meow += 'meowww ';
  displayMeow.innerHTML = meow;

}, false);

catsushi.addEventListener('click', function() {
  //do sth
  count++;
  displayCount.innerHTML = count;
  meow += 'meowww ';
  displayMeow.innerHTML = meow;

}, false);
