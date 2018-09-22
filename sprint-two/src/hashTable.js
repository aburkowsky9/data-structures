var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  
  var tuple = [k, v];
  if (!Array.isArray(this._storage[index])) {
    this._storage[index] = [];
    let bucket = this._storage[index];
    bucket.push(tuple);
  } else {
    this.storage[index].push(tuple);
    let bucket = this._storage[index];  
  }
  
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return this._storage.get(bucket[i][1]);
    }
  }
  
 
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(val, i, storage) {
    if (i === index) {
      delete storage[i];
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


