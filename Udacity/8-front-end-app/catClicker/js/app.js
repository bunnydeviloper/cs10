let count = 0;
let meow = '';

const name = {
  catqueen: "Si Maem (Yes Madam)",
  catflower: "Piti Lati (Pretty Lady)",
  cateat: "Yumi Delici (Yummy Delicious)",
  catbday: "Hapi BiDi (Happy Birthday)",
  catnewborn: "Sua Baibi (Such A Baby)",
  catsushi: "Fi Shishi (Fish sushi)",
  catbread: "Gloto Fe (Gluten Free)",
  kitties: "Charlie's Angels",

};

const cat = document.getElementById('cat');
const catName = document.getElementById('catName');
const catImg = document.getElementById('catImg');
const displayCount = document.getElementById('count');
displayCount.innerHTML = count;
const displayMeow = document.getElementById('meow');
displayMeow.innerHTML = meow;


const catList = document.getElementById('catList').getElementsByTagName('img');

for (let i=0; i < catList.length; i++) {
  let el = catList[i];
  el.addEventListener('click', catClick(event, count, meow), false);
}

function catClick(eventCopy, countCopy, meowCopy) {
  return function(eventCopy, countCopy, meowCopy) {
    console.log('you clicked', eventCopy.target.id);
    countCopy++;
    displayCount.innerHTML = countCopy;
    meowCopy += 'meowww ';
    displayMeow.innerHTML = meowCopy;
    catName.innerHTML = name[eventCopy.target.id];
    catImg.src = eventCopy.target.src;
  };
};
