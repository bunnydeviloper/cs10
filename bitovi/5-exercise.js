// crreate make
const make = {};

make.h1 = () => {
  return document.createElement('h1');
};

const h1 = make.h1();
h1.innerHTML = 'Hello World';
document.body.appendChild(h1);

const a = make.a();
a.href = 'http://canjs.com';
a.innerHTML = 'CanJS';
document.body.appendChild(a);
