function School(name) {
  this.name = name;
}


const student = new School('sophia');

School.prototype.isMine = true;


const DOT = (obj, prop) => {
  if (obj) {
    if (obj.hasOwnProperty(prop)) {
      return obj[prop];
    }
    return DOT(obj.__proto__, prop);
  }
};

console.log(DOT(student, 'toString')); //[Function: toString]
console.log(DOT(student, 'isMine')); //true
