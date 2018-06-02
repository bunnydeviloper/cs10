// crreate make and add methods to make
const make = {};
const tagNames = ['h1', 'div', 'p', 'label', 'a'];

tagNames.forEach( (e) => {
  make[e] = () => {
    return document.createElement(e);
  }
});

const h1 = make.h1();
h1.innerHTML = 'Hello World';
document.body.appendChild(h1);

const a = make.a();
a.href = 'http://canjs.com';
a.innerHTML = 'CanJS';
document.body.appendChild(a);
