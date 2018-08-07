
const data = [
  {
    nickName: "catqueen",
    name: "Si Maem (Yes Madam)",
    src: "img/catqueen.jpg",
    meow: "",
    clickCount: 0
  },{
    nickName: "catflower",
    name: "Piti Lati (Pretty Lady)",
    src: "img/catflower.jpg",
    meow: "",
    clickCount: 0
  },{
    nickName: "cateat",
    name: "Yumi Delici (Yummy Delicious)",
    src: "img/cateat.jpg",
    meow: "",
    clickCount: 0
  },{
    nickName: "catbday",
    name: "Hapi BiDi (Happy Birthday)",
    src: "img/catbday.jpg",
    meow: "",
    clickCount: 0
  },{
    nickName: "catnewborn",
    name: "Sua Baibi (Such A Baby)",
    src: "img/catnewborn.jpg",
    meow: "",
    clickCount: 0
  },{
    nickName: "catsushi",
    name: "Fi Shishi (Fish sushi)",
    src: "img/catsushi.png",
    meow: "",
    clickCount: 0
  },{
    nickName: "catbread",
    name: "Gloto Fe (Gluten Free)"
    src: "img/catbread.jpg",
    meow: "",
    clickCount: 0
  },{
    nickName: "kitties",
    name: "Charlie's Angels",
    src: "img/kitties.jpg",
    meow: "",
    clickCount: 0
  }
];

const octopus = {
  getCat: function() {
    // change cat display
  }
  init: function() {
    view.init();
  }
};

const viewAll = {
  init: function() {
    // list all the cats
  }
}

const viewEach = {

}

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
