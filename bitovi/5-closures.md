# Training Series - Closures
**Pass by reference vs pass by value**
```js
const sum = (x,y) => {
  return (++x) + (++y.val);
};
const a = 1;
const b = { val:2 };
const c = sum(a,b); //a is passed by value, b is passes by reference
console.log(c); //5 (a is 1, increment to 2, b.val is 2, increment to 3)
```

**Basic closures**
```js
const counter = () => {
  let count = 0;
  return () => ++count;
};

const c1 = counter(); //undefined, b/c c1 is pointing to function
c1(); //1, increase count from 0 to 1
c1(); //2, increase count again from 1 to 2
c1(); //3, increase count again from 2 to 3

const c2 = counter(); //undefined, b/c c2 is pointing to a different function
c2(); //1, reset, count is increase from 0 to 1 again
```

**Closure gotchas**
```js
//this scenario only works with 'var' in the for loop, if you replace 'var' with 'let', the problem resolved
var a = {};
for (var i=0; i<3; i++) {
  a[i] = () => { console.log(i) };
}
a[0](); //3
a[1](); //3
a[2](); //3
```

* Self invoking, anonymous functions: `((x) => ++x)(3) //4` 
* `this` will normally point to the window
* Exercise!

