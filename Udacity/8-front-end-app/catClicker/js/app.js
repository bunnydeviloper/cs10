/* ========== Model ==========*/

const model = {
  currentCat: null,
  cats: [
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
  ]
};

/* ========== Octopus ==========*/

const octopus = {
  init: function() {
    // set our current cat to the first one in the list
    model.currentCat = model.cats[0];

    // tell our views to initialize
    viewAll.init();
    viewEach.init();
  },

  getCurrentCat: function() {
    return model.currentCat;
  },
  getAllCats: function() {
    return model.cats;
  },

  setCurrentCat: function(cat) {
    // set the currently-selected cat to the object passed in
    model.currentCat = cat;
  },

  incrementCounter: function() {
    // increments the counter for the currently-selected cat
    model.currentCat.clickCount++;
    viewEach.render();
  }
};

/* ========== viewEach ==========*/
const viewEach = {
  init: function() {
    // store pointers to our DOM elements for easy access later
    this.catElem = document.getElementById('cat');
    this.catName = document.getElementById('catName');
    this.catImg = document.getElementById('catImg');
    this.displayCount = document.getElementById('count');
    this.displayMeow = document.getElementById('meow');

    // on click, increment the current cat's counter
    this.catImg.addEventListener('click', function() {
      octopus.incrementCounter();
    });

    // render this view (update the DOM elements with the right values
    this.render();
  },

  render: function() {
    // update the DOM elements with values from the current cat
    const currentCat = octopus.getCurrentCat();
    this.displayCount.textContent = currentCat.clickCount;
    this.catName.textContent = currentCat.name;
    this.catImg.src = currentCat.src;
  }
};

/* ========== viewAll ==========*/

const viewAll = {
  init: function() {
    //const catList = document.getElementById('catList').getElementsByTagName('img');
    const catList = document.getElementById('catList');
    this.render();
  },
  render: function() {
    octopus.getAllCats();
  }
};

octopus.init();




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
