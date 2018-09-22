var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item, val) { // O(n)
  for (var key in this._storage) {
    if (this._storage[key] === val) {
      delete this._storage[item];
    }
  }
  this._storage[item] = val;
};

setPrototype.contains = function(item) { // O(1)
  return this._storage[item] ? true : false;
};

setPrototype.remove = function(item) { // O(1)
  delete this._storage[item];
};
