// Subclass with ES6
class Tree {
  constructor(size = '10', leaves = {spring: 'rainbow', summer: 'green', fall: 'orange', winter: null}) {
    this.size = size;
    this.leaves = leaves;
    this.leafColor = null;
  }

  changeSeason(season) {
    this.leafColor = this.leaves[season];
    if (season === 'spring') {
      this.size += 1;
    }
  }
}

class Maple extends Tree {
  constructor(syrupQty = 15, size, leaves) {
    super(size, leaves);
    this.syrupQty = syrupQty;
  }

  changeSeason(season) {
    super.changeSeason(season);
    if (season === 'spring') {
      this.syrupQty += 1;
    }
  }

  gatherSyrup() {
    this.syrupQty -= 3;
  }
}

const myMaple = new Maple(15, 5);
myMaple.changeSeason('fall');
myMaple.gatherSyrup();
console.log(myMaple);
myMaple.changeSeason('spring');
console.log(myMaple);

// Compare to ES5 subclasses
function OldTree(size, leaves) {
  this.size = (typeof size === "undefined")? 10 : size;
  const defaultLeaves = {spring: 'rainbow', summer: 'green', fall: 'orange', winter: null};
  this.leaves = (typeof leaves === "undefined")?  defaultLeaves : leaves;
  this.leafColor;
}

OldTree.prototype.changeSeason = function(season) {
  this.leafColor = this.leaves[season];
  if (season === 'spring') {
    this.size += 1;
  }
}

function OldMaple (syrupQty, size, leaves) {
  OldTree.call(this, size, leaves);
  this.syrupQty = (typeof syrupQty === "undefined")? 15 : syrupQty;
}

OldMaple.prototype = Object.create(Tree.prototype);
OldMaple.prototype.constructor = Maple;

OldMaple.prototype.changeSeason = function(season) {
  Tree.prototype.changeSeason.call(this, season);
  if (season === 'spring') {
    this.syrupQty += 1;
  }
}

OldMaple.prototype.gatherSyrup = function() {
  this.syrupQty -= 3;
}

const myOldMaple = new OldMaple(15, 5);
myOldMaple.changeSeason('fall');
myOldMaple.gatherSyrup();
console.log(myOldMaple);
myOldMaple.changeSeason('spring');
console.log(myOldMaple);
